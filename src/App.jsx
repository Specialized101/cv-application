import { useState } from 'react'
import './App.css'
import Preview from './components/Preview.jsx'
import UserSection from './components/UserSection.jsx'

export default function App() {
  const [userData, setUserData] = useState({ info: {}, education: {}, experience: {} })

  function handleUserData(key, data) {
    setUserData({...userData, [key]: data })
  }

  return (
    <>
      <section id='user-data'>
        <UserSection userData={userData} saveUserData={handleUserData} />
      </section>
      <section id='preview'>
        <Preview userData={userData}></Preview>
      </section>
    </>
  )
}

