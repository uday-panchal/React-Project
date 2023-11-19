import React from 'react'
import "./styles.css"
import CourseGoalsItem from '../CourseGoalsItem';

const CourseGoalList = props => {

    return(
        <ul className="goal-list">
            {props.items.map(goal => (
               <CourseGoalsItem
               key={goal.ig}
               id={goal.id}
               onDelete={props.onDeleteItem} >
                {goal.text}
                </CourseGoalsItem>
            ))}
        </ul>
    )
}
export default CourseGoalList;