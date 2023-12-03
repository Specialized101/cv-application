import '../styles/Info.css'

export default function Info({ data, saveData, status }) {

  const submitForm = (e) => {
    e.preventDefault()
    const lastName = e.target.lastName.value
    const firstName = e.target.firstName.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const position = e.target.position.value
    saveData('info', { firstName, lastName, email, phone, position })
    status('info', true)
  }

  return (
    <>
      <form action="" method="post" onSubmit={(e) => submitForm(e)}>
        <div className="field">
          <label htmlFor='lastName'>Last name :</label>
          <input type='text' id='lastName' name='lastName' defaultValue={data.lastName} />
        </div>
        <div className="field">
          <label htmlFor='firstName'>First name :</label>
          <input type='text' id='firstName' name='firstName' defaultValue={data.firstName} />
        </div>
        <div className="field">
          <label htmlFor='email'>Email :</label>
          <input type='email' id='email' name='email' defaultValue={data.email} />
        </div>
        <div className="field">
          <label htmlFor='phone'>Phone :</label>
          <input type='text' id='phone' name='phone' defaultValue={data.phone} />
        </div>
        <div className="field">
          <label htmlFor='position'>Current position :</label>
          <input type='text' id='position' name='position' defaultValue={data.position} />
        </div>
        <button type="submit">Save</button>
      </form>

    </>
  )
}