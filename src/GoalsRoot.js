import React, { useState } from 'react';
import './GoalsRoot.css';
import CourseGoalList from './GoalsRoots/courseGoalList';
const GoalsRoot = () => {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all Exercises', id: 'g1'},
        { text: 'Finish the course!', id: 'g2'}
        ]);
        const addGoalHandler = enteredText => {
            setCourseGoals(prevGoals => {
                const updateGoals = [...prevGoals];
                updateGoals.unshift({ text: enteredText, id: Math.random().toString()})
                return updateGoals;
            })
        }
        const deleteItemGoals = goalId => {
            setCourseGoals(prevGoals => {
                const updateGoals = prevGoals.filter(goal => goal.id !== goalId)
                return updateGoals
            })
        }
        let content = (
            <p style={{textAlign: 'center'}}>No goals found. Maybe add one?</p>
        )
        if(courseGoals.length>0) {
            content = (
                <CourseGoalList items={courseGoals} onDeleteItem={deleteItemGoals} />
            )
        }
    return(             
        <div>

            <section id='goal-form'>

            </section>
            <section id='goals'>
                {content}
                {/* {courseGoals.length > 0 && (
                <CourseGoalList
                items={courseGoals}
                onDeleteItem={deleteItemHandler}
            />
                ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
            } */}

            </section>
        </div>
    )
}

export default GoalsRoot