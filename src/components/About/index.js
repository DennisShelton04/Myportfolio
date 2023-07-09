import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Studies : Completed Mca in Dr.Mahalingam College of Engineering and
            Technology
          </p>
          <p align="LEFT">
            Experience : Full Stack intern - Full creative. Currently working on
            full creative.
          </p>
          <p>Projects: Library Management System</p>
          <p>Details:</p>
          <p>FrontEnd:jsp</p>
          <p>BackEnd:Spring Boot</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default About
