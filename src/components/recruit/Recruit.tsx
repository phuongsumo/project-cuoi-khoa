import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./Recruit.module.css";
import RecruitCarousel from "./recruitCarousel/RecruitCarousel";
// import  aTag from "./recruitCarousel/RecruitCarousel";
// import fonts
import "./fonts/vietnameseFonts/MijasUltra.otf";
//import image
import imgiconbanner from "./img/imgiconbanner.png";
import titleImg from "./img/logoimgrecruitment.png";
import aboutImg1 from "./img/about_img1.jpg";
import aboutImg2 from "./img/about_img2.jpg";
import aboutImg3 from "./img/about_img3.jpg";
import ft_logo from "./img/ft_logo.png";
import Appstore from "./img/Appstore.png";
import Googleplay from "./img/Googleplay.png";
import boCongThuong from "./img/bo_cong_thuong_c7eff2b99e39470c898197b870303164_grande.png";

// import icons
import { IoBriefcase } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { HiMail } from "react-icons/hi";
const Recruit = () => {
  return (
    <div>
      <RecruitCarousel idH3={style['titleH3']}/>
      <Container id={style['titleH3']} className={style.recruitPosition}>
        <p className={style.mainColor}>Vị trí tuyển dụng</p>
        <h3>Các vị trí hiện tại</h3>
        <img src={titleImg} alt="title image" />
        <div className={style.recruitText}>
          Chúng tôi luôn tìm kiếm những người tuyệt vời! Nếu bạn chưa tìm thấy
          cơ hội phù hợp hiện tại, nhưng tin rằng bạn có thể trở thành 1 phần
          của ToCoToCo Tea, hãy gửi thông tin cho chúng tôi.
        </div>
      </Container>
      <div className={style.introduce}>
        <div className={style.bgCover}></div>
        <Container className={style.content}>
          <div className={style.contentImg}>
            <img src={imgiconbanner} alt="image icon banner" />
          </div>
          <p>
            “ToCoToCo với tâm huyết lấy nông sản Việt Nam làm nguồn nguyên liệu
            chính, dùng nông sản Việt tạo ra những ly đồ uống mang đậm hương vị
            quê hương, an toàn và giàu giá trị dinh dưỡng. Việc ưu tiên sử dụng
            nguồn nông sản trong nước trong pha chế góp phần đẩy mạnh tiêu thụ,
            gắn với cuộc vận động “Người Việt Nam ưu tiên dùng hàng Việt Nam”
            vừa thúc đẩy niềm tự hào dân tộc đồng thời giải quyết vấn đề đầu ra
            của nông sản Việt là giá trị cốt lõi của TocoToco cả hiện tại và
            tương lai”
          </p>
        </Container>
      </div>
      <div className={style.aboutUs}>
        <Container>
          <Row className={style.rowAboutUs}>
            <Col className={style.colText}>
              <h3 className={style.fontMiJasUltra}>LỊCH SỬ PHÁT TRIỂN</h3>
              <p>
                Trở về những ngày đầu tiên khi TocoToco là một cửa hàng nhỏ
                nhưng luôn tấp nập phục vụ khách hàng những sản phẩm được làm từ
                nguồn nguyên liệu sạch và chất lượng hàng đầu. Tháng 11/2013,
                thương hiệu trà sữa TocoToco chính thức được thành lập bởi công
                ty cổ phần thương mại dịch vụ Taco Việt Nam. Tính đến thời điểm
                hiện tại, TocoToco hiện có khoảng 150 cửa hàng phủ sóng trên
                toàn quốc và là tên tuổi được người tiêu dùng yêu mến và tin cậy
                hàng đầu tại thị trường Việt Nam.
              </p>
            </Col>
            <Col className={style.colImg}>
              <img src={aboutImg1} alt="about image 1" />
            </Col>
          </Row>
          <Row className={style.rowAboutUs}>
            <Col className={style.colImg}>
              <img src={aboutImg2} alt="about image 2" />
            </Col>
            <Col className={style.colText}>
              <h3 className={style.fontMiJasUltra}>
                KHÁC BIỆT ĐẾN TỪ NHỮNG ĐIỀU ĐƠN GIẢN NHẤT
              </h3>
              <p>
                Ngay từ đầu, Tocotoco đã định hình và lựa chọn con đường đi khác
                biệt. Đó là không chỉ đem đến những ly đồ uống chất lượng hảo
                hàng mà còn đem lại cho khách hàng những trải nghiệm, xúc cảm
                tuyệt vời nhất. Các cửa hàng của chúng tôi đã trở thành địa điểm
                dành cho những người yêu thích trà, đặc biệt là trà sữa trên
                khắp Việt Nam. Tại sao họ chỉ muốn thưởng thức trà sữa TocoToco?
                Vì họ biết họ có thể tin tưởng vào "dịch vụ chân thật, một không
                gian hấp dẫn và một ly trà sữa tuyệt hảo" được pha chế một cách
                chuyên nghiệp.
              </p>
            </Col>
          </Row>
          <Row className={style.rowAboutUs}>
            <Col className={style.colText}>
              <h3 className={style.fontMiJasUltra}>
                TOCOTOCO – NHIỀU HƠN CẢ MỘT LY ĐỒ UỐNG
              </h3>
              <p>
                Với một ly đồ uống TocoToco, chúng tôi thật sự kỳ vọng sẽ truyền
                cảm hứng và nuôi dưỡng tâm hồn con người – những người bạn,
                những ly trà sữa ngọt ngào và những phút giây thư giãn quý giá.
                Mọi người đến TocoToco để trò chuyện, họp mặt hoặc làm việc.
                Chúng tôi là địa điểm tụ họp cho tình bạn, tình yêu, tình đồng
                nghiệp, những mối quan hệ đã trở thành một phần trong cuộc sống
                hàng ngày – và đây chính là những điều nhỏ xinh khiến chúng tôi
                không thể hạnh phúc hơn.
              </p>
            </Col>
            <Col className={style.colImg}>
              <img src={aboutImg3} alt="about image 3" />
            </Col>
          </Row>
        </Container>

      </div>
      <Container className={style.items}>
        <Row className={style.rowItem}>
          <Col className={style.colItem}>
            <a href="#">
              <IoBriefcase className={style.colItemIcon} />
            </a>
            <span>
              CHÍNH SÁCH TUYỂN DỤNG CHUYÊN NGHIỆP, MINH BẠCH, CÔNG BẰNG
            </span>
          </Col>
          <Col className={style.colItem}>
            <a href="#">
              <FaGraduationCap className={style.colItemIcon} />
            </a>
            <span>
              TRUNG TÂM ĐÀO TẠO VỚI NHIỀU CHƯƠNG TRÌNH ĐÀO TẠO CHỨC DANH, ĐÀO
              TẠO NGUỒN
            </span>
          </Col>
          <Col className={style.colItem}>
            <a href="#">
              <GiTrophyCup className={style.colItemIcon} />
            </a>
            <span>
              CƠ HỘI THĂNG TIẾN RỘNG MỞ VỚI PHƯƠNG CHÂM: PHÁT TRIỂN NGUỒN LỰC
              NỘI BỘ LÀ TRỌNG TÂM
            </span>
          </Col>
          <Col className={style.colItem}>
            <a href="#">
              <FaMoneyBillAlt className={style.colItemIcon} />
            </a>
            <span>
              CHẾ ĐỘ ĐÃI NGỘ, THƯỞNG HẤP DẪN, CẠNH TRANH, XỨNG ĐÁNG VỚI NĂNG LỰC
              VÀ ĐÓNG GÓP
            </span>
          </Col>
        </Row>
      </Container>
      <footer>
        <div className={style.bgCover}></div>
        <Container className ={style.contact}>
          <Row className={style.rowContact}>
            <Col className={style.colContact}>
              <a href="#">
                <img src={ft_logo} alt="logo" width={110} />
              </a>
            </Col>
            <Col xs={4} className={style.colContact}>
              <h3 className={style.fontMiJasUltra}>CÔNG TY CP TM & DV TACO VIỆT NAM</h3>
              <ul>
                <li>
                  <span className={style.icon}>
                    <MdPlace />
                  </span>
                  <span>
                    Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng, Hà Nội.
                  </span>
                </li>
                <li>
                  <span className={style.icon}>
                    <AiFillPhone />
                  </span>
                  <a href="#">
                    <span>1900.63.69.36</span>
                  </a>
                </li>
                <li>
                  <span className={style.icon}>
                    <HiMail />
                  </span>
                  <a href="#">
                    <span>info@tocotocotea.com</span>
                  </a>
                </li>
              </ul>
              <p>Số ĐKKD: 0106341306. Ngày cấp: 16/03/2017.</p>
              <p>Nơi cấp: Sở kế hoạch và Đầu tư Thành phố Hà Nội.</p>
              <div className={style.socialIcons}>
                <a href="#">
                  <AiFillFacebook />
                </a>
                <a href="#">
                  <AiFillInstagram />
                </a>
                <a href="#">
                  <AiFillYoutube />
                </a>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
                <a href="#">
                  <AiFillGooglePlusCircle />
                </a>
              </div>
              <div className={style.footerLink}>
                <a href="#">
                  <img src={Appstore} alt="app store" width={100}/>
                </a>
                <a href="#">
                  <img src={Googleplay} alt="google play" width={100} />
                </a>
              </div>
              <div className={style.footerLink}>
                <a href="#">
                  <img src={boCongThuong} alt="bo cong thuong" width={50} />
                </a>
              </div>
            </Col>
            <Col className={style.colContact}>
              <h3 className={style.fontMiJasUltra}>Về chúng tôi</h3>
              <ul>
                <li>
                  <a href="#">Giới thiệu về ToCoToCo</a>
                </li>
                <li>
                  <a href="#">Giới thiệu về ToCoToCo</a>
                </li>
                <li>
                  <a href="#">Tin tức và ưu đãi</a>
                </li>
                <li>
                  <a href="#">Cửa hàng</a>
                </li>
                <li>
                  <a href="#">Quy định chung</a>
                </li>
                <li>
                  <a href="#">TT Liên hệ và ĐKKD</a>
                </li>
              </ul>
            </Col>
            <Col className={style.colContact}>
              <h3 className={style.fontMiJasUltra}>Chính sách</h3>
              <ul>
                <li>
                  <a href="#">Chính sách thành viên</a>
                </li>
                <li>
                  <a href="#">Hình thức thanh toán</a>
                </li>
                <li>
                  <a href="#">Vận chuyển giao nhận</a>
                </li>
                <li>
                  <a href="#">Đổi trả hàng và hoàn tiền</a>
                </li>
                <li>
                  <a href="#">Bảo vệ thông tin cá nhân</a>
                </li>
                <li>
                  <a href="#">Bảo hành, bảo trì</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className={style.footerCopyRight}>
          <Container>
            <Row className={style.rowCoppyRight}>
              <Col xs={8} className={style.colCopyRight}>
                <p>
                  ToCoToCo - Thương hiệu trà sữa tiên phong sử dụng nguồn nông
                  sản Việt Nam
                </p>
              </Col>
              <Col xs={4} className={style.colCopyRight}>
                <p>
                  Copyrights &copy; 2019 by <a href="#">ToCoToCoTea</a>. All
                  rights reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default Recruit;
