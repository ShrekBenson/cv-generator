import Field from "../../field/Field"
import './personal_form.css'

export default function PersonalInfo({data,onChange=()=>{}}) {
  return (
    <>
      <div className="form__title">
        <h1>Personal Info</h1>
      </div>
      <div className="input-section">
        <div className="input-section__fields">
          <Field
            id='name'
            type='text'
            value={data.name}
            onChange={onChange}
          >
            Name
          </Field>

          <Field
            id='lastname'
            type='text'
            value={data.lastname}
            onChange={onChange}
          >
            Lastname
          </Field>

          <Field
            id='email'
            type='email'
            value={data.email}
            onChange={onChange}
          >
            Email
          </Field>

          <Field
            id='phone'
            type='tel'
            value={data.phone}
            onChange={onChange}
          >
            Phone
          </Field>
        </div>
      </div>
    </>
  )
}