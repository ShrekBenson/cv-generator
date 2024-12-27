import './field.css'

export default function Field({children, id = 'text', type, value, onChange = () => {}}) {
  return (
    <>
      <div className="field">
        <input className='field__input' id={id} type={type} value={value} placeholder=' ' onChange={onChange} />
        <label className='field__label' htmlFor={id}>{children}</label>
      </div>
    </>
  )
}