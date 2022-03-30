import style from './EditProfiles.module.css'
import { Container } from "react-bootstrap";
import EditForm from "./EditForm";
import UserAvatar from "./UserAvatar";
function EditProfiles() {
  return (
      <Container className={`shadow px-3 pt-3 m-auto bg-body rounded ${style.EditProfilesContainer}`}>
        <UserAvatar/>
        <EditForm />
      </Container>
  );
}

export default EditProfiles;
