import { AddCircle, Close, RemoveCircle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import "./basicModal.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "650px",
  bgcolor: "#FBFBFB",
  border: "none",
  boxShadow: 2,
  p: 2,
};

export default function BasicModal({
  open,
  setOpen,
  productDetail,
}: {
  open: boolean;
  setOpen: any;
  productDetail: any;
}) {
  const handleClose = () => {
    setOpen(false);
    setQuantity(1);
    setTotal(0);
  };

  const [quantity, setQuantity] = useState<number>(1);

  const [total, setTotal] = useState<number>(0);
  // tang so luong
  const increase = () => {
    setQuantity(quantity + 1);
    if (quantity === 1 && total === 0) {
      setTotal(2 * productDetail.price);
    } else {
      setTotal(total + productDetail.price);
    }
  };
  // giam so luong
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (quantity === 1 && total === 0) {
        setTotal(productDetail.price);
      } else {
        setTotal(total - productDetail.price);
      }
    }
  };

  //them topping
  const plusTopping = (e: any) => {
    const checked = e.target.checked;
    //Kiem tra xem checkbox la checked or not
    if (checked) {
      if (total !== 0) {
        setTotal(total + 9000);
      } else if (total === 0) {
        setTotal(productDetail.price + 9000);
      }
    } else {
      setTotal(total - 9000);
    }
  };
  return (
    
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} height="70%" className="custom-box-modal">
          <div className="modal-content-up container-fruid row">
            <div className="modal-img col-lg-4 col-6">
              <img
                src="https://tocotocotea.com/wp-content/uploads/2021/12/Hi%CC%80nh-a%CC%89nh-sp-website_1000x1000_choco-ngu%CC%83-co%CC%82%CC%81c-kem-cafe.png"
                alt=""
              />
            </div>
            <div className="modal-info col-lg-7 col-6">
              <div className="modal-info-title">{productDetail.name}</div>
              <div className="modal-info-price">
                {" "}
                {productDetail?.price
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                đ{" "}
                <del>
                  {productDetail?.salePrice
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  đ
                </del>
              </div>
              <div className="modal-info-description">Chưa có thông tin</div>
              <div className="modal-info-quantity-total row">
                <div className="modal-info-quantity col-lg-6">
                  <RemoveCircle className="custom-icon" onClick={decrease} />{" "}
                  {quantity}{" "}
                  <AddCircle className="custom-icon" onClick={increase} />
                </div>
                <div className="modal-info-total col-lg-6">
                  {total! === 0
                    ? `+ ${productDetail?.price
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ `
                    : `+ ${total
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ`}
                </div>
              </div>
            </div>
          </div>

          <Close
            className="custom-icon-close"
            fontSize="large"
            onClick={handleClose}
          />

          <div className="modal-content-down container">
            <div className="modal-select row col-12">
              <p>Chọn Size</p>
              <div className="wrap-input row">
                {productDetail.sizeM && (
                  <div className="custom-modal-input col-5">
                    <input
                      type="radio"
                      name="size"
                      className="custom-input"
                      id="sizem"
                      // checked
                      value="m"
                    />
                    <label htmlFor="sizem">Size M</label>
                  </div>
                )}
                {productDetail.sizeL && (
                  <div className="custom-modal-input col-5">
                    <input
                      type="radio"
                      name="size"
                      className="custom-input"
                      id="sizel"
                      value="l"
                    />
                    <label htmlFor="sizel">Size L</label>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-select row col-12">
              <p>Chọn đường</p>
              <div className="wrap-input row">
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="sugar"
                    className="custom-input"
                    id="100sugar"
                    value="100sugar"
                  />
                  <label htmlFor="100sugar">100% đường</label>
                </div>
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="sugar"
                    className="custom-input"
                    id="50sugar"
                    value="50sugar"
                  />
                  <label htmlFor="50sugar">50% đường</label>
                </div>
              </div>
            </div>
            <div className="modal-select row col-12">
              <p>Chọn topping</p>
              <div className="wrap-input row">
                <div className="custom-modal-checkbox col-7">
                  <input
                    type="checkbox"
                    name="ttsm"
                    className="custom-checkbox"
                    id="ttsm"
                    value="ttsm"
                    onClick={(e) => plusTopping(e)}
                  />
                  <label htmlFor="ttsm" style={{ margin: "0 1%" }}>
                    Thêm trân châu sương mai
                  </label>
                </div>
                <div className="custom-modal-checkbox-price col-5">
                  + 9.000đ
                </div>
              </div>
              <div className="wrap-input row">
                <div className="custom-modal-checkbox col-7">
                  <input
                    type="checkbox"
                    name="hatre"
                    className="custom-checkbox"
                    id="hatre"
                    value="hatre"
                    onClick={(e) => plusTopping(e)}
                  />
                  <label htmlFor="hatre" style={{ margin: "0 1%" }}>
                    Thêm hạt rẻ
                  </label>
                </div>
                <div className="custom-modal-checkbox-price col-5">
                  + 9.000đ
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}