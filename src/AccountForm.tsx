import { FormWrapper } from "./FormWrapper";
import s from './Forms.module.css'

interface AccountData {
  email: string,
  password: string,
}

interface AccountFormProps extends AccountData {
  updateFields: (fields: Partial<AccountData>) => void 
}

export function AccountForm({ email, password, updateFields }: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <div className={s.inputContainer}>
        <label>Email</label>
        <input 
          autoFocus 
          required 
          type="email" 
          value={email} 
          onChange={ e => updateFields({ email: e.target.value})} 
        />
      </div>
      <div className={s.inputContainer}>
        <label>Password</label>
        <input 
          required 
          type="password" 
          value={password} 
          onChange={ e => updateFields({ password: e.target.value})} 
        />
      </div>
    </FormWrapper>
  )
}