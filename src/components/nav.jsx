import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">الرئيسية</Link>
      <Link to="/kings">ملوك مصر</Link>
      <Link to="#">المعابد</Link>
      <Link to="#">معرض الصور</Link>
    </nav>
  );
};
export default Nav;
