import React from 'react'
import MainHeader from '../../components/HeaderCom/MainHeader'
import Footer from '../../components/Footer/Footer'
import { auth } from '../../utils/firebase'

const ProfilePage = () => {
  
  return (
    <div>
      <MainHeader/>
      <div>
        profile page
        {auth.currentUser.email}
      </div>
      <Footer/>
    </div>
  )
}

export default ProfilePage
