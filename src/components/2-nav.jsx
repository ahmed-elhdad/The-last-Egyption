import "../css/2-nav/2-nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <a href="/">الرئيسية</a>
        <a href="/kings">ملوك مصر</a>
        <a href="#museums">متاحف</a>
        <a href="#maabed">المعابد</a>
        <a href="#images">معرض الصور</a>
      </nav>
    </>
  );
};
export default Nav;
