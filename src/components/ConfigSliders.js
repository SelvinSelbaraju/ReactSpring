import React from 'react'

function ConfigSliders({defaultValue}) {
    return (
        <div>
        <label for="mass">Mass</label>
          <input name="mass" type="range" min="1" max="500" defaultValue={defaultValue} />  
        </div>
    )
}

export default ConfigSliders
