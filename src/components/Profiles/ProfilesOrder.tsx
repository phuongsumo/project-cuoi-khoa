import { useRecoilValue } from "recoil";
import { Container, Table } from "react-bootstrap";
import { accountState } from "../../recoilProvider/userProvider";

interface Iproduct {
  name: string;
  price: string;
  quantitySelect: string;
  productImg: string;
  total: string;
  id: string;
}
function ProfilesOrder() {
  const dataUser = useRecoilValue(accountState);
  const cart = [...dataUser.orders];

  return (
    <Container className = {`mt-3`}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity Select</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map(({ name, price, quantitySelect,productImg }: Iproduct, index) => {
              return (
                <tr>
                  <td>{index +1}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{quantitySelect}</td>
                  <td><img src={productImg} style= {{width:'50px', height:'50px'}} alt="" /></td>
                </tr>
              );
            })
          ) : (
            <p className={`py-3`}>không có đơn hàng nào </p>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProfilesOrder;
