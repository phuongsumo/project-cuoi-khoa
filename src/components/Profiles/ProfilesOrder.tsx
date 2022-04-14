import { useRecoilValue } from "recoil";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { accountState } from "../../recoilProvider/userProvider";
import { useState } from "react";

interface Iproduct {
  fullName: string;
  time: string;
  status: string;
  paid: boolean;
  username: string;
  phone: string;
  address: string;
  orders: Array<{
    name: string;
    size: string;
    ice: string;
    sugar: string;
    quantitySelect: number;
    price: number;
    total: number;
    topping: any[];
  }>;
}

interface IOrders {
  name: string;
  size: string;
  ice: string;
  sugar: string;
  quantitySelect: number;
  price: number;
  total: number;
  topping: any[];
}

function ProfilesOrder() {
  const dataUser = useRecoilValue(accountState);
  const [show, setShow] = useState<boolean>(false);
  const [dataOrder, setDataOrder] = useState<IOrders[]>([]);
  const orders = [...dataUser.orders];

  const handleClick = (order: Iproduct) => {
    setShow(true);
    setDataOrder(order.orders);
  };
  return (
    <>
      <Container className={`mt-3 ps-0`}  fluid>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="d-none d-sm-inline">STT</th>
              <th  className="d-none d-sm-inline" >Người đặt</th>
              <th>Địa chỉ</th>
              <th> Số điện thoại</th>
              <th>Chi tiết</th>
              <th>Thanh toán</th>
              <th  className="d-none d-sm-inline">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order: Iproduct, index) => {
                return (
                  <tr>
                    <td className="d-none d-sm-inline">{index + 1}</td>
                    <td  className="d-none d-sm-inline">{order.fullName}</td>
                    <td>{order.address}</td>
                    <td>{order.phone}</td>
                    <td>
                      <Button onClick={() => handleClick(order)}>
                        Chi tiết
                      </Button>
                    </td>
                    <td>
                      {order.paid ? (
                        <span className={`text-success`}>Đã thanh toán</span>
                      ) : (
                        <span className={`text-danger`}>Chưa thanh toán</span>
                      )}
                    </td>
                    <td  className="d-none d-sm-inline">
                      {order.status === "1" ? (
                        <p className={`text-danger`}>Chờ xác nhận</p>
                      ) : order.status === "2" ? (
                        <p className={`text-warning`}>Đang giao hàng</p>
                      ) : order.status === "3" ? (
                        <p className={`text-success`}>Đã giao hàng</p>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <p className={`py-3`}>không có đơn hàng nào </p>
            )}
          </tbody>
        </Table>
      </Container>
      <Modal show={show} onHide={() => setShow(false)} size = "lg" >
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đơn hàng</Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Tên</th>
              <th>Số lượng</th>
              <th className="d-none d-lg-inline">Size</th>
              <th className="d-none d-lg-inline">Đá</th>
              <th className="d-none d-lg-inline">Đường</th>
              <th className="d-none d-lg-inline">Topping</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {dataOrder.map((item: IOrders) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantitySelect}</td>
                  <td className="d-none d-lg-inline">{item.size ? <span>L</span> : <span>M</span>}</td>
                  <td className="d-none d-lg-inline">
                    {item.ice ? <span>Có đá</span> : <span>Không đá</span>}
                  </td>
                  <td className="d-none d-lg-inline">{item.sugar ? <span>100%</span> : <span>50%</span>}</td>
                  <td className="d-none d-lg-inline">
                    {item.topping.map((tp: any, index: any) =>
                      tp === "1" ? (
                        <span key={index}>Trân châu sương mai</span>
                      ) : tp === "2" ? (
                        <span key={index}>Hạt dẻ</span>
                      ) : tp === "3" ? (
                        <span key={index}>Trân châu Baby</span>
                      ) : (
                        ""
                      )
                    )}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.total}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng thanh toán</td>
              <td>
                {
                 ( ()=> {
                  let totalPrice: number = dataOrder.reduce((a: any, b: any) => a + Number(b.total), 0);
                      return ` ${totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`
                })()
                }
              </td>
            </tr>
          </tfoot>
        </Table>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfilesOrder;
