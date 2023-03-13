import { useEffect, useState } from 'react'
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
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
                        As a software engineer with a passion for technology,
                        math, and science, I am committed to staying on the
                        cutting edge of innovation. With my experience and
                        education in software engineering, I am confident that I
                        can make valuable contributions to any team. In addition
                        to my technical skills, I bring a unique perspective to
                        my work, thanks to my love for travel, reading, baking,
                        cooking, and cars. By staying curious, creative, and
                        driven, I am dedicated to achieving exceptional results
                        and building innovative solutions.
                    </p>
                    <p align="LEFT">
                        With my self-motivation, ambition, and natural
                        curiosity, I am a software engineer who is committed to
                        excellence. I just finished a web development bootcamp
                        at the University of Utah and am halfway through my
                        4-year program in CS: Software Engineering at Utah
                        Valley University. As a mother of two, I understand the
                        importance of dedication and hard work, and I am
                        committed to bringing my best to every project. I am
                        excited to collaborate with a team that shares my
                        passion for technology and innovation.
                    </p>
                    <p>
                        In addition to my professional skills, I am a
                        family-oriented individual who values my role as a
                        parent and partner. As a lover of the beach, meditation,
                        and staying active, I understand the importance of
                        balance and self-care in achieving success. By taking
                        care of myself and staying committed to my personal and
                        professional goals, I am confident that I can bring my
                        best to every project and create innovative solutions
                        that make a difference.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About
