import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <h1>Everywhen</h1>
        <Link className="styleLink" to="/well-card">
          WellnessCard
        </Link>
        <Link className="styleLink" to="/">
          WellnessTime
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
