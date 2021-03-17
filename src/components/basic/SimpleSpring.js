import React, { useRef, useState } from 'react'
import { useSpring, animated} from 'react-spring';
import './SimpleSpring.css';

function SimpleSpring() {
    const defaultValues = {mass: 1, tension: 170, friction: 26}
    const [run, setRun] = useState(false)
    const [mass, setMass] = useState(defaultValues.mass)
    const [friction, setFriction] = useState(defaultValues.friction)
    const [tension, setTension] = useState(defaultValues.tension)
    const props = useSpring({reset: !run, config: {friction: friction, mass: mass, tension: tension}, transform: run ? 'translate(0%, 50%)' : 'translate(0%, 0%', from: {transform: 'translate(0%, 0%)'}});
    return (
        <div className="example-container">
                <p>A simple bouncing particle</p>
                <button onClick={() => setRun(!run)} className="btn btn-primary" type="button">{run ? 'Reset' : 'Start'}</button>
                <div className="config-params">
                    <label for="mass">Mass: {mass}</label>
                    <input onChange={(e) => setMass(`${e.target.value}`)} name="mass" type="range" min="1" max="500" defaultValue={mass} />
                    <label for="friction">Friction: {friction}</label>
                    <input onChange={(e) => setFriction(`${e.target.value}`)} name="friction" type="range" min="5" max="500" defaultValue={friction} />
                    <label for="tension">Tension: {tension}</label>
                    <input onChange={(e) => setTension(`${e.target.value}`)} name="tension" type="range" min="5" max="500" defaultValue={tension} />  
                </div>
            <animated.div className="bounce-particle" style={run ? props : props.from}>
            </animated.div>
        </div>
    )
}

export default SimpleSpring
