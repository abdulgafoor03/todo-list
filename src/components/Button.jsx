

export default function Button({text, buttonType,onClick}) {
  return (
    <button className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`} onClick={onClick}>{text}</button>
  )
}
