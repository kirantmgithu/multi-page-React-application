import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../assets/context'

import { useEffect } from 'react';
import Services from "./Services"
import Contact from "./Contact"

const Home = () => {

  const { updateHomePage } = useGlobalContext();


  useEffect(() => updateHomePage(), [])


  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>

  )
}

export default Home