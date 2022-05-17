import { useState } from 'react'

function SelectForm() {
  const [framework, setFramework] = useState('vue')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`فریم ورک انتخاب شده: ${framework}`)
  }

  const handleChange = (e) => {
    setFramework(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="framework-select" className="mb-2">
          فریم‌ورک مورد علاقه خود را انتخاب کنید:
        </label>
        <select
          className="form-select"
          id="framework-select"
          value={framework}
          onChange={handleChange}
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

export default SelectForm
