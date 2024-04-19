import "./NavInternal.css";
import { Link } from "react-router-dom";

const categories = [
  { name: "All", path: "/" },
  { name: "FullStack Development", path: "/FSD" },
  { name: "Data Science", path: "/DS" },
  { name: "Cyber Security", path: "/CS" },
  { name: "Cloud Computing", path: "/CC" },
];

function NavInternal() {
  return (
    <div>
      {categories.map((category) => (
        <Link key={category.name} to={category.path}>
          {category.name}
        </Link>
      ))}
    </div>
  );
}

export default NavInternal;
