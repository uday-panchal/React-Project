import React from "react";

const CourseGoalsItem = props => {
    // const [deleteText, setDeleteText] = useState('');
    const deleteHandler = () => {
        props.onDelete(props.id);
    }    
    return(
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    )
}

export default CourseGoalsItem;