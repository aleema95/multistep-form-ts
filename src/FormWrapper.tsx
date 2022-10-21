import { ReactNode } from "react"
import s from './FormWrapper.module.css'

interface FormWrapperProps {
  title: string,
  children: ReactNode
}

export function FormWrapper({ title, children}: FormWrapperProps) {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <div className={s.childrenContainer}>{children}</div>
    </>
  )
}