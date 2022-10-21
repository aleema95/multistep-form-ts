import { useMultiStepForm } from './useMultistepForm'
import { AccountForm } from './AccountForm'
import { AddressForm } from './AddressForm'
import { UserForm } from './UserForm'
import s from './App.module.css'
import { FormEvent, useState } from 'react'

interface FormData {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: ""
}

function App() {

  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
   useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if(!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <div className={s.formContainer}>
      <form onSubmit={onSubmit}>
        <div className={s.steps}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className={s.btnsContainer}>
          {!isFirstStep && 
          <button type='button' onClick={back}>
              Back
          </button>}
          <button type='submit'>
              {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
