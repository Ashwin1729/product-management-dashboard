import React, { useState, useRef, useCallback, useContext } from "react";
import { AgGridReact } from "ag-grid-react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from "./ProductTable.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context/application-context";
import DeleteModal from "./DeleteModal";

const imageRender = () => {
  return (
    <div className={styles.img_container}>
      <img
        src="data:image/jpeg;base64,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"
        className={styles.img}
      />
    </div>
  );
};

const actionsRender = (props) => {
  return (
    <div className={styles.action_container}>
      <div className={styles.action}>
        <Link to={`/edit-product/${props.data?.ID}`}>
          <ModeEditOutlinedIcon
            style={{
              color: "black",
            }}
          />
        </Link>
      </div>
      <div className={styles.action}>
        <DeleteModal />
      </div>
    </div>
  );
};

const priceRender = (props) => {
  return "$" + props.value;
};

const columnData = [
  { field: "ID", filter: true, sortable: true, width: 100 },
  { field: "Title", filter: true, sortable: true },
  { field: "Image", filter: true, sortable: true, cellRenderer: imageRender },
  { field: "Price", sortable: true, filter: true, cellRenderer: priceRender },
  { field: "Quantity", filter: true, sortable: true },
  {
    field: "Action",
    filter: true,
    sortable: true,
    cellRenderer: actionsRender,
  },
];

const ProductTable = () => {
  const gridRef = useRef(); // Optional - for accessing Grid's API
  const [columnDefs, setColumnDefs] = useState(columnData);

  const appCtx = useContext(AppContext);
  const productsData = appCtx.productsData;

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  // Example load data from server
  //   useEffect(() => {
  //     fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //       .then((result) => result.json())
  //       .then((rowData) => setRowData(rowData));
  //   }, []);

  // Example using Grid's API
  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  return (
    <div className={styles.table_container}>
      {/* Example using Grid's API */}

      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "50vh" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={productsData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            flex: 1,
            minWidth: 100,
            filter: true,
            resizable: true,
          }}
          animateRows={true}
          rowSelection="multiple"
          onCellClicked={cellClickedListener}
          resizable={true}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
    </div>
  );
};

export default ProductTable;
