import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <p>Everywhen</p>
        <Link class="styleLink" to="/well-time">WellnessTime</Link>
      
        <Link class="styleLink" to="/">Home</Link> 
      </nav>
    </div>
  )
}

export default Nav;