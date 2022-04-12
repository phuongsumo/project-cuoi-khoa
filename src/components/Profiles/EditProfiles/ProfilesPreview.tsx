import React from 'react'
import { Container,Button } from 'react-bootstrap'
import style from './ProfilesPreview.module.css'
import EditProfiles from './EditProfiles'

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

 const ProfilesPreview: React.FC<UserProps> = ({user}) => {
  return (
    <Container className= {`shadow bg-body rounded `}>
        <div className={`${style.Preview}`}>
        </div>
        <EditProfiles user = {user}/>
    </Container>
  )
}

export default ProfilesPreview