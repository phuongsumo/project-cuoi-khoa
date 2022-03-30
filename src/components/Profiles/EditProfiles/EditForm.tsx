import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
function EditForm() {
  return (
    <Form className= {`mt-5`}>
      <Container>
        <Row className= {`justify-content-center`}>
          <Col xs= {12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập họ tên..." />
            </Form.Group>
          </Col>    
          <Col xs= {12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="text" placeholder="Nhập SĐT..." />
            </Form.Group>
          </Col>
          <Col xs= {12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Nhập Email..." />
            </Form.Group>
          </Col>
          <Col xs= {12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control type="text" placeholder="Nhập địa chỉ..." />
            </Form.Group>
          </Col>
          <Col xs= {12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Tuổi</Form.Label>
              <Form.Control type="number" placeholder="Nhập tuổi..." />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default EditForm;
