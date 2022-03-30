import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {Container} from 'react-bootstrap'
function UserAvatar() {
  return (
    <Container className = {}>
        <Avatar
          shape="circle"
          size={100}
          icon={
            <UserOutlined
              style={{
                backgroundColor: "RGB(204, 204, 204)",
                padding: "15px",
                borderRadius: "50%",
              }}
            />
          }
        />
        <input type='file'/>
    </Container>
  )
}

export default UserAvatar