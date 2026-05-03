import { Link } from "react-router-dom";

export default function LinkButton({ text, path }) {
  return (
    <Link to={path}>
      <button className="link-btn">{text}</button>
    </Link>
  )
}
