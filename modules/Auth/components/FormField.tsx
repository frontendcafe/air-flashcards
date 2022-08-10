import React, { ChangeEventHandler } from "react"

interface FormFieldProps {
  name: string
  label: string
  type: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const FormField: React.FC<FormFieldProps> = ({ label, name, type, onChange }) => {
  return (
    <div>
      <label htmlFor="email">{label}</label>
      <input type={type} id={name} name={name} onChange={onChange} />
    </div>
  )
}

export default FormField
