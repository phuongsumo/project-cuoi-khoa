import React from "react";
import "./historyAndMission.css";
import {
  LocationOn,
  LocalPhone,
  Email,
  Facebook,
  Instagram,
  YouTube,
} from "@mui/icons-material";

export default function HistoryAndMission() {
  return (
    <>
      <div className="container-fruid">
        <div className="col">
          <div className="row-lg-12 slider">Giới thiệu</div>
          <div className="row-md-3 row cups">
            <div className="row-md-3 col-lg-12 cups-title">Giới thiệu</div>
            <p className="cups-intro col-12">
              Luôn tâm huyết với việc khai thác nguồn nông sản Việt Nam để tạo
              ra những ly thức uống tươi ngon, an toàn và giàu giá trị dinh
              dưỡng, ToCoToCo mở cửa hàng đầu tiên vào năm 2013, mang trong mình
              lòng đam mê và khát vọng xây dựng một thương hiệu trà sữa thuần
              Việt, mang đậm hương vị quê hương.ToCoToCo tin rằng thưởng thức
              một ly trà sữa được pha chế từ trà Mộc Châu, trân châu từ sắn dây
              Nghệ An hay mứt dâu tằm từ Đà Lạt sẽ là những trải nghiệm hoàn
              toàn khác biệt và tuyệt vời nhất cho những khách hàng của mình.
            </p>
            <p className="cups-intro col-12">
            Cũng chính từ sự khác biệt đó, thương hiệu ToCoToCo đã có những bước
            phát triển thần tốc và dần chiếm lĩnh thị trường trà sữa với hơn 200
            cửa hàng trải dài trên toàn quốc. Cột mốc năm 2018 đánh dấu ước mơ
            vươn xa biển lớn của thương hiệu khi ToCoToCo chính thức đặt chân
            lên nước Mỹ và tiếp nối thành công tại Úc, Nhật Bản, Hàn Quốc,
            Singapore,…
            </p>
            <div className="row-md-12 col-md-12 cups-content">
              <img
                src="https://tocotocotea.com/wp-content/uploads/2021/03/1.webp"
                alt=""
              />
            </div>
            <div className="row-md-12 col-md-12 cups-content">
              <img
                src="https://tocotocotea.com/wp-content/uploads/2021/03/2.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fruid footer">
        <div className="footer-main row">
          <div className="footer-logo col-lg-2 col-sm-6 col-6"></div>
          <div className="footer-1 col-lg-4 col-sm-6 col-6">
            <div className="footer-title">CÔNG TY CP TM&DV TACO VIỆT NAM</div>
            <div className="footer-line">
              <LocationOn className="footer-icon" />
              Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng, Hà Nội.
            </div>
            <div className="footer-line">
              <LocalPhone className="footer-icon" />
              1900.63.69.36
            </div>
            <div className="footer-line">
              <Email className="footer-icon" />
              info@tocotocotea.com
            </div>
            <div className="footer-line">
              Số ĐKKD: 0106341306. Ngày cấp: 16/03/2017.
            </div>
            <div className="footer-line">
              Nơi cấp: Sở kế hoạch và Đầu tư Thành phố Hà Nội.
            </div>
            <div className="footer-line social">
              <Facebook className="footer-icon" />
              <Instagram className="footer-icon" />
              <YouTube className="footer-icon" />
            </div>
          </div>
          <div className="footer-2 col-lg-2 col-sm-6 col-6">
            <div className="footer-title">VỀ CHÚNG TÔI</div>
            <div className="menu-footer-abouts">
              <ul className="menu-footer-ve-chung-toi">
                <li className="menu-item">Giới thiệu về Tocotoco</li>
                <li className="menu-item">Nhượng quyền</li>
                <li className="menu-item">Tin tức khuyến mại</li>
                <li className="menu-item">cửa hàng</li>s
                <li className="menu-item">Quy định chung</li>
                <li className="menu-item">TT liên hệ & ĐKKD</li>
              </ul>
            </div>
          </div>
          <div className="footer-3 col-lg-2 col-sm-6 col-6">
            {" "}
            <div className="footer-title">Chính sách</div>
            <div className="menu-footer-abouts">
              <ul className="menu-footer-ve-chung-toi">
                <li className="menu-item">Chính sách thành viên</li>
                <li className="menu-item">Hình thức thanh toán</li>
                <li className="menu-item">Vận chuyển giao nhận</li>
                <li className="menu-item">Đổi trả và hoàn tiền</li>
                <li className="menu-item">Bảo vệ thông tin cá nhân</li>
                <li className="menu-item">Bảo trì, bảo hành</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-cover"></div>
      </div>
      <a className="btn-delivery" href="/">
        <img
          src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/button_delivery.png"
          alt=""
        />
      </a>
    </>
  );
}
