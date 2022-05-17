import { useState } from 'react'

function Form() {
  const [form, setForm] = useState({
    name: '',
    message: '',
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`نام: ${form.name}   پیام: ${form.message}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mt-2"
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="نام خود را وارد کنید"
      />
      <textarea
        className="form-control mt-2"
        type="text"
        name="message"
        onChange={handleChange}
        placeholder="پیام خود را وارد کنید"
      />
      <button type="submit" className="btn btn-primary mt-3">
        ثبت
      </button>
    </form>
  )
}

export default Form
