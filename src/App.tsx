import { useState } from 'react'
import s from './App.module.css'
import { useMultiStepForm } from './useMultistepForm'

function App() {

  const { steps, currentStepIndex, step } = useMultiStepForm([
    <div>One</div>,
    <div>Two</div>
  ])
  return (
    <div className={s.formContainer}>
      <form>
        <div className={s.steps}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className={s.btnsContainer}>
          <button>Back</button>
          <button>Next</button>
        </div>
      </form>
    </div>
  )
}

export default App
