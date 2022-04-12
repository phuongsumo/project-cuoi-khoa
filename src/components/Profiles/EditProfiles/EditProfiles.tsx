import style from './EditProfiles.module.css'
import { Container } from "react-bootstrap";
import EditForm from "./EditForm";

interface UserProps {
  user:{
    username: string,
    password: string,
    email: string,
    phone: string,
    fullName: string,
    age: string,
    avatar: string,
    address: string,
    id: string,
  
  }
}
const EditProfiles: React.FC<UserProps> = ({user}) => {
  return (
      <Container className={`shadow px-3 pt-3 m-auto bg-body rounded ${style.EditProfilesContainer}`}>
        <EditForm user = {user} />
      </Container>
  );
}

export default EditProfiles;
