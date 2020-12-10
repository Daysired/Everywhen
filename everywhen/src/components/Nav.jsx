import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Nav() {
  return (
    <div>
      <div>
      <AppBar position="static" color="secondary" className="nav">
        <Toolbar>
          <Typography variant="h3" className="everywhen">
              Everywhen
          </Typography>
            <Typography className="links">
              <Link className="styleLink" to="/">Home</Link> 
              <Link className="styleLink" to="/well-time">WellnessTime</Link>
              <Link className="styleLink" to="/well-card">WellnessCard</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      <nav>
      </nav>
    </div>
  )
}

export default Nav;