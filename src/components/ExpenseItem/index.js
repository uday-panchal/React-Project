import React from "react"
import "./styles.css"
import Card from "../Card";
import ExpenseDate from "../Expense.Date";
const ExpenseItem = (props) => {
    console.log("itemsss",props);
    
    return (
        // <div className="Expense-item">
        //     <div className="">{props.date.toISOString()}</div>
        //     <div className="Expense-description">
        //         <h2>{props.title}</h2>
        //         <div className="Expense-price">${props.ammount}</div>
        //     </div>
        // </div>

        // <Card className="Expense-item">
        //     {/* <div className="">{props?.expenses?.date.toISOString()}</div> */}
        //     {/* <ExpenseDate date={props?}/> */}
        //     <div className="Expense-description">
        //     <h2>{props?.expenses?.title}</h2>
        //         <div className="Expense-price">${props?.expenses?.price}</div>
        //     </div>
        // </Card>
        

        <Card className="Expense-item">
        <ExpenseDate date={props?.date}/>
        <div className="Expense-description">
        <h2>{props?.title}</h2>
            <div className="Expense-price">${props?.ammount}</div>
        </div>
    </Card>
    
       
    )
}
export default ExpenseItem;




