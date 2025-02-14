import InputProps from '../model/InputProps'

import styles from './style/input.module.scss'

const Input = ({ type = 'text', placeholder, value, onChange, className, width }: InputProps) => (
  <div style={{  width }}>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${styles.input} ${className || ''}`}
    />
  </div>
)

export default Input
