const Button =({children, disabled, onClick, text}) => {
    return <button className="button" disabled={disabled} onClick={onClick}>{text || children}</button>
}
export default Button