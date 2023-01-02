import "./FormInputReserva.css"

const FormInput = (props) => {
    const {label,errorMessage, onChange, id, ...inputProps} = props
  return (
    <div className="formInputReserva" >
      <label >{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span id="green">{errorMessage}</span>
    </div>
  )
}

export default FormInput
