import { ComponentProps } from 'react'
import styles from './Textarea.module.css'

interface TextareaProps extends ComponentProps<'textarea'>  {
  placeholer?: string
}

export const Textarea = ({placeholer, ...props}: TextareaProps) => {
  return (
    <>
    <textarea className={styles.textarea} placeholder={placeholer} {...props}></textarea>
    </>
  )
}