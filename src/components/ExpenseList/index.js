import React from "react";
import ExpenseItem from "../ExpenseItem";

const ExpenseList = (props) => {
    if(props.items.length === 0) {
        return <h2>Found No Expense</h2>
    }
    return(
        <ul className="ExpensesList">
            {props.items.map(item => {
                return(
                    <ExpenseItem title={item.title} ammount={item.price} date={item.date} />
                )
            })}
        </ul>
    )
}

export default ExpenseList;