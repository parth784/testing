import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
const [exercises,setExercises] = useState([])
const [bodyPart,setBodyPart] = useState('all')
console.log(bodyPart,'h')
  return (
    <Box>
    <HeroBanner/>
    <SearchExercise  setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home
