import { FormWrapper } from "./FormWrapper";
import s from './Forms.module.css'

interface UserData {
  firstName: string,
  lastName: string,
  age: string,
}

interface UserFormProps extends UserData {
  updateFields: (fields: Partial<UserData>) => void 
}

export function UserForm({ firstName, lastName, age, updateFields}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <div className={s.inputContainer}>
        <label>First Name</label>
        <input 
          autoFocus 
          required 
          type="text" 
          value={firstName} 
          onChange={ e => updateFields({ firstName: e.target.value})}
        />
      </div>
      <div className={s.inputContainer}>
        <label>Last Name</label>
        <input 
          required 
          type="text" 
          value={lastName} 
          onChange={ e => updateFields({ lastName: e.target.value})} 
        />
      </div>
      <div className={s.inputContainer}>
        <label>Age</label>
        <input 
          required 
          min={1} 
          type="number" 
          value={age}
          onChange={ e => updateFields({ age: e.target.value})} 
        />
      </div>
    </FormWrapper>
  )
}