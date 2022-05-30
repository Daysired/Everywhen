import Nav from "./nav/Navbar";
import Footer from "./footer/Footer";



export default function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}