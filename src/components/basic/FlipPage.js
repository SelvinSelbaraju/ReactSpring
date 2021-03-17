import React, { useState } from 'react'
import { useSpring, animated} from 'react-spring';
import './FlipPage.css';

function FlipPage() {
    const [flipped, setFlipped] = useState(false);
    const { opacity, transform } = useSpring({opacity: flipped ? 1 : 0, transform: `rotateX(${flipped? '180' : '0'}deg)`})
    return (
        <div className="example-container">
            <p>A simple flip page animation</p>
            <div className="flip-container">
            <animated.div onClick={()=> setFlipped(!flipped)} style={{opacity: opacity.interpolate(o => 1-o), transform}} className="flipper one">
                &nbsp;
            </animated.div>
            <animated.div onClick={()=> setFlipped(!flipped)} style={{opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}} className="flipper two">
                &nbsp;
            </animated.div>
            </div>
        </div>
    )
}

export default FlipPage
