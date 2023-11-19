import React, { useState } from "react";
import './styles.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();

    // Alternate way to create only single state

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const onTitleChange = (event) => {
        console.log("title changed" , event.target.value);
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    }

    const onAmountChange = (event) => {
        console.log("title Change", event.target.value )
        setEnteredAmount(event.target.value);

        // setUserInput ({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const onDateChange = (event) => {
        console.log("title change", event.target.value)
        setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault() 
        console.log('enteredTitle', enteredTitle)
        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log("hello",expenseData);
        props.onSaveExpenseData(expenseData);

        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")


    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={onTitleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={onAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min={"2023-02-01"} max={"2024-02-31"} onChange={onDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;