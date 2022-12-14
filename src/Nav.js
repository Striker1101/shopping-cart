import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="navLinks">
        <Link style={navStyle} to="./">
          <li className="link">Homepage</li>
        </Link>
        <Link style={navStyle} to="./shop">
          <li className="link">Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
