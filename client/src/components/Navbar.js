import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';


function Navbar(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
            {!isLoggedIn && (
                <>
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                    <Link className="nav-link" to="/login">Log in</Link>  
                </>
            )}

            {isLoggedIn && (
                <>
                    <div>
                        <Link className="nav-link" to="/feed">Feed</Link>
                        <Link className="nav-link" to="/drinks"> My Drinks</Link>
                        <Link className="nav-link" to="/new-drink">New Drink</Link>
                    </div>
                 
                    <button onClick={logOutUser}>Logout</button>
                </>
            )}
        </nav>
    )
}

export default Navbar;