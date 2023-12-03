import '../styles/Preview.css'
import AtSign from '../assets/icons8-at-sign-50.png'
import Phone from '../assets/icons8-phone-50.png'
import { parseISO, isToday, isFuture, format } from 'date-fns'

export default function Preview({ userData }) {

  const printToday = (date) => {
    return date ? isToday(parseISO(date)) || isFuture(parseISO(date)) : ''
  }

  function formatStringDate(date) {
    return date ? format(parseISO(date), 'yyyy/MM/dd') : ''
  }

  return (
    <>
      <div className='preview-window'>
        <div className='intro'>
          <div className="profile-pic"></div>
          <div>
            <p className='fullname'>{(userData.info.lastName || '') + ' ' + (userData.info.firstName || '')}</p>
            <p className='current-position'>{(userData.info.position || '')}</p>
          </div>
        </div>
        <hr />
        <div className="contact">
          <div>
            <img src={AtSign} alt="atSign" />
            <p>{(userData.info.email || '')}</p>
          </div>
          <div>
            <img src={Phone} alt="Phone" />
            <p>{(userData.info.phone || '')}</p>
          </div>
        </div>
        <hr />
        <div className="education">
          <div className="title">My Education</div>
          <div className="details">
            <div className="period">
              <span>{userData.education.from ? formatStringDate(userData.education.from) : ''}</span>
              <span>→</span>
              <span>{printToday(userData.education.to) ? 'today' : formatStringDate(userData.education.to)}</span>
            </div>
            <div className="school">{userData.education.school}</div>
            <div className="subject">{userData.education.study}</div>
          </div>
        </div>
        <hr />
        <div className="experience">
          <div className="title">My Experience</div>
          <div className="details">
            <div className="period">
              <span>{userData.experience.from ? formatStringDate(userData.experience.from) : ''}</span>
              <span>→</span>
              <span>{printToday(userData.experience.to) ? 'today' : formatStringDate(userData.experience.to)}</span>
            </div>
            <div className="company">{userData.experience.company}</div>
            <div className="position">{userData.experience.position}</div>
          </div>
          <div className="responsibilities">
            {userData.experience.responsibilities ?
              userData.experience.responsibilities.split('\n').map((line, index) => {
                return <div key={index}>{'• ' + line}</div>
              }) : ''
            }
          </div>
        </div>
      </div>
    </>
  )
}