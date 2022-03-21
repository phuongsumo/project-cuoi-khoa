import React, { useEffect, useState, useRef } from "react";
import "./product.css";
import { IProduct } from "../../models";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import BasicModal from "../../components/modal/BasicModal";

export const Product: React.FC = () => {
  //link api https://6227fddb9fd6174ca81830f6.mockapi.io/product/hot-product
  const [datas, setData] = useState<IProduct[] | null>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://612b8df922bb490017893b92.mockapi.io/products"
      );
      let datas: IProduct[] = await res.json();
      setData([...datas]);
    };
    getData();
  }, []);
  //Set model
  

  const Product = (props: any) => {
    const { productImg, productName, price } = props;
    return (
      <div className="card col-md-3" >
        <img className="card-img-top" src={productImg} alt="" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{price}đ</p>
        </div>
        {/* <BasicModal setOpen={setOpen} open={open} /> */}
      </div>
    );
  };
  const monnoibatSection = useRef<HTMLDivElement | null>(null);
  const trasuaSection = useRef<HTMLDivElement | null>(null);
  const freshteaSection = useRef<HTMLDivElement | null>(null);
  const suachuadeoSection = useRef<HTMLDivElement | null>(null);
  const handleGoToSection = (section: any) => {
    return window.scrollTo({ top: section.current.offsetTop });
  };

  

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
          <div className="col-md-3">
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
                <div className="quantity col-sm-6">12</div>
              </div>
              <hr />
              <div
                className="category-quantity row"
                onClick={() => {
                  handleGoToSection(trasuaSection);
                }}
              >
                <div className="category col-sm-6">Trà sữa</div>
                <div className="quantity col-sm-6">09</div>
              </div>
              <hr />
              <div
                className="category-quantity row"
                onClick={() => {
                  handleGoToSection(freshteaSection);
                }}
              >
                <div className="category col-sm-6">Fresh Fruit Tea</div>
                <div className="quantity col-sm-6">22</div>
              </div>
              <hr />
              <div
                className="category-quantity row"
                onClick={() => {
                  handleGoToSection(suachuadeoSection);
                }}
              >
                <div className="category col-sm-6">Sữa chua dẻo</div>
                <div className="quantity col-sm-6">12</div>
              </div>
              <br />
            </div>
          </div>
          <div className="col-md-6">
            <div className="products row">
              <p ref={monnoibatSection}>Món nổi bật</p>
              <div className="card col-3">
                <img
                  className="card-img-top"
                  src="https://tocotocotea.com/wp-content/uploads/2021/12/Hi%CC%80nh-a%CC%89nh-sp-website_1000x1000_choco-ngu%CC%83-co%CC%82%CC%81c-kem-cafe.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Choco ngũ cốc kem cà phê</h5>
                  <p className="card-text">44.000đ</p>
                </div>
              </div>
              <div className="card col-3">
                <img
                  className="card-img-top"
                  src="https://tocotocotea.com/wp-content/uploads/2021/12/Hi%CC%80nh-a%CC%89nh-sp-website_1000x1000_ho%CC%82%CC%80ng-tra%CC%80-ngu%CC%83-co%CC%82%CC%81c-kem-cafe.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Choco ngũ cốc kem cà phê</h5>
                  <p className="card-text">44.000đ</p>
                </div>
              </div>
              <div className="card col-3">
                <img
                  className="card-img-top"
                  src="https://tocotocotea.com/wp-content/uploads/2021/11/Royal-Pearl-Milk-Coffee.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Choco ngũ cốc kem cà phê</h5>
                  <p className="card-text">44.000đ</p>
                </div>
              </div>
              <p ref={trasuaSection}>Trà sữa</p>
              {datas!
                .filter((data) => data.catergory === "catergory 1")
                .map((item) => (
                  <Product
                    key={item.id}
                    productImg={item.productImg}
                    productName={item.productName}
                    price={item.price}
                  />
                ))}
              <p ref={freshteaSection}>Fresh Fruit Tea</p>
              {datas!
                .filter((data) => data.catergory === "catergory 3")
                .map((item) => (
                  <Product
                    key={item.id}
                    productImg={item.productImg}
                    productName={item.productName}
                    price={item.price}
                  />
                ))}
              <p className="products-scd" ref={suachuadeoSection}>
                Sữa chua dẻo
              </p>
              {datas!
                .filter((data) => data.catergory === "catergory 2")
                .map((item) => (
                  <Product
                    key={item.id}
                    productImg={item.productImg}
                    productName={item.productName}
                    price={item.price}
                  />
                ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="cart col-sm-12">
              <div className="row-3 row custom-cart-header">
                <div className="col-6">Giỏ hàng của tôi</div>
                <div className="col-6">Xóa tất cả</div>
              </div>
              <hr />
              <div className="row-3">Chưa có sản phẩm nào</div>
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
      <ScrollToTop/>
    </div>
  );
};
