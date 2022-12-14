
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage(){

    const navigate = useNavigate()

    const [state, setState] = useState({
        username: '',
        password: ''
      });
    
      const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
      });
    
      const handleSubmit = event => {
        event.preventDefault();
    
        axios.post('http://localhost:3001/auth/signup', state)
          .then(res => {
            console.log(res.data);
            navigate('/login')
          })
          .catch(err => console.log(err))
    
      }

    return(
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username
          </label>
          <input
            name="username"
            value={state.username}
            onChange={updateState}
          />
        </div>
        <div>
          <label>
            Password
          </label>
          <input
            name="password"
            type="password"
            value={state.password}
            onChange={updateState}
          />
        </div>
        <div>
          <button>
            Sign Up!
          </button>
        </div>
      </form>
        </div>
    )
}

export default SignUpPage;