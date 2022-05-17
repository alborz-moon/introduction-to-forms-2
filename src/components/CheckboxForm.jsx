import { useState } from 'react'

function CheckboxForm() {
  const [checked, setChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`آیا ری‌اکت جذاب است: ${checked}`)
  }

  const handleChange = (e) => {
    setChecked(!checked)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-check">
        <input
          className="form-check-input"
          id="question"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="question">
          آیا ری‌اکت جذاب است؟!
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        ثبت
      </button>
    </form>
  )
}

export default CheckboxForm
