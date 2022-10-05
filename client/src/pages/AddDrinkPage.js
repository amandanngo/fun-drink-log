import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';



function AddDrinkPage(){

    const { user } = useContext(AuthContext);

    const navigate = useNavigate()

    const [state, setState] = useState({
      title: '',
      description: '',
      date: new Date(),
      userId: user._id
    });
  
    const updateState = event => setState({
      ...state,
      [event.target.name]: event.target.value
    });
  
    const handleSubmit = event => {
      event.preventDefault();
      const storedToken = localStorage.getItem('authToken');
      axios.post(`http://localhost:3001/api/drinks`, state, {
        headers: {
          authorization: `Bearer ${storedToken}`
        }
      })
        .then(res => {
          console.log(res.data);
          navigate('/drinks');
        })
        .catch(err => console.log(err))
    }


    return(
        <div>
            <h2>Post a new Drink</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>
                    Drink Name
                </label>
                <input
                    name="name"
                    value={state.name}
                    onChange={updateState}
                />
                </div>
                <div>
                <label>
                    Description
                </label>
                <input
                    name="description"
                    value={state.description}
                    onChange={updateState}
                />
                </div>
                <div>
                <button>
                    Post Fun Drink
                </button>
                </div>
            </form>
        </div>
    )
}

export default AddDrinkPage;