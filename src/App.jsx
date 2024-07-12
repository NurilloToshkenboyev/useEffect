import { Fragment, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Section } from './components/section'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] h-auto'>
    <Header/>
    <Hero/>
    <Section/>


    </div> 
    
  )
}

export default App
