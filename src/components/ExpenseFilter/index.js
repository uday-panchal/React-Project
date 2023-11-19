import React from "react";
import "./styles.css"

const ExpenseFilter = (props) => {
    const dropdownChsngeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return(
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChsngeHandler} >
                    <option value="2024">2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    )
    
}
export default ExpenseFilter;