import React, { useState, useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  notifyUndefinedProductId,
  notifyError,
  notifyDeleteProductSuccessful,
} from "../utils/toastify-objects";
import { AppContext } from "../context/application-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./DeleteModal.module.css";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const DeleteModal = ({ productId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const appCtx = useContext(AppContext);
  const user = appCtx.user;
  const fetchAgain = appCtx.fetchAgain;
  const setFetchAgain = appCtx.setFetchAgain;

  const productDeleteHandler = async () => {
    if (!productId) {
      notifyUndefinedProductId();
      return;
    }

    try {
      const config = {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.delete(
        `/api/products/delete-products/${productId}`,
        config
      );

      notifyDeleteProductSuccessful();
      setFetchAgain(!fetchAgain);
      navigate("/products");
    } catch (error) {
      notifyError();
    }
  };

  return (
    <>
      <DeleteOutlinedIcon onClick={handleOpen} />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box className={styles.modal_container}>
            <div className={styles.heading}>Delete Product</div>

            <div className={styles.content}>
              Once you delete this product, you won't be able to retrive it. Are
              you sure you want to delete the product permanently ?
            </div>

            <button
              className={styles.delete_button}
              onClick={productDeleteHandler}
            >
              Delete Product
            </button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default DeleteModal;
