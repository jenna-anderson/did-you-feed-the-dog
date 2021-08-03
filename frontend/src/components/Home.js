import React, { useEffect } from 'react'
import axios from 'axios'
import DogCard from './DogCard'
import Login from './Login'
import Register from './Register'

const Home = () => {
    useEffect(() => {
        axios.get('https://did-you-feed-the-dog.herokuapp.com/api')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
    return(
        <div>
            <DogCard/>
            <Login/>
            <Register/>
        </div>
    )
}

export default Home