import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import UserAvatar from "./UserAvatar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { accountState } from "../../../recoilProvider/userProvider";
import style from "./EditForm.module.css";

interface UserProps {
  username: string;
  password: string;
  email: string;
  phone: string;
  fullName: string;
  age: string;
  avatar: string;
  address: string;
  id: string;
  cart: [];
}
interface IFormInputs {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  age: string;
  avatar: string | any;
}

const EditForm: React.FC = () => {
  const apiImage = "https://api.cloudinary.com/v1_1/tocotoco/image/upload";
  const api = `https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users/`;

  const [user, setUser] = useRecoilState<UserProps>(accountState);
  const [avatar, setAvatar] = useState(user.avatar);
  const [imageSelected, setImageSelected] = useState<any>("");

  const { id } = user;

  const schema = yup.object().shape({
    fullName: yup.string().required("Tên không được để trống"),
    phone: yup
      .string()
      .required("Số điên thoại không được để trống")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Định dạng sai"
      ),
    email: yup
      .string()
      .email("Trường này phải là Email")
      .required("Trường này không được để trống"),
    address: yup.string().required("Địa chỉ không được để trống"),
    age: yup
      .number()
      .typeError("Trường này phải là số")
      .positive("Trường này phải là số dương")
      .integer("Trường này phải là số dương")
      .required("Trường này không được để trống"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    defaultValues: { fullName: "", phone: "", email: "", address: "", age: "" },
    resolver: yupResolver(schema),
  });

  const submitForm = async (data: IFormInputs) => {
   if(imageSelected){
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "tocoproduct");

    axios.post(apiImage, formData).then((response: any) => {
      // Assign data to Cloudinary image URL
      data.avatar = response.data.secure_url;
      // Put data to Api
      axios
        .put(`${api}/${id}`, data)
        .then((res) => {
          alert("Thay đổi thành công");
          const newData = { ...user, ...data };
          localStorage.setItem("account", JSON.stringify(newData));
          setUser(newData);
        })
        .catch((e) => alert("có lõi xảy ra"));
    });
   }else{
    axios
    .put(`${api}/${id}`, data)
    .then((res) => {
      alert("Thay đổi thành công");
      const newData = { ...user, ...data };
      localStorage.setItem("account", JSON.stringify(newData));
      setUser(newData);
    })
    .catch((e) => alert("có lõi xảy ra"));
   }
  };
  useEffect(() => {
    reset({ ...user });
  }, [user]);

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Container>
        <UserAvatar
          avatar={avatar}
          register={register}
          setAvatar={setAvatar}
          setImageSelected={setImageSelected}
        />
        <Row className={`justify-content-center mt-4 gx-3`}>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Họ và tên:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ tên..."
                {...register("fullName")}
                className={style.formInput}
              />
              <p className="text-danger mt-3">{errors.fullName?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Số điện thoại:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập SĐT..."
                {...register("phone")}
                className={style.formInput}
              />
              <p className="text-danger mt-3">{errors.phone?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập Email..."
                {...register("email")}
                className={style.formInput}
              />
              <p className="text-danger mt-3">{errors.email?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Địa chỉ:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ..."
                {...register("address")}
                className={style.formInput}
              />
              <p className="text-danger mt-3">{errors.address?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Tuổi:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tuổi..."
                {...register("age")}
                className={style.formInput}
              />
              <p className="text-danger mt-3">{errors.age?.message}</p>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Button
        variant="success"
        className={`mb-3`}
        type="submit"
        style={{ marginLeft: "50%", transform: "translateX(-50%)" }}
      >
        Lưu thay đổi
      </Button>
    </Form>
  );
};

export default EditForm;
