import { Container,Button } from 'react-bootstrap'
import style from './ProfilesPreview.module.css'
import EditProfiles from './EditProfiles'
function ProfilesPreview() {
  return (
    <Container className= {`shadow bg-body rounded `}>
        <div className={`${style.Preview}`}>
        </div>
        <EditProfiles/>
        <Button variant='success' className={`mb-3 ${style.saveEditBtn}`} >Lưu thay đổi</Button>
    </Container>
  )
}

export default ProfilesPreview