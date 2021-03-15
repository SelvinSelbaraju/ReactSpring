import React, { useRef, useState } from 'react'
import { useSpring, animated} from 'react-spring';

function SimpleSpring() {
    const defaultValue = "5";
    const [run, setRun] = useState(false)
    const [mass, setMass] = useState(defaultValue)
    const [friction, setFriction] = useState(1)
    const [tension, setTension] = useState(defaultValue)
    const props = useSpring({config: {friction: friction, mass: mass, tension: tension}, transform: run ? "translate(0%, 100%)" : "translate(0%, 0%)"});
    return (
        <div className="container">
            <div className="row">
                <animated.div className="bounce-particle" style={run? props : props.from}>
                </animated.div>
                <p className="col">A simple bouncing particle</p>
                <button onClick={() => setRun(!run)} className="btn btn-primary col-2" type="button">{run ? 'Reset' : 'Start'}</button>
                <div className="config-params">
                    <label for="mass">Mass: {mass}</label>
                    <input onChange={(e) => setMass(`${e.target.value}`)} name="mass" type="range" min="1" max="500" defaultValue={defaultValue} />
                    <label for="friction">Friction: {friction}</label>
                    <input onChange={(e) => setFriction(`${e.target.value}`)} name="friction" type="range" min="1" max="10" defaultValue={1} />
                    <label for="tension">Tension: {tension}</label>
                    <input onChange={(e) => setTension(`${e.target.value}`)} name="tension" type="range" min="1" max="500" defaultValue={defaultValue} />  

                </div>
            </div>
        </div>
    )
}

export default SimpleSpring
