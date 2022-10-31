import { FormWrapper } from "./FormWrapper";
import s from './Forms.module.css'

interface AddressData {
  street: string,
  city: string,
  state: string,
  zip: string,
}

interface AddressFormProps extends AddressData {
  updateFields: (fields: Partial<AddressData>) => void 
}

export function AddressForm({ street, city, state, zip, updateFields}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <div className={s.inputContainer}>
        <label>Street</label>
        <input 
          autoFocus 
          required 
          type="text" 
          value={street} 
          onChange={ e => updateFields({ street: e.target.value})} 
        />
      </div>
      <div className={s.inputContainer}>
        <label>City</label>
        <input 
          required 
          type="text"  
          value={city} 
          onChange={ e => updateFields({ city: e.target.value})}
        />
      </div>
      <div className={s.inputContainer}>
        <label>State</label>
        <input 
          required 
          type="text" 
          value={state} 
          onChange={ e => updateFields({ state: e.target.value})} 
        />
      </div>
      <div className={s.inputContainer}>
        <label>Zip</label>
        <input 
          required 
          type="text" 
          value={zip} 
          onChange={ e => updateFields({ zip: e.target.value})} 
        />
      </div>
    </FormWrapper>
  )
}