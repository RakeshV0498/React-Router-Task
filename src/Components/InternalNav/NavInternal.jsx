import "./NavInternal.css";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "FullStack Development",
  "Data Science",
  "Cyber Security",
  "Cloud Computing",
];

function NavInternal() {
  return (
    <>
      {categories.map((category) => (
        <Link key={category} to={"FSD"}>
          category
        </Link>
      ))}
    </>
  );
}

export default NavInternal;
