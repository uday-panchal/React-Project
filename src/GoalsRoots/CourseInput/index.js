import React, { useState } from 'react'

const CourseInput= () => {
    const [enteredGoal, setEnteredGoal] = useState("")
    const onInputChange = () => {
        console.log("Input",onInputChange)
    }
    return(
        <form>
            <div className='form-control'>
                <label>Course Goals</label>
                <input onChange={onInputChange} ></input>
            </div>
            </form>
    )
}

export default CourseInput