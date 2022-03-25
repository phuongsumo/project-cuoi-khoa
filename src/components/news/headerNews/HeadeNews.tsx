import React from "react"
import styles from './HeaderNews.module.css';
import { Container, Row } from 'react-bootstrap';
const HeaderNews = () => {
    return (

        <header id={styles.header_wrap} className={styles.scroll_header}>
            <div id={styles.header} className={styles.container}>
                <div className={styles.left}>
                    <a className={styles.logo} href="/">
                        <img className={styles.logo_img} src="https://tocotocotea.com/wp-content/uploads/2021/04/Logo-ngang-01.png" alt="logo" />
                    </a>
                    <div className={styles.menu}>
                        <div className={styles.btn_close}> Đóng
                            <i className={` ${styles["fas"]} ${styles["fa_times"]}`} ></i>
                        </div>
                        <div className={styles.menu_primary}>
                            <ul id={styles.menu_menu_chinh} className={styles.menu}>
                                <li id={styles.menu_item_1271} className={`${styles["menu_item"]} ${styles["menu_item_type_post_type"]} ${styles["menu_item_object_page menu_item_home"]} ${styles["menu_item_1271"]}`}>
                                    <a href="https://tocotocotea.com/">Trang chủ</a>
                                </li>
                                <li id={styles.menu_item_1272} className={`${styles["menu_item"]} ${styles["menu_item_type_custom"]} ${styles["menu_item_object_custom"]} ${styles[" menu_item_has_children"]}  ${styles["menu_item_has_children"]}  ${styles["menu_item_has_children"]}  ${styles["menu_item_1272"]} `}>
                                    <a href="/history">Giới thiệu</a>
                                    <ul className={styles.sub_menu}>
                                        <li id={styles.menu_item_1269} className={`${styles["menu_item"]}  ${styles["menu_item_type_post_type"]} ${styles["menu_item_object_page"]}  ${styles["menu_item_1269"]}`}>
                                            <a href="https://tocotocotea.com/history/">Lịch sử và sứ mệnh</a>
                                        </li>
                                        <li id={styles.menu_item_1270} className={`${styles["menu_item"]} ${styles["menu_item_type_post_type"]} ${styles["menu_item_object_page"]}  ${styles["menu_item_1270"]}`}>
                                            <a href="https://tocotocotea.com/achievement/">Thành tựu đạt được</a>
                                        </li>
                                    </ul>
                                </li>
                                <li id={styles.menu_item_1268} className={`${styles["menu_item"]} ${styles[" menu_item_type_post_type"]} ${styles["menu_item_object_page"]}  ${styles["menu_item_1268"]} `}>
                                    <a href="https://tocotocotea.com/order/">Sản phẩm</a>
                                </li>
                                <li id={styles.menu_item_2057} className={`${styles["menu_item"]} ${styles["menu_item_type_taxonomy"]} ${styles["menu_item_object_category"]}  ${styles["current_menu_item"]} ${styles["menu_item_has_children"]} ${styles["menu_item_2057"]}`}>
                                    <a href="https://tocotocotea.com/category/blogs/" >Tin tức</a>
                                    <ul className={styles.sub_menu}>
                                        <li id={styles.menu_item_4484} className={`${styles["menu_item"]} ${styles["menu_item_type_taxonomy"]} ${styles["menu_item_object_category"]} ${styles["menu_item_4484"]}`}>
                                            <a href="https://tocotocotea.com/category/blogs/tin_tuc_khuyen_mai/">Tin tức khuyến mại</a>
                                        </li>
                                        <li id={styles.menu_item_4483} className={`${styles["menu_item"]} ${styles["menu_item_type_taxonomy"]} ${styles["menu_item_object_category"]} ${styles["menu_item_4483"]}`}>
                                            <a href="https://tocotocotea.com/category/blogs/cau_chuyen_thuong_hieu/">Câu chuyện thương hiệu</a>
                                        </li>
                                        <li id={styles.menu_item_4485} className={`${styles["menu_item"]} ${styles["menu_item_type_taxonomy"]} ${styles["menu_item_object_category"]} ${styles["menu_item_4485"]}`}>
                                            <a href="https://tocotocotea.com/category/blogs/su_kien/">Sự kiện</a>
                                        </li>
                                    </ul>
                                </li>
                                <li id={styles.menu_item_1281} className={`${styles["menu_item"]} ${styles["menu_item_type_post_type"]} ${styles["menu_item_object_page"]} ${styles[" menu_item_1281"]}`}>
                                    <a href="https://tocotocotea.com/stores/">Cửa hàng</a>
                                </li>
                                <li id={styles.menu_item_12301} className={`${styles["menu_item"]} ${styles["menu_item_type_post_type"]} ${styles["menu_item_object_page"]} ${styles["menu_item_12301"]}`}>
                                    <a href="https://tocotocotea.com/tuyen_dung/">Tuyển dụng</a>
                                </li>
                                <li id={styles.menu_item_1551} className={`${styles["menu_item"]} ${styles["menu_item_type_custom"]} ${styles["menu_item_object_custom"]} ${styles["menu_item_1551"]}`}>
                                    <a href="https://tocotocotea.com/nhuongquyen/">Nhượng quyền</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <i className={`${styles["fas"]} ${styles["fa_search"]} ${styles["search"]}`} ></i>
                    <i className={`${styles["btn_menu_mobile"]} ${styles["fas"]} ${styles["fa_bars"]}`} ></i>
                </div>
            </div>
        </header>
        
        
       
    )
}


export default HeaderNews