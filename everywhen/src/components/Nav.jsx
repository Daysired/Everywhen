import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Nav() {
  return (
    <div>
      <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h3">
              Everywhen
          </Typography>
            <Typography variant= "h6">
              <Link className="styleLink" to="/well-card">WellnessCard</Link>
              <Link className="styleLink" to="/well-time">WellnessTime</Link>
              <Link className="styleLink" to="/">Home</Link> 
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