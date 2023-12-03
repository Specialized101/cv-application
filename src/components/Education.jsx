import '../styles/Education.css'

export default function Education({ data, saveData, status }) {

  const submitForm = (e) => {
    e.preventDefault()
    const school = e.target.schoolName.value
    const study = e.target.study.value
    const from = e.target.from.value
    const to = e.target.to.value
    saveData('education', { school, study, from, to })
    status('education', true)
  }

  return (
    <>
      <form action='' method='post' onSubmit={(e) => submitForm(e)}>
        <div className="field">
          <label htmlFor="schoolName">School :</label>
          <input type="text" id='schoolName' name='schoolName' defaultValue={data.school} />
        </div>
        <div className="field">
          <label htmlFor="study">Subject of study :</label>
          <input type="text" id='study' name='study' defaultValue={data.study} />
        </div>
        <div className="field">
          <fieldset>
            <legend>Period</legend>
            <div className="field">
              <label htmlFor="from">From :</label>
              <input type="date" id='from' name='from' defaultValue={data.from} />
            </div>
            <div className="field">
              <label htmlFor="to">To :</label>
              <input type="date" id='to' name='to' defaultValue={data.to} />
            </div>
          </fieldset>
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}