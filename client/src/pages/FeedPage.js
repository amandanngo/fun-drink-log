import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import axios from 'axios'

function FeedPage(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const storedToken = localStorage.getItem('authToken');

        axios.get('http://localhost:3001/api/all-drinks', {
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        })
            .then(res =>{
                setPosts(res.data.drinks)
            })
            .catch(err => console.log(err))
    },[])

    return(
        <div>
            <h1>Feed</h1>
            {posts.map((post)=>{

                const postDate = new Date(post.date);
                const day = postDate.getDate();
                const month = postDate.getMonth();
                const year = postDate.getFullYear();
                const hour = postDate.getHours();
                const minute = postDate.getMinutes();

                return(
                    <div key={post._id} className='post'>
                        <div className='post-info'>
                            <h3>@{post.user.username}</h3>
                            <p>{month}/{day}/{year}</p>
                            <p>{hour}:{minute}</p>
                        </div>
                        <div className='post-content'>
                            <h4>Fun Drink: {post.name}</h4>
                            <p>{post.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FeedPage;