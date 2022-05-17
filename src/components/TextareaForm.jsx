import { useState } from 'react'

function TextareaForm() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`پیام: ${message}`)
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="form-control"
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="پیام خود را بنویسید"
      />
      <button type="submit" className="btn btn-primary mt-3">
        ثبت
      </button>
    </form>
  )
}

export default TextareaForm
