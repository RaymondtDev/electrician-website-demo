import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function ArrowLink({ path }) {
  return (
    <Link to={path} className="flex items-center">
      <p className="text-secondary">Our Services</p>
      <Icon src="/icons/arrow-icon.svg" />
    </Link>
  );
}
