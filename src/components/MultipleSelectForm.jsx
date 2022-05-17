import { useState } from 'react'

function MultipleSelectForm() {
  const [frameworks, setFrameworks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`فریم ورک‌های انتخاب شده: ${frameworks}`)
  }

  const handleChange = (e) => {
    const values = [...e.target.selectedOptions].map((option) => option.value)
    setFrameworks(values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="framework-select" className="mb-2">
          فریم‌ورک‌های مورد علاقه خود را انتخاب کنید:
        </label>
        <select
          className="form-select"
          id="framework-select"
          value={frameworks}
          onChange={handleChange}
          multiple
        >
          <option value="react">ری‌اکت</option>
          <option value="vue">ویو</option>
          <option value="angular">آنگولار</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        ثبت
      </button>
    </form>
  )
}

export default MultipleSelectForm
