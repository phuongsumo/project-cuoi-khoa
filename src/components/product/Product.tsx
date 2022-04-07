import React, { memo, useEffect, useRef, useState } from "react";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { IProduct, IState } from "../../interfaces";
import { getProduct } from "../../services";
import CardProduct from "./cardProduct/CardProduct";
import Cart from "./cart/Cart";
import BasicModal from "./modal/BasicModal";
import "./product.css";
import ListIcon from "@mui/icons-material/List";
import axios from "axios";

const Product: React.FC = memo(() => {
  
  const INIT_DATA: IState = {
    id: 0,
    name: "",
    price: 0,
    quantitySelect: 1,
    size: "m",
    sugar: "100sugar",
    ice: "100ice",
    topping: [],
  };

  const [datas, setData] = useState<IProduct[] | null>([]);
  const [open, setOpen] = useState(false);

  const [productDetail, setProductDetail] = useState<any>([]);

  // get value search
  const [searchValue, setSearchValue] = useState<string | null>("");

  //gio hang
  const [productCarts, setProductCarts] = useState<IState[]>([]);

  const [checkEmpty, setCheckEmpty] = useState<string | null>();

  //san pham da chon
  const [seletedProduct, setSeletedProduct] = useState<IState>(INIT_DATA);
  console.log("seletedProduct", seletedProduct);

  const [showCartUp, setShowCartUp] = useState<boolean>(true);

  const [showCategory, setShowCategory] = useState<boolean>(true);

  //su kien khi click vao danh muc san pham
  const monnoibatSection = useRef<HTMLDivElement | null>(null);
  const trasuaSection = useRef<HTMLDivElement | null>(null);
  const freshteaSection = useRef<HTMLDivElement | null>(null);
  const suachuadeoSection = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const response = await getProduct();
      const data = await response.data;
      setData(data);
    };
    getData();
  }, []);
  //show text khi không có data
  useEffect(() => {
    if (productCarts.length === 0) {
      setCheckEmpty("\xa0\xa0\xa0\xa0" + " Chưa có sản phẩm nào!");
    } else {
      setCheckEmpty("");
    }
  }, [productCarts.length]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleGoToSection = (section: any) => {
    return window.scrollTo({ top: section.current.offsetTop - 85 });
  };
  const handleShowDetail = (item: any) => {
    setProductDetail(item);
    setSeletedProduct({
      ...seletedProduct,
      id : productCarts.length+1,
      name: item.name,
      price: item.price,
    });
  };
  const soLuongSanPham = (type: string) => {
    if (datas !== null) {
      const sl = datas?.filter((a) => a.category === type);
      return sl!.length;
    }
  };

  // tang so luong
  const increase = (i: any) => {
    let items = [...productCarts];
    let item = { ...items[i] };
    item.quantitySelect = item.quantitySelect! + 1;
    items[i] = item;
    setProductCarts([...items]);
  };
  // giam so luong
  const decrease = (i: any) => {
    let items = [...productCarts];
    let item = { ...items[i] };
    item.quantitySelect = item.quantitySelect! - 1;
    items[i] = item;
    setProductCarts([...items]);
    if (item.quantitySelect <= 0) {
      items.splice(i, 1);
      setProductCarts([...items]);
      
    }
  };

  const [queried, setQueried] = useState<boolean>(false);

  useEffect(() => {
    if (!queried) {
      return;
    }
    const getData = async () => {
      const response = await axios.get(
        `https://612b8df922bb490017893b92.mockapi.io/products?name=${searchValue}`
      );
      const data = await response.data;
      setData(data);
    };
    getData();
  }, [queried, searchValue]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQueried(true);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between custom-navbar"></nav>

      <div className="custom-product-container container">
        <div className="row">
          <div className="col-lg-3">
            {showCategory && (
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
                  <div className="quantity col-sm-6">
                    {soLuongSanPham("hot")}
                  </div>
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
            )}
          </div>
          <div className="col-lg-6">
            <div className="custom-form-search ">
              <form onSubmit={handleSubmit} className="input-group">
                <input
                  type="text"
                  className="custom-form-input search"
                  placeholder="Tìm kiếm sản phẩm..."
                  onChange={(e) => setSearchValue(e.target.value.trim())}
                />
              </form>
            </div>
            <div className="products row">
              <p ref={monnoibatSection}>Món nổi bật</p>
              {datas!
                .filter((data) => data.category === "hot")
                .map((item) => (
                  <CardProduct
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
              <hr style={{ marginTop: "3%", marginBottom: "0" }} />
              <p ref={trasuaSection}>Trà sữa</p>
              {datas!
                .filter((data) => data.category === "category 1")
                .map((item) => (
                  <CardProduct
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
              <hr style={{ marginTop: "3%", marginBottom: "0" }} />
              <p ref={freshteaSection}>Fresh Fruit Tea</p>
              {datas!
                .filter((data) => data.category === "category 2")
                .map((item) => (
                  <CardProduct
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
              <hr style={{ marginTop: "3%", marginBottom: "0" }} />
              <p className="products-scd" ref={suachuadeoSection}>
                Sữa chua dẻo
              </p>
              {datas!
                .filter((data) => data.category === "category 3")
                .map((item) => (
                  <CardProduct
                    key={item.id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="cart container p-0 col-12 ">
              {showCartUp && (
                <div className="custom-cart-up col-12 row">
                  <div className="row-3 p-0 row custom-cart-header text-center">
                    <div className="col-7 p-0 ">GIỎ HÀNG</div>
                    <div
                      className="col-5 p-0"
                      onClick={() => {
                        setProductCarts([]);
                      }}
                    >
                      Xóa tất cả 
                    </div>
                  </div>
                  <hr />

                  {!checkEmpty
                    ? productCarts?.map((item, index) => {
                        return (
                          <Cart
                            key={index}
                            cartName={item.name}
                            cartPrice={item.price}
                            cartSize={item.size}
                            cartTopping={item.topping.map((t: string) => {
                              return t === "1"
                                ? "trân châu sương mai"
                                : t === "2"
                                ? "hạt rẻ"
                                : "trân châu baby";
                            })}
                            cartIce={item.ice === "100ice" ? "100" : "50"}
                            cartSugar={item.sugar === "100sugar" ? "100" : "50"}
                            cartQuantity={item.quantitySelect}
                            handleIncrease={() => increase(index)}
                            handleDecrease={() => decrease(index)}
                          />
                        );
                      })
                    : checkEmpty}
                </div>
              )}
              <div className="custom-cart-down row p-0 d-flex align-items-center">
                <div
                  className="col-lg-12 col-5 custom-card-quantity p-0 d-flex align-items-center "
                  onClick={() => setShowCartUp(!showCartUp)}
                >
                  <img
                    src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-glass-tea.png"
                    alt=""
                  ></img>
                  x{" "}
                  {productCarts.reduce(
                    (total, currentValue) =>
                      (total = total + currentValue.quantitySelect!),
                    0
                  )}
                  ={" "}
                  {productCarts
                    .reduce(
                      (total, currentValue) =>
                        (total =total + (currentValue.quantitySelect! * (currentValue.price! + (currentValue.topping.length * 9000)))),
                      0
                    )
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  đ
                </div>
                <div className="col-lg-12 col-5">
                  <button type="button" className="btn custom-btn-pay">
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="custom-button-show-categories"
        onClick={() => setShowCategory(!showCategory)}
      >
        <ListIcon className="custom-list-icon" />
      </div>
      <ScrollToTop />
      <BasicModal
        setOpen={setOpen}
        open={open}
        productDetail={productDetail}
        // setCartQuantity={setCartQuantity}
        productCarts={productCarts}
        setProductCarts={setProductCarts}
        INIT_DATA={INIT_DATA}
        seletedProduct={seletedProduct}
        setSeletedProduct={setSeletedProduct}
      />
    </div>
  );
});

export default Product;
