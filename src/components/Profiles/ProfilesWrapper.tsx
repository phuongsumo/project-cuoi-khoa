import ProfilesPreview from "./EditProfiles/ProfilesPreview"
import ProfilesCategory from "./ProfilesCategory/ProfilesCategory"
import {Container,Row,Col} from 'react-bootstrap'

function ProfilesWrapper() {
  return (
    <Container>
        <Row>
            <Col lg = {4} className= {`d-sx-none`}>
                <ProfilesCategory/>
            </Col>
            <Col lg = {8} xs = {12}>
                <ProfilesPreview/>
            </Col>
        </Row>
    </Container>
  )
}

export default ProfilesWrapper