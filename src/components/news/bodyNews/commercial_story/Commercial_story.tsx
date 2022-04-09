import React from "react"
import styles from './Commercial_story.module.css'
import { Link } from "react-router-dom"
const Commercial_story = () => {
    return (
        <>

            <div className={styles.category_top_banner} >
                Tin tức khuyến mãi
            </div>

            <div className={`${styles.category_content} ${styles.container}`}>
                <div className={styles.category_side_bar}>
                    <div className={styles.category_menu}>
                        <div className={styles.category_menu_title}>
                            <span className={styles.span_text}>
                                <span className={styles.span_text}>Danh mục tin tức</span>
                            </span>
                        </div>
                        <div className={styles.category_menu_content}>
                            <div className={styles.menu_category_menu}>
                                <ul id="menu_category_menu" className={`${styles.menu} ${styles.ulist}`}>
                                    <li id="menu_item_4480" className={`${styles.menu_item} ${styles.menu_item_type_taxonomy} ${styles.menu_item_object_category} ${styles.current_menu_item} ${styles.menu_item_4480}`}>                                       
                                    <Link to='/Commercial_story' target='_parent' className={styles.alink}>Câu chuyện thương hiệu</Link> 
                                    </li>
                                    <li id="menu_item_4481" className={`${styles.menu_item} ${styles.menu_item_type_taxonomy} ${styles.menu_item_object_category} ${styles.menu_item_4481}`}>
                                    <Link to="/Promotional_news" target='_parent' className={styles.alink}>Tin tức khuyến mại</Link>
                                    </li>
                                    <li id="menu_item_4482" className={`${styles.menu_item} ${styles.menu_item_type_taxonomy} ${styles.menu_item_object_category} ${styles.menu_item_4482}`}>
                                    <Link to="/Sk_events" target='_parent' className={styles.alink}> Sự kiện </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.category_banner_promotion}>
                        <a href="https://tocotocotea.com/" className={styles.alink}>
                            <img className={`${styles.banner_item} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/10/ft2_2_img.webp" alt="" />
                        </a>
                        <a href=""  className={styles.alink}>
                            <img className={`${styles.banner_item} ${styles.image} `} src="https://tocotocotea.com/wp-content/uploads/2021/10/ft2_1_img.webp" alt="" />
                        </a>
                    </div>
                    <div className={styles.list_tags}>
                        <div className={styles.list_tags_title}>
                            <span className={styles.span_text}>
                                <span className={styles.span_text}>Từ khóa</span>
                            </span>
                        </div>
                        <a className={`${styles.post_tag} ${styles.alink}`} href="https://tocotocotea.com/topic/covid-19/">
                            <span className={styles.span_text}>
                                <span className={styles.span_text}>covid-19 </span>
                            </span>
                        </a>
                        <a className={`${styles.post_tag} ${styles.alink}`} href="https://tocotocotea.com/topic/danh-sach-cua-hang-tocotoco-ap-dung-ctkm/">
                            <span className={styles.span_text}>
                                <span className={styles.span_text}> danh-sach-cua-hang-tocotoco-ap-dung-ctkm </span>
                            </span>
                        </a>
                        <a className={`${styles.post_tag} ${styles.alink}`} href="https://tocotocotea.com/topic/tocotoco/">
                            <span className={styles.span_text}>
                                <span className={styles.span_text}>tocotoco </span>
                            </span>
                        </a>
                        <a className={`${styles.post_tag} ${styles.alink}`} href="https://tocotocotea.com/topic/tra-sua-25k/">
                            <span className={styles.span_text}>
                                <span className={styles.span_text}>  trà sữa 25k </span>
                            </span>
                        </a>
                        <a className={`${styles.post_tag} ${styles.alink}`} href="https://tocotocotea.com/topic/tron-vi-hanh-phuc/">
                            <span className={styles.span_text}>
                                <span className={styles.span_text}>trọn vị hạnh phúc </span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className={styles.category_main}>
                    <div className={styles.category_main_title}>
                        <span className={styles.span_text}>
                            <span className={styles.main_title}>Câu chuyện thương hiệu</span>
                        </span>
                    </div>
                    <div className={styles.category_main_content}>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/blogs/tocotoco-nhan-doi-su-ngot-ngao-mua-le-hoi/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Cùng ToCoToCo nhân đôi sự ngọt ngào mùa lễ hội</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Theo suckhoedoisong.vn – Nhấn nhá chút vị đậm đà từ socola và hồng trà kết hợp hương thơm beo béo của macchiato kem cà phê thêm chút topping hạt ngũ […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/blogs/tocotoco-nang-tam-gia-tri-nong-san-viet/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo-1.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Tâm huyết nâng tầm giá trị nông sản Việt của ToCoToCo</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Theo zingnews.vn – Trong 8 năm phát triển, ToCoToCo không ngừng theo đuổi sứ mệnh xây dựng một thương hiệu trà sữa từ nông sản Việt uy tín, chất lượng. […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/blogs/choco-ngu-coc-kem-cafe-hong-tra-ngu-coc-kem-cafe/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/12/SPM_CHOCO_zalo.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>VỊ GIÒN TAN – GIÁNG SINH RỘN RÀNG CÙNG CHOCO NGŨ CỐC KEM CAFÉ VÀ HỒNG TRÀ NGŨ CỐC KEM CAFÉ</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Ỏ, ToCoToCo món gì mới đây ta?! Món gì mà là lạ, vừa có vị socola ngọt ngào, có vị hồng trà đậm đà, mà còn được kết hợp cùng […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/blogs/khang-hang-thi-truong-my_ua-thich-tocotoco/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/12/tocotoco-thi-truong-my.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của ToCoToCo?</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Theo vietbao.vn – ToCoToCo – thương hiệu trà sữa đã quen mặt với giới trẻ Việt Nam, đã vượt qua nhiều đối thủ để tự hào có mặt trên thị […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/tin-tuc-hien-trang-chu/hanh-trinh-8-nam-chinh-phuc-khach-hang-cua-tocotoco/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/12/tocotoco-1-1.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Hành trình 8 năm chinh phục khách hàng của ToCoToCo</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Theo zingnews.vn – 8 năm không ngừng đổi mới và phát triển đưa ToCoToCo từng bước trở thành thương hiệu trà sữa được hàng triệu khách hàng ưa chuộng.Không khó […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/blogs/tocotoco-tra-sua-tien-phong-su-dung-nong-san-viet/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/12/toco-toco-sinh-nhat-8-tuoi-111216693_680x0.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>ToCoToCo thay đổi quan niệm về nguồn nguyên liệu trà sữa tại Việt Nam</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Theo vietnam.vn – Nguồn nguyên liệu trà sữa luôn là nỗi lo của người tiêu dùng khi thị trường vẫn còn tiềm ẩn những sản phẩm kém chất lượng và […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/tin-tuc-hien-trang-chu/8-nam-phat-trien-vung-manh/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/12/tocotoco-nhuong-quyen-thuong-hieu.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>ToCoToCo – 8 năm gắn kết phát triển vững mạnh cùng Đối tác</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Theo báo Hội Nhập – Trải qua năm 2021 với nhiều khó khăn giữa đại dịch, ToCoToCo kỉ niệm sinh nhật lần thứ 8, đánh dấu chặng đường phát triển […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a className={`${styles.post_card} ${styles.alink}`} href="https://tocotocotea.com/blogs/tocotoco-bat-mi-cach-san-iphone-13-pro-max/">
                            <img className={`${styles.feature_img} ${styles.image}`} src="https://tocotocotea.com/wp-content/uploads/2021/11/tocotoco-sinh-nhat.png" alt="" />
                            <div className={styles.post_card_content}>
                                <div className={styles.post_card_title}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>ToCoToCo bật mí cách săn iPhone 13 Pro Max</span>
                                    </span>
                                </div>
                                <div className={styles.post_card_excerpt}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Không cần thắt lưng buộc bụng, ToCoToCo đem đến cho bạn cơ hội sở hữu iPhone 13 Pro Max hàng tuần đến hết 20/12, kèm theo hàng nghìn quà tặng […]</span>
                                    </span>
                                </div>
                                <div className={styles.button_type_one}>
                                    <span className={styles.span_text}>
                                        <span className={styles.span_text}>Xem thêm</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <nav className={`${styles.navigation} ${styles.pagination} ${styles.navigation}`} role="navigation" aria-label="Bài viết">
                        <h2 className={`${styles.screen_reader_text} ${styles.h2_title}`}>
                            <span className={styles.span_text}>
                                <span className={styles.span_text}>Điều hướng bài viết</span>
                            </span>
                        </h2>
                        <div className={styles.nav_links}>
                            <span aria-current="page" className={`${styles.page_numbers} ${styles.current}`}>
                                <span className={styles.span_text}>
                                    <span className={styles.span_text}>1</span>
                                </span>
                            </span>
                            <a className={`${styles.page_numbers} ${styles.alink}`} href="https://tocotocotea.com/category/blogs/cau-chuyen-thuong-hieu/page/2/">
                                <span className={styles.span_text}>
                                    <span className={styles.span_text}>2</span>
                                </span>
                            </a>
                            <span className={`${styles.page_numbers} ${styles.dots}`}>
                                <span className={styles.span_text}>
                                    <span className={styles.span_text}>…</span>
                                </span>
                            </span>
                            <a className={`${styles.page_numbers} ${styles.alink}`} href="https://tocotocotea.com/category/blogs/cau-chuyen-thuong-hieu/page/11/">
                                <span className={styles.span_text}>
                                    <span className={styles.span_text}>11</span>
                                </span>
                            </a>
                            <a className={`${styles.next} ${styles.page_numbers} ${styles.alink}`} href="https://tocotocotea.com/category/blogs/cau-chuyen-thuong-hieu/page/2/">
                                <span className={styles.span_text}>
                                    <span className={styles.span_text}>»</span>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div >
            </div >
        </>

    )
}

export default Commercial_story