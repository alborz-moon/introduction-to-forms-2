import { useState } from 'react'

function RadioForm() {
  const [selectedOption, setSelectedOption] = useState('mac')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`سیستم عامل مورد علاقه شما: ${selectedOption}`)
  }

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-check">
        <input
          className="form-check-input"
          id="windows"
          type="radio"
          value="windows"
          checked={selectedOption === 'windows'}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="windows">
          ویندوز
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="linux"
          type="radio"
          value="linux"
          checked={selectedOption === 'linux'}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="linux">
          لینوکس
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          id="mac"
          type="radio"
          value="mac"
          checked={selectedOption === 'mac'}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="mac">
          مک
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        ثبت
      </button>
    </form>
  )
}

export default RadioForm
