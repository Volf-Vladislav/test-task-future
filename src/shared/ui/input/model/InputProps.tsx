type InputProps = {
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    width?: string
}

export default InputProps