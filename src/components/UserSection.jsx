import { useState } from 'react'
import Card from './Card.jsx'
import Info from './Info.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

export default function UserSection({ userData, saveUserData }) {
  const [saveStatus, setSaveStatus] = useState({ info: false, education: false, experience: false })

  function handleStatus(key, status) {
    setSaveStatus({ ...saveStatus, [key]: status })
  }

  function handleEdit(section) {
    setSaveStatus({ ...saveStatus, [section]: false })
  }

  return (
    <>
      {!saveStatus.info ?
        <Card title={'General informations'}>
          <Info data={userData.info} saveData={saveUserData} status={handleStatus} />
        </Card> :
        <Card title={'General informations ✔'}>
          <button onClick={() => handleEdit('info')}>Edit</button>
        </Card>

      }

      {!saveStatus.education ?
        <Card title={'Education'}>
          <Education data={userData.education} saveData={saveUserData} status={handleStatus} />
        </Card> :
        <Card title={'Education ✔'}>
          <button onClick={() => handleEdit('education')}>Edit</button>
        </Card>
      }

      {!saveStatus.experience ?
        <Card title={'Experience'}>
          <Experience data={userData.experience} saveData={saveUserData} status={handleStatus}/>
        </Card> :
        <Card title={'Experience ✔'}>
          <button onClick={() => handleEdit('experience')}>Edit</button>
        </Card>
      }

    </>
  )

}