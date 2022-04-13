import { AddCircle, Close, RemoveCircle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { INIT_PRODUCT, productState } from "../../../recoilProvider/productProvider";
import { accountState } from "../../../recoilProvider/userProvider";
import "./basicModal.css";
import style from "./styleBox";

export default function BasicModal({
  open,
  setOpen,
  productDetail,
  productCarts,
  setProductCarts,
  INIT_DATA,
  seletedProduct,
  setSeletedProduct,
  context,
}: {
  open: boolean;
  setOpen: any;
  productDetail: any;
  productCarts: any;
  setProductCarts: any;
  INIT_DATA: any;
  seletedProduct: any;
  setSeletedProduct: any;
  context: any;
}) {
  const [quantity, setQuantity] = useState<number>(1);

  const [total, setTotal] = useState<number>(0);

  const [account, setAccount] = useRecoilState(accountState);
  const [product, setProduct] = useRecoilState(productState);


  useEffect(() => {
    setSeletedProduct({
      ...seletedProduct,
      price: total !== seletedProduct.price ? seletedProduct.price : total,
      quantitySelect: quantity,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, +productDetail.price, quantity]);



  const handleClose = () => {
    setOpen(false);
    setQuantity(1);
    setTotal(0);
    setSeletedProduct(INIT_DATA);
    setProduct(INIT_PRODUCT);
  };
  // tang so luong
  const increase = () => {
    setQuantity(quantity + 1);
    if (quantity === 1 && total === 0) {
      setTotal(2 * +productDetail.salePrice);
    } else {
      setTotal(total + +productDetail.salePrice);
    }
    console.log("total", total);
  };
  // giam so luong
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (quantity === 1 && total === 0) {
        setTotal(+productDetail.salePrice);
      } else {
        setTotal(total - +productDetail.salePrice);
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
        setTotal(+productDetail.salePrice + 9000);
      }
    } else {
      setTotal(total - 9000);
    }
  };

  // xu li select radio button click
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    const { topping } = seletedProduct;
    setSeletedProduct({
      ...seletedProduct,
      [name]: value,
    });
    if (name === "topping" && checked) {
      setSeletedProduct({
        ...seletedProduct,
        topping: [...topping, value],
      });
    }
  };
  //Đẩy cart vào local storage
  const putCart = () => {
    localStorage.setItem("cart", JSON.stringify(productCarts));
    // localStorage.setItem("account", JSON.stringify({...account,cart: productCarts}));
    if (account.id) {
      axios.put(
        `https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users/${account.id}`,
        { ...context.current, cart: productCarts }
      );
      const getContext = async () => {
        const res = await axios.get(
          `https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users/${account.id}`
        );
        context.current = res.data;
      };
      getContext()
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="custom-box-modal ">
          <div className="modal-content-up container-fruid row">
            <div className="modal-img col-lg-4 col-6">
              <img src={productDetail.image} alt="" />
            </div>
            <div className="modal-info col-lg-7 col-6">
              <div className="modal-info-title">{productDetail.name}</div>
              <div className="modal-info-price">
                {" "}
                {productDetail?.salePrice
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                đ{" "}
                <del>
                  {productDetail?.price
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  đ
                </del>
              </div>
              <div className="modal-info-description">Chưa có thông tin</div>
              <div className="modal-info-quantity-total row">
                <div className="modal-info-quantity col-lg-6 row p-0 d-flex align-items-center justify-content-center">
                  <div className="col-3 p-0">
                    <RemoveCircle className="custom-icon " onClick={decrease} />
                  </div>
                  <div className="col-4 p-0">{quantity}</div>
                  <div className="col-3 p-0">
                    <AddCircle className="custom-icon" onClick={increase} />
                  </div>
                </div>
                <div
                  className="modal-info-total col-lg-6 text-light w-auto"
                  onClick={() => {
                    handleClose();
                    productCarts.push(seletedProduct);
                    setProductCarts([...productCarts]);
                    putCart();
                  }}
                >
                  {total! === 0
                    ? `+ ${productDetail?.salePrice
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ `
                    : `+ ${total
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ`}
                </div>
              </div>
              <div className="custom-modal-btn-pay">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    handleClose();
                    productCarts.push(seletedProduct);
                    setProductCarts([...productCarts]);

                    putCart();
                  }}
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>

          <Close
            className="custom-icon-close"
            fontSize="large"
            onClick={handleClose}
          />

          <div className="modal-content-down container p-0">
            <div className="modal-select row col-12 p-0">
              <p>Chọn Size</p>
              <div className="wrap-input row">
                {productDetail.sizeM && (
                  <div className="custom-modal-input col-5">
                    <input
                      type="radio"
                      name="size"
                      className="custom-input"
                      id="sizem"
                      value="m"
                      checked={seletedProduct.size === "m"}
                      onChange={(e) => handleSelect(e)}
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
                      checked={seletedProduct.size === "l"}
                      onChange={(e) => handleSelect(e)}
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
                    checked={seletedProduct.sugar === "100sugar"}
                    onChange={(e) => handleSelect(e)}
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
                    checked={seletedProduct.sugar === "50sugar"}
                    onChange={(e) => handleSelect(e)}
                  />
                  <label htmlFor="50sugar">50% đường</label>
                </div>
              </div>
            </div>
            <div className="modal-select row col-12">
              <p>Chọn đá</p>
              <div className="wrap-input row col-12">
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="ice"
                    className="custom-input"
                    id="100ice"
                    value="100ice"
                    checked={seletedProduct.ice === "100ice"}
                    onChange={(e) => handleSelect(e)}
                  />
                  <label htmlFor="100ice">100% đá</label>
                </div>
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="ice"
                    className="custom-input"
                    id="50ice"
                    value="50ice"
                    checked={seletedProduct.ice === "50ice"}
                    onChange={(e) => handleSelect(e)}
                  />
                  <label htmlFor="50ice">50% đá</label>
                </div>
              </div>
            </div>
            <div className="modal-select row col-12 p-0 ">
              <p>Chọn topping</p>
              <div className="custom-select-topping container p-0">
                <div className="wrap-input row">
                  <div className="custom-modal-checkbox row col-9 ">
                    <div className="col-1 p-0  ">
                      <input
                        type="checkbox"
                        name="topping"
                        className="custom-checkbox"
                        id="tranchausuongmai"
                        value="1"
                        onClick={(e) => plusTopping(e)}
                        onChange={(e) => handleSelect(e)}
                      />
                    </div>
                    <div className="col-11 p-0 ">
                      <label
                        htmlFor="tranchausuongmai"
                        style={{ margin: "0 1%" }}
                      >
                        Thêm Trân Châu Sương Mai
                      </label>
                    </div>
                  </div>
                  <div className="custom-modal-checkbox-price col-3 p-0">
                    + 9.000đ
                  </div>
                </div>
                <div className="wrap-input row">
                  <div className="custom-modal-checkbox row col-9 ">
                    <div className="col-1 p-0  ">
                      <input
                        type="checkbox"
                        name="topping"
                        className="custom-checkbox"
                        id="hatre"
                        value="2"
                        onClick={(e) => plusTopping(e)}
                        onChange={(e) => handleSelect(e)}
                      />
                    </div>
                    <div className="col-11 p-0 ">
                      <label htmlFor="hatre" style={{ margin: "0 1%" }}>
                        Thêm Hạt Rẻ
                      </label>
                    </div>
                  </div>
                  <div className="custom-modal-checkbox-price col-3 p-0">
                    + 9.000đ
                  </div>
                </div>
                <div className="wrap-input row">
                  <div className="custom-modal-checkbox row col-9 ">
                    <div className="col-1 p-0  ">
                      <input
                        type="checkbox"
                        name="topping"
                        className="custom-checkbox"
                        id="tranchaubaby"
                        value="3"
                        onClick={(e) => plusTopping(e)}
                        onChange={(e) => handleSelect(e)}
                      />
                    </div>
                    <div className="col-11 p-0 ">
                      <label htmlFor="tranchaubaby" style={{ margin: "0 1%" }}>
                        Thêm Trân Châu Baby
                      </label>
                    </div>
                  </div>
                  <div className="custom-modal-checkbox-price col-3 p-0">
                    + 9.000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
