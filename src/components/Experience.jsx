import '../styles/Experience.css'


export default function Experience({ data, saveData, status }) {

  const submitForm = (e) => {
    e.preventDefault()
    const company = e.target.company.value
    const position = e.target.position.value
    const responsibilities = e.target.responsibilities.value
    const from = e.target.from.value
    const to = e.target.to.value
    saveData('experience', { company, position, responsibilities, from, to })
    status('experience', true)
  }

  return (
    <>
      <form action="" method="post" onSubmit={(e) => submitForm(e)}>
        <div className="field">
          <label htmlFor="company">Company :</label>
          <input type="text" id="company" name="company" defaultValue={data.company} />
        </div>
        <div className="field">
          <label htmlFor="position">Position :</label>
          <input type="text" id="position" name="position" defaultValue={data.position} />
        </div>
        <div className="field">
          <label htmlFor="responsibilities">Responsibilities :</label>
          <textarea rows={4} id="responsibilities" name="responsibilities" defaultValue={data.responsibilities} />
        </div>
        <div className="field">
          <fieldset>
            <legend>Period</legend>
            <div className="field">
              <label htmlFor="from">From :</label>
              <input type="date" id="from" name="from" defaultValue={data.from} />
            </div>
            <div className="field">
              <label htmlFor="to">To :</label>
              <input type="date" id="to" name="to" defaultValue={data.to} />
            </div>
          </fieldset>
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  )
}