import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import style from './Navbar.module.css';
import logo from './Logo-toco.png';

const Navbar = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const navbar = useRef<any>(null);
    const navMenu = useRef<any>(null);
    const subNavIntro = useRef<any>(null);
    const subNavNew = useRef<any>(null);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    const handleOpenMenu = () => {
        navMenu.current.style = "transform: translateX(0); opacity: 1;"
    }

    const handleCloseMenu = () => {
        navMenu.current.style = "transform: translateX(100%); opacity: 0;"
    }

    const handleMoreClick = (e: typeof navMenu, show: boolean, setShow: Function) => {
        setShow(!show)
        if (!show) {
            e.current.style.display = "block";
        } else {
            e.current.style.display = "none";
        }
    }

    const handleScroll = () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 0) {
            navbar.current.style.backgroundColor = "#282828";
        } else {
            navbar.current.style.backgroundColor = "unset";
        }
    }


    return (
      <div ref={navbar} className={style.navbar}>
        <Container>
          <div className={style.nav_container}>
            <Link to="/">
              <img src={logo} alt="logo" className={style.logo} />
            </Link>
            <GiHamburgerMenu
              onClick={handleOpenMenu}
              className={style.nav_menu_icon}
            />
            <ul ref={navMenu} className={style.list_nav}>
              <span className={style.nav_close_icon}>
                <AiFillCloseCircle onClick={handleCloseMenu} />
              </span>
              <li className={`${style.nav_element} ${style.active}`}>
                <Link to="/" className={style.nav_link}>
                  Trang chủ
                </Link>
              </li>
              <li className={style.nav_element}>
                <Link to="/" className={style.nav_link}>
                  Giới thiệu
                  <IoIosArrowDown className={style.nav_icons} />
                  <ul ref={subNavIntro} className={style.sub_nav_list}>
                    <li className={style.sub_item}>
                      <Link to="/historyAndMission" className={style.sub_link}>
                        lịch sử và sứ mệnh
                      </Link>
                    </li>
                    <li className={style.sub_item}>
                      <Link to="/achievement" className={style.sub_link}>
                        thành tựu đạt được
                      </Link>
                    </li>
                  </ul>
                </Link>
                <AiOutlinePlus
                  className={style.nav_icon_more}
                  onClick={() => handleMoreClick(subNavIntro, show1, setShow1)}
                />
              </li>
              <li className={style.nav_element}>
                <Link to="/product" className={style.nav_link}>
                  Sản phẩm
                </Link>
              </li>
              <li className={style.nav_element}>
                <Link to="/News" className={style.nav_link}>
                  Tin tức
                  <IoIosArrowDown className={style.nav_icons} />
                  <ul ref={subNavNew} className={style.sub_nav_list}>
                    <li className={style.sub_item}>
                      <Link to="/Commercial_story" className={style.sub_link}>
                        tin tức khuyến mại
                      </Link>
                    </li>
                    <li className={style.sub_item}>
                      <Link to="/Promotional_news" className={style.sub_link}>
                        câu chuyện thương hiệu
                      </Link>
                    </li>
                    <li className={style.sub_item}>
                      <Link to="/Sk_events" className={style.sub_link}>
                        sự kiện
                      </Link>
                    </li>
                  </ul>
                </Link>
                <AiOutlinePlus
                  className={style.nav_icon_more}
                  onClick={() => handleMoreClick(subNavNew, show2, setShow2)}
                />
              </li>
              <li className={style.nav_element}>
                <Link to="/list-shop" className={style.nav_link}>
                  Cửa hàng
                </Link>
              </li>
              <li className={style.nav_element}>
                <Link to="/recruit" className={style.nav_link}>
                  Tuyển dụng
                </Link>
              </li>
              <li className={style.nav_element}>
                <Link to="/Login" className={style.nav_link}>
                  Đăng nhập
                </Link>
              </li>
              <li className={style.nav_element}>
                <Link to="/checkout" className={style.nav_link}>
                  checkout
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
}

export default Navbar