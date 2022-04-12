import ProfilesPreview from "./EditProfiles/ProfilesPreview"
import ProfilesCategory from "./ProfilesCategory/ProfilesCategory"
import {Container,Row,Col} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import axios from 'axios'

interface IUser{
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


function ProfilesWrapper() {

  const [user,setUser] = useState<IUser["user"]>({} as IUser["user"])
  useEffect(()=>{
    const getUser = async ()=>{
      const res = await axios.get('https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users/23')
      setUser(res.data)
    }
    getUser()
  },[])
  return (
    <Container className="mt-5">
        <Row>
            <Col lg = {4} className= {`d-sx-none`}>
                <ProfilesCategory/>
            </Col>
            <Col lg = {8} xs = {12}>
                <ProfilesPreview user = {user}/>
            </Col>
        </Row>
    </Container>
  )
}

export default ProfilesWrapper