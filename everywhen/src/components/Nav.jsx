import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link className="styleLink" to="/well-time">WellnessTime</Link>
        <Link className="styleLink" to="/well-card">WellnessCard</Link>
        <Link className="styleLink" to="/">Home</Link> 
      </nav>
    </div>
  )
}

export default Nav;