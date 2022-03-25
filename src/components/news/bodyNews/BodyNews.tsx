import React from "react"
import styles from './BodyNews.module.css'
import { Link } from 'react-router-dom';

const BodyNews = () => {

    return (
        <div className={styles.category}>
            <div className={styles.category_top_banner}>
                Tin tức khuyến mãi
            </div>
            <div className={`${styles["category_content"]} ${styles["container"]}`}>
                <div className={styles.category_side_bar}>
                    <div className={styles.category_menu}>
                        <div className={styles.category_menu_title}>Danh mục tin tức</div>
                        <div className={styles.category_menu_content}>
                            <div className={styles.menu_category_menu}>
                                <ul id={styles.menu_category_menu} className={styles.men}>
                                    <li id={styles.menu_item_4480} className={`${styles["menu_item"]} ${styles["menu_item_type_taxonomy"]} ${styles["menu_item_object_category"]} ${styles[" menu_item_4480"]}`}>
                                        <Link to='/Commercial_story' >Câu chuyện thương hiệu</Link>
                                    </li>
                                    <li id={styles.menu_item_4481} className={`${styles["menu_item"]} ${styles["menu_item_type_taxonomy"]} ${styles["menu_item_object_category"]} ${styles[" menu_item_4481"]}`}>
                                        <Link to="/Commercial_story" >Tin tức khuyến mại</Link>
                                    </li>
                                    <li id={styles.menu_item_4482} className={`${styles["menu_item"]} ${styles["menu_item_type_taxonomy"]} ${styles["menu_item_object_category"]} ${styles[" menu_item_4482"]}`}>
                                        <Link to="/Commercial_story" >Sự kiện</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.category_banner_promotion}>
                        <a href="https://tocotocotea.com/">
                            <img className={styles.banner_item} src="https://tocotocotea.com/wp-content/uploads/2021/10/ft2-2-img.webp" alt="" />
                        </a>
                        <a href="">
                            <img className={styles.banner_item} src="https://tocotocotea.com/wp-content/uploads/2021/10/ft2-1-img.webp" alt="" />
                        </a>
                    </div>
                    <div className={styles.list_tags}>
                        <div className={styles.list_tags_title}>Từ khóa</div>
                        <a className={styles.post_tag} href="https://tocotocotea.com/topic/covid-19/">
                            covid_19                    </a>
                        <a className={styles.post_tag} href="https://tocotocotea.com/topic/danh-sach-cua-hang-tocotoco-ap-dung-ctkm/">
                            danh_sach_cua_hang_tocotoco_ap_dung_ctkm                    </a >
                        <a className={styles.post_tag} href="https://tocotocotea.com/topic/tocotoco/">
                            tocotoco                    </a >
                        <a className={styles.post_tag} href="https://tocotocotea.com/topic/tra-sua-25k/">
                            trà sữa 25k                    </a >
                        <a className={styles.post_tag} href="https://tocotocotea.com/topic/tron-vi-hanh-phuc/">
                            trọn vị hạnh phúc                    </a >
                    </div >
                </div >
                <div className={styles.category_main}>
                    < div className={
                        styles.category_main_title}>Tin tức</div>
                    <div className={styles.category_main_content}>
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/hoc-me-say-tra-sua-ngat-ngay-voi-chuong-trinh-tocotoco-x-marathon-education/">
                            < img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2022/03/03162022_TCTC-X-MRT-banner_zalo-1.png" alt="" />
                            < div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>Học mê say, trà sữa ngất ngây với Chương trình ToCoToCo x Marathon Education</div>
                                <div className={styles.post_card_excerpt}>Đây chính là một món quà bất ngờ mà ToCoToCo và Marathon Education – Nền tảng giáo dục (học thêm) ngoài giờ &amp; luyện thi trực tuyến hàng đầu, đặc […]</div>
                                <div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/kham-pha-dia-diem-check-in-cua-hang-moi-pham-huu-lau-cua-tra-sua-tocotoco/">
                            <img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2022/03/grand-openning-Pham-Huu-Lau.jpg" alt="" />
                            <div className={styles.post_card_content}>
                                < div className={styles.post_card_title}>Khám Phá Địa Điểm Check In Cửa Hàng Mới Phạm Hữu Lầu Của Trà Sữa ToCoToCo</div>
                                <div className={styles.post_card_excerpt}>Với mong muốn mang thật nhiều ly trà sữa thơm ngon đến cho tất cả khách hàng của ToCoToCo, thương hiệu tiếp tục khai trương cửa hàng mới tại 222 […]</div>
                                <div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/mung-khai-truong-cua-hang-nguyen-van-khoi/">
                            <img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2022/03/grand-openning-Nguyen-Van-Khoi.jpg" alt="" />
                            <div className={styles.post_card_content}>
                                < div className={
                                    styles.post_card_title}>Mừng Khai Trương Cửa Hàng Nguyễn Văn Khối, Giới Trẻ Xếp Hàng Chờ Ghé Thử</div>
                                <div className={styles.post_card_excerpt}>Để đáp lại sự yêu mến của các bạn trẻ Sài Thành, đặc biệt các bạn team Gò Vấp, ToCoToCo khai trương thêm cửa hàng mới tại 340 Nguyễn Văn […]</div>
                                <div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/tung-bung-khai-truong-cua-hang-ha-huy-giap/">
                            <img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2022/03/grand-openning-Ha-Huy-Giap.jpg" alt="" />
                            <div className={styles.post_card_content}>
                                < div className={
                                    styles.post_card_title}>Tưng Bừng Khai Trương Cửa Hàng Hà Huy Giáp: Ưu Đãi Mua Size L Tặng Size M Bất Kì</div>
                                <div className={styles.post_card_excerpt}>Thật tuyệt vời, tháng 3 này, ToCoToCo đã chính thức xuất hiện tại địa chỉ: 109 Hà Huy Giáp, Phường Thạnh Lộc, Quận 12, Tp. Hồ Chí Minh. Từ 02/03 […]</div>
                                <div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/su_kien/tocotoco_chuc_mung_chu_nhan_trung_giai_thuong_iphone_13_promax_va_hang_ngan_phan_qua_khung/">
                            <img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2022/01/Hinh-1.png" alt="" />
                            <div className={styles.post_card_content}>
                                < div className={styles.post_card_title}>ToCoToCo chúc mừng chủ nhân trúng giải thưởng iphone 13 Promax và hàng ngàn phần quà khủng</div>
                                <div className={styles.post_card_excerpt}>Kết thúc sinh nhật lần thứ 8 của ToCoToCo trong hành trình “8 năm gắn kết triệu trái tim”, sau những vòng quay của buổi livestream, chủ nhân chiếc Iphone […]</div>
                                <div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/tocotoco-nhan-doi-su-ngot-ngao-mua-le-hoi/">
                            <img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="" />
                            <div className={styles.post_card_content}>
                                < div className={
                                    styles.post_card_title}>Cùng ToCoToCo nhân đôi sự ngọt ngào mùa lễ hội</div>
                                <div className={styles.post_card_excerpt}>Theo suckhoedoisong.vn – Nhấn nhá chút vị đậm đà từ socola và hồng trà kết hợp hương thơm beo béo của macchiato kem cà phê thêm chút topping hạt ngũ […]</div>
                                <div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/su-kien/uong-da-them-san-deal-da-doi/">
                            <img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2022/01/04012022_remind-combo-spm_zalo-1.png" alt="" />
                            <div className={styles.post_card_content}>
                                < div className={
                                    styles.post_card_title}>UỐNG ĐÃ THÈM SĂN DEAL ĐÃ ĐỜI</div>
                                <div className={styles.post_card_excerpt}>Những ngày qua,
                                    <img draggable="false" role="img" className={styles.emoji} alt="✨" src="https://s.w.org/images/core/emoji/13.0.1/svg/2728.svg" /> Hồng trà ngũ cốc kem cà phê & amp; Choco ngũ cốc kem cà phê
                                    <img draggable="false" role="img" className={styles.emoji} alt="✨" src="https://s.w.org/images/core/emoji/13.0.1/svg/2728.svg" /> đã tạo nên cơn sốt càn quét khắp ToCoToCo. Để tăng thêm độ […]

                                </div>
                                < div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                        <a className={styles.post_card} href="https://tocotocotea.com/blogs/tin-tuc-khuyen-mai/danh-sach-cua-hang-tocotoco-ap-dung-ctkm/">
                            <img className={styles.feature_img} src="https://tocotocotea.com/wp-content/uploads/2021/03/image-54.webp" alt="" />
                            <div className={styles.post_card_content}>
                                < div className={styles.post_card_title}>Danh sách cửa hàng TOCOTOCO áp dụng Chương Trình Khuyến Mại</div>
                                <div className={styles.post_card_excerpt}>DANH SÁCH CỬA HÀNG MIỀN BẮC STT CƠ SỞ CỬA HÀNG ĐỊA CHỈ QUẬN/TP 1 Big C Hồ Gươm ToCo – Big C Hồ Gươm Plaza Tầng 01 TTTM BigC […]</div>
                                <div className={styles.button_type_one}>Xem thêm</div>
                            </div>
                        </a >
                    </div >

                    <nav className={`${styles.navigation} ${styles.pagination}`} role="navigation" ></nav>
                    < h2 className={styles.screen_reader_text}>Posts navigation</h2>
                    <div className={styles.nav_links}>
                        <span aria-current="page" className={`${styles.page_numbers} ${styles.current}`}> 1</span>
                        <a className={styles.page_numbers} href="https://tocotocotea.com/category/blogs/page/2/">2</a>
                        <span className={`${styles.page_numbers} ${styles["dots"]}`}>…</span>
                        < a className={styles.page_numbers} href="https://tocotocotea.com/category/blogs/page/21/">21</a>
                        < a className={`${styles["next"]} ${styles["page_numbers"]}`} href="https://tocotocotea.com/category/blogs/page/2/">»</a>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default BodyNews