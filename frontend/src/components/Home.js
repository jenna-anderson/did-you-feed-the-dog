import React, { useEffect } from 'react'
import axios from 'axios'
import DogCard from './DogCard'


const Home = () => {
    useEffect(() => {
        axios.get('https://did-you-feed-the-dog.herokuapp.com/api')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    })
    return(
        <div>
            <h1>Did you feed the dog?</h1>
            <DogCard/>
        </div>
    )
}

export default Home