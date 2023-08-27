import React, { useState, useRef, useCallback, useContext } from "react";
import { AgGridReact } from "ag-grid-react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import styles from "./ProductTable.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context/application-context";
import DeleteModal from "./DeleteModal";

const imageRender = (props) => {
  return (
    <div className={styles.img_container}>
      <img
        src={props.data?.ImageURL}
        alt="product_image"
        className={styles.img}
      />
    </div>
  );
};

const actionsRender = (props) => {
  const productId = props.data?.ID;

  return (
    <div className={styles.action_container}>
      <div className={styles.action}>
        <Link to={`/edit-product/${productId}`}>
          <ModeEditOutlinedIcon
            style={{
              color: "black",
            }}
          />
        </Link>
      </div>
      <div className={styles.action}>
        <DeleteModal productId={productId} />
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
