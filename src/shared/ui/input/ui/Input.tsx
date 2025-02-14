import styles from './style/input.module.scss'

type InputProps = {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const Input = ({ type = 'text', placeholder, value, onChange, className }: InputProps) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`${styles.input} ${className || ''}`}
  />
)

export default Input
