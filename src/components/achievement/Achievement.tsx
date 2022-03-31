import React from "react";
import "./achievement.css";
import {Link} from 'react-router-dom'

export default function Achievement() {
  return (
    <>
      <div className="container-fruid">
        <div className="col">
          <div className="row-lg-12 slider">THÀNH TỰU ĐẠT ĐƯỢC</div>
          <div className="row-md-3 row cups">
            <div className="row-md-3 col-lg-12 cups-title">
              Thành tựu đạt được
            </div>
            <div className="row-md-12 col-md-12 cups-content">
              <img
                src="https://tocotocotea.com/wp-content/uploads/2021/03/ttdd_1024x1024.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <Link className="btn-delivery" to="/product">
          <img
            src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/button_delivery.png"
            alt=""
          />
        </Link>
      </div>
    </>
  );
}
