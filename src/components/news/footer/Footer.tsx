import React from "react"
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={`${styles.footer_wrap} ${styles.container}`}>
                <div className={styles.footer_main}>
                    <img className={styles.footer_logo} src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/ft_logo.png" />
                    <div className={styles.footer_1}>
                        <div className={styles.footer_title}>Công ty CP TM &amp; Dv Taco Việt Nam</div>
                        <div className={styles.footer_line}>
                            <i className={`${styles.fas} ${styles.fa_map_marker}`} ></i>
                            Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng, Hà Nội.
                        </div>
                        <div className={styles.footer_line}>
                            <i className={`${styles.fas} ${styles.fa_phone}`} aria-hidden="true"></i>
                            1900.63.69.36
                        </div>
                        <div className={styles.footer_line}>
                            <i className={`${styles.fas} ${styles.fa_envelope}`} aria-hidden="true"></i>
                            info@tocotocotea.com
                        </div>
                        <div className={styles.footer_line}>
                            Số ĐKKD: 0106341306. Ngày cấp: 16/03/2017.
                        </div>
                        <div className={styles.footer_line}>
                            Nơi cấp: Sở kế hoạch và Đầu tư Thành phố Hà Nội.
                        </div>
                        <div className={`${styles.footer_line} ${styles.social}`}>
                            <a target="_blank" href="https://www.facebook.com/tocotocobubbletea/">
                                <i className={`${styles.fab} ${styles.fa_facebook_square}`} aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/tocotoco_bubble_tea/">
                                <i className={`${styles.fab} ${styles.fa_instagram}`} aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://www.youtube.com/c/ToCoToCoBubbleTea">
                                <i className={`${styles.fab} ${styles.fa_youtube}`} aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://www.tiktok.com/@tocotocobubbletea/">
                                <i className={`${styles.fab} ${styles.fa_twitter}`} aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://zalo.me/2268915497539367639">
                                <i className={`${styles.fab} ${styles.fa_google_plus}`} aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className={`${styles.footer_line} ${styles.dowload_app}`}>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ipos.tocotoco">
                                <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/Googleplay.png" alt="" />
                            </a>
                            <a target="_blank" href="https://apps.apple.com/vn/app/tocotoco/id1249910346">
                                <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/Appstore.png" alt="" />
                            </a>
                            <a target="_blank" href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=57603">
                                <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/bo_cong_thuong_grande.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footer_2}>
                        <div className={styles.footer_title}>Về chúng tôi</div>
                        <div className={styles.footer_content}>
                            <div className={styles.menu_footer_abous}>
                                <ul id="menu_footer_ve-chung-toi" className={styles.menu}>
                                    <li id="menu_item_1319" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1319}`}>
                                        <a href="/history/">Giới thiệu về TocoToco</a>
                                    </li>
                                    <li id="menu_item_1320" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1320}`}>
                                        <a href="https://tocotocotea.com/nhuongquyen/">Nhượng quyền</a>
                                    </li>
                                    <li id="menu_item_2119" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_2119}`}>
                                        <a href="https://tocotocotea.com/tin-tuc-khuyen-mai/">Tin tức khuyến mại</a>
                                    </li>
                                    <li id="menu_item_1864" className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_1864}`}>
                                        <a href="https://tocotocotea.com/stores/">Cửa hàng</a>
                                    </li>
                                    <li id="menu_item_1865" className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_1865}`}>
                                        <a href="https://tocotocotea.com/quy-dinh-chung/">Quy định chung</a>
                                    </li>
                                    <li id="menu_item_1866" className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_1866}`}>
                                        <a href="https://tocotocotea.com/chinh-sach/thong-tin-ve-chu-so-huu-website/">TT liên hệ &amp; ĐKKD</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_2}>
                        <div className={styles.footer_title}>Chính sách</div>
                        <div className={styles.footer_content}>
                            <div className={styles.menu_footer_policy}>
                                <ul id="menu_footer_chinh-sach" className={styles.menu}>
                                    <li id="menu_item_1313" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1313}`}>
                                        <a href="/chinh-sach/dieu-khoan-chinh-sach-thanh-vien-than-thiet-tocotococlub/">Chính sách thành viên</a>
                                    </li>
                                    <li id="menu_item_1314" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1314}`}>
                                        <a href="/chinh-sach/quy-dinh-va-hinh-thuc-thanh-toan/">Hình thức thanh toán</a>
                                    </li>
                                    <li id="menu_item_1315" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1315}`}>
                                        <a href="/chinh-sach/chinh-sach-van-chuyen-giao-nhan/">Vận chuyển giao nhận</a>
                                    </li>
                                    <li id="menu_item_1316" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1316}`}>
                                        <a href="/chinh-sach/chinh-sach-doi-tra-hang-va-hoan-tien/">Đổi trả và hoàn tiền</a>
                                    </li>
                                    <li id="menu_item_1317" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1317}`}>
                                        <a href="/chinh-sach/chinh-sach-bao-ve-thong-tin-ca-nhan-cua-nguoi-tieu-dung/">Bảo vệ thông tin cá nhân</a>
                                    </li>
                                    <li id="menu_item_1318" className={`${styles.menu_item} ${styles.menu_item_type_custom} ${styles.menu_item_object_custom} ${styles.menu_item_1318}`}>
                                        <a href="/chinh-sach/chinh-sach-bao-hanh-bao-tri/">Bảo trì, bảo hành</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
                <div className={styles.footer_bottom}>
                    <div className={styles.left}>
                        ToCoToCo - Thương hiệu trà sữa tiên phong sử dụng nguồn nông sản Việt Nam
                    </div>
                    <div className={styles.right}>
                        Copyrights © 2019 by ToCoToCoTea. All rights reserved.
                    </div>
                </div>
            </div >
            <div className={styles.footer_cover}></div>
        </footer >
    )
}

export default Footer