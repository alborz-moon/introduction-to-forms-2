import TextareaForm from './components/TextareaForm'
import SelectForm from './components/SelectForm'
import MultipleSelectForm from './components/MultipleSelectForm'
import CheckboxForm from './components/CheckboxForm'
import RadioForm from './components/RadioForm'
import Form from './components/Form'

function App() {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">آشنایی با تگ textarea در ری‌اکت</div>
        <div className="card-body">
          <div className="card-title mb-3">
            فرم زیر را تکمیل و روی دکمه ثبت کنید:
          </div>
          <TextareaForm />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">آشنایی با تگ select در ری‌اکت</div>
        <div className="card-body">
          <SelectForm />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">آشنایی با ویژگی multiple در تگ select</div>
        <div className="card-body">
          <MultipleSelectForm />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">آشنایی با تگ checkbox در ری‌اکت</div>
        <div className="card-body">
          <CheckboxForm />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">آشنایی با تگ radio در ری‌اکت</div>
        <div className="card-body">
          <div className="card-title">
            سیستم عامل مورد علاقه خود را انتخاب کنید:
          </div>
          <RadioForm />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          استفاده از یک استیت به جای چند استیت در فرم‌ها
        </div>
        <div className="card-body">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default App
