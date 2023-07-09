import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetter from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'D', 'e', 'n', 'n', 'i', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={'${letterClass} _12'}>i</span>
            <br />
            <span className={'${letterClass} _13'}>I</span>
            <span className={'${letterClass} _14'}>'m</span>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>BackEnd Developer / Java </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home