import React from "react";
import {
  AiTwotoneHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiFillApple,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {ListGroup} from 'react-bootstrap'


function ProfilesCategory() {
  return (
    <nav>
      <ListGroup>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiTwotoneHome />
          <Link to="/" className={`ms-2 text-decoration-none`}>Trang chủ</Link>
        </ListGroup.Item>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiOutlineUser />
          <Link to="/user/infor" className={`ms-2 text-decoration-none`}>Thông tin tài khoản</Link>
        </ListGroup.Item>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiOutlineShoppingCart />
          <Link to="/user/order" className={`ms-2 text-decoration-none`}>Đơn hàng</Link>
        </ListGroup.Item>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiOutlineLogout />
          <Link to="/" className={`ms-2 text-decoration-none`}>Đăng xuất</Link>
        </ListGroup.Item>
      </ListGroup>
    </nav>
  );
}

export default ProfilesCategory;
