import React from "react";
import "./styles.css"
const ExpenseDate = (props) => {
    const Month = props.date.toLocaleString("en-US" , {month: "long"})
    const day = props.date.toLocaleString("en-US" , {day: "2-digit"})
    const year = props.date.getFullYear()
    return (
        <div className="Expense-Month">
            <div>{Month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}
export default ExpenseDate;