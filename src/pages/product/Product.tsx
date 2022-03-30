import { AddCircle, RemoveCircle } from "@mui/icons-material";
import React, { memo, useEffect, useRef, useState } from "react";
import BasicModal from "../../components/modal/BasicModal";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { IProduct, IState } from "../../interfaces";
import { getProduct } from "../../services";
import "./product.css";

export const Product: React.FC = memo(() => {
  const [datas, setData] = useState<IProduct[] | null>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getProduct();
      let data = await response.data;
      setData(data);
    };
    getData();
  }, []);
  //Set model
  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [productDetail, setProductDetail] = useState<any>([]);
  const handleShowDetail = (item: any) => {
    setProductDetail(item);
  };
  const soLuongSanPham = (type: string) => {
    if (datas !== null) {
      const sl = datas?.filter((a) => a.category === type);
      return sl!.length;
    }
  };

  // giao diện card sản phẩm
  const Product = (props: any) => {
    const { productImg, productName, price, salePrice, item } = props;
    return (
      <div
        className="card col-lg-3 col-4"
        onClick={() => {
          handleOpen();
          handleShowDetail(item);
          setSeletedProduct(INIT_DATA);
        }}
      >
        <img className="card-img-top" src={productImg} alt="" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <div className="card-text row">
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ{" "}
            <del>
              {salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ
            </del>
            <div className="card-icon col-1">
              <AddCircle />
            </div>
          </div>
        </div>
      </div>
    );
  };
  //giao diện giỏ hàng
  const Cart = (props: any) => {
    const {
      cartName,
      cartPrice,
      cartSize,
      cartTopping,
      cartIce,
      cartSugar,
      cartQuantity,
    } = props;
    return (
      <>
        <div className="custom-cart-product row-3 row">
          <div className="custom-cart-main col-9">
            <div className="custom-cart-title">
              {cartName} ({cartSize.toUpperCase()})
            </div>
            <div className="custom-cart-detail">
              Thêm{" "}
              {cartTopping!.map((a: string) => (
                <span>{a}, </span>
              ))}
              {cartIce}% đá, {cartSugar}% đường
            </div>
            <div className="custom-cart-price">
              {cartQuantity} x{" "}
              <span>
                {cartPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>{" "}
              ={" "}
              {(cartQuantity * cartPrice)
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              đ
            </div>
          </div>
          <div className="custom-cart-inDeCrease col-3 d-flex align-items-center">
            <RemoveCircle className="custom-cart-icon" onClick={decrease} />{" "}
            {cartQuantity} <AddCircle className="custom-cart-icon" onClick={increase} />
          </div>
        </div>
        <hr />
      </>
    );
  };
  //su kien khi click vao danh muc san pham
  const monnoibatSection = useRef<HTMLDivElement | null>(null);
  const trasuaSection = useRef<HTMLDivElement | null>(null);
  const freshteaSection = useRef<HTMLDivElement | null>(null);
  const suachuadeoSection = useRef<HTMLDivElement | null>(null);
  const handleGoToSection = (section: any) => {
    return window.scrollTo({ top: section.current.offsetTop });
  };

  //gio hang
  const [productcarts, setProductCarts] = useState<IState[]>([]);
  console.log('productcarts',productcarts)

  //so luong san pham muon mua
  const [cartQuantity, setCartQuantity] = useState<number>(1);

  const INIT_DATA: IState = {
    name: "",
    price: 0,
    quantitySelect: 1,
    size: "m",
    sugar: "100sugar",
    ice: "100ice",
    topping: [],
  };

  //san pham da chon
  const [seletedProduct, setSeletedProduct] = useState<IState>(INIT_DATA);

  // tang so luong
  const increase = () => {
    console.log('tang');
    console.log();
    
    
    // if (quantity === 1 && total === 0) {
    //   setTotal(2 * productDetail.price);
    // } else {
    //   setTotal(total + productDetail.price);
    // }
  };
  // giam so luong
  const decrease = () => {
    console.log('giam');
    
    // if (quantity > 1) {
    //   setQuantity(quantity - 1);
    //   if (quantity === 1 && total === 0) {
    //     setTotal(productDetail.price);
    //   } else {
    //     setTotal(total - productDetail.price);
    //   }
    }
  

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="http://">
          <img
            src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/logo.png"
            alt=""
          ></img>
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Tìm kiếm sản phẩm ..."
            aria-label="Search"
          />
        </form>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="categories container">
              <p>DANH MỤC</p>
              <hr />
              <div className="category-quantity row">
                <div
                  className="category col-sm-6"
                  onClick={() => {
                    handleGoToSection(monnoibatSection);
                  }}
                >
                  Món nổi bật
                </div>
                <div className="quantity col-sm-6">{soLuongSanPham("hot")}</div>
              </div>
              <hr />
              <div
                className="category-quantity row"
                onClick={() => {
                  handleGoToSection(trasuaSection);
                }}
              >
                <div className="category col-sm-6">Trà sữa</div>
                <div className="quantity col-sm-6">
                  {soLuongSanPham("category 1")}
                </div>
              </div>
              <hr />
              <div
                className="category-quantity row"
                onClick={() => {
                  handleGoToSection(freshteaSection);
                }}
              >
                <div className="category col-sm-6">Fresh Fruit Tea</div>
                <div className="quantity col-sm-6">
                  {soLuongSanPham("category 2")}
                </div>
              </div>
              <hr />
              <div
                className="category-quantity row"
                onClick={() => {
                  handleGoToSection(suachuadeoSection);
                }}
              >
                <div className="category col-sm-6">Sữa chua dẻo</div>
                <div className="quantity col-sm-6">
                  {soLuongSanPham("category 3")}
                </div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="products row">
              <p ref={monnoibatSection}>Món nổi bật</p>
              {datas!
                .filter((data) => data.category === "hot")
                .map((item) => (
                  <Product
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                  />
                ))}
              <p ref={trasuaSection}>Trà sữa</p>
              {datas!
                .filter((data) => data.category === "category 1")
                .map((item) => (
                  <Product
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                  />
                ))}

              <p ref={freshteaSection}>Fresh Fruit Tea</p>
              {datas!
                .filter((data) => data.category === "category 2")
                .map((item) => (
                  <Product
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                  />
                ))}
              <p className="products-scd" ref={suachuadeoSection}>
                Sữa chua dẻo
              </p>
              {datas!
                .filter((data) => data.category === "category 3")
                .map((item) => (
                  <Product
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                  />
                ))}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="cart col-sm-12">
              <div className="row-3 row custom-cart-header">
                <div className="col-7">GIỎ HÀNG CỦA TÔI</div>
                <div
                  className="col-5"
                  onClick={() => {
                    setProductCarts([]);
                  }}
                >
                  Xóa tất cả
                </div>
              </div>
              <hr />
              {productcarts!.map((item, index) => {
                return (
                  <Cart
                    key={index}
                    cartName={item.name}
                    cartPrice={item.price}
                    cartSize={item.size}
                    cartTopping={item.topping.map((t: string) => {
                      return t === "ttsm" ? "trân châu sương mai" : "hạt rẻ";
                    })}
                    cartIce={item.ice === "100ice" ? "100" : "50"}
                    cartSugar={item.sugar === "100sugar" ? "100" : "50"}
                    cartQuantity={item.quantitySelect}
                  />
                );
              })}

              <div className="row-3 custom-card-quantity">
                <img
                  src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-glass-tea.png"
                  alt=""
                ></img>
                x 0 = 0 đ
              </div>
              <div className="row-3 ">
                <button type="button" className="btn custom-btn-pay">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <BasicModal
        setOpen={setOpen}
        open={open}
        productDetail={productDetail}
        setCartQuantity={setCartQuantity}
        productcarts={productcarts}
        setProductCarts={setProductCarts}
        INIT_DATA={INIT_DATA}
        seletedProduct={seletedProduct}
        setSeletedProduct={setSeletedProduct}
      />
    </div>
  );
});
