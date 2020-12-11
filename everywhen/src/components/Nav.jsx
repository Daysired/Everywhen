import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

function Nav() {
  return (
      <div>
        <nav>
          <Typography variant="h3" className="everywhen">
              Everywhen
          </Typography>
              {/* <Link className="styleLink" to="/">Home</Link>  */}
              <Link className="styleLink" to="/well-time">WellnessTime</Link>
              <Link className="styleLink" to="/well-card">WellnessCard</Link>
            </nav>
    </div>
  )
}

export default Nav;