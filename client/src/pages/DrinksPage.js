import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import axios from 'axios'

function DrinksPage(){

    const { user } = useContext(AuthContext);

    const [drinks, setDrinks] = useState([])

    useEffect(()=>{
        const storedToken = localStorage.getItem('authToken');

        axios.get('http://localhost:3001/api/drinks',
        {
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        } )
        .then(res => setDrinks(res.data.drinks))
        .catch(err => console.log(err))
    },[])


    return(
        <div>
            <h1>My Fun Drinks </h1>
            {drinks.map((drink)=>{

            const postDate = new Date(drink.date);
            const day = postDate.getDate();
            const month = postDate.getMonth();
            const year = postDate.getFullYear();
            const hour = postDate.getHours();
            const minute = postDate.getMinutes();

            return(
                <div class='drink'>
                        
                        <h4>Fun Drink: {drink.name}</h4>
                        <h6>{month}/{day}/{year} {hour}:{minute}</h6>
                        <p>{drink.description}</p>
                </div>
            )
            })}

        </div>
    )
}

export default DrinksPage;