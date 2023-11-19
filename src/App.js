import React from "react"
import Expenses from "./components/Expenses";
// import Product from "./components/productes";
// import Card from "./components/Card";
// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpanse";
import { useState } from "react";
// import "./styles.css"
function App() {
    const Expensesarr = [
    {id: 1, title: "Car Insurence", price: 231.49, date: new Date(2023, 7, 23)},
    {id: 2, title: "Desktop", price: 455.12, date: new Date(2021, 8, 12)},
    {id: 3, title: "Bike", price: 543.90, date: new Date(2024, 9, 15)},
    {id: 4, title: "Car", price: 2000.23, date: new Date(2023, 10, 7)},
  ];
  const [expenseData, setExpenseData] = useState(Expensesarr)


  const addExpenseHandler = (expense) => {
    console.log('expense in app js', expense) 
    setExpenseData((prev) => {
      return [expense, ...prev]
    })
    }

    

    
  return (
      // <div className="App">
      //   <ExpenseItem title={Expenses[0].title} ammount={Expenses[0].price} date={Expenses[0].date} />
      //   <ExpenseItem title={Expenses[1].title} ammount={Expenses[1].price} date={Expenses[1].date} />
      //   <ExpenseItem title={Expenses[2].title} ammount={Expenses[2].price} date={Expenses[2].date} />
      //   <ExpenseItem title={Expenses[3].title} ammount={Expenses[3].price} date={Expenses[3].date} />
        // <Expenses items={Expensesarr}/>
      // {/* </div> */}

       <div className="App"> 
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenseData}/>
      </div>
);

}


// function App()  {
//    return (
//        <div>
//       <h1>My Demo Shop </h1>
//       <Product title={'product 1'} price={'10'} description={'First Product'} />
//       <Product title={'product 2'} price={'30'} description={'Second Product'} />
//     </div>
//   )
// }


// 2nd code hai ye todos 
//       <div>
//         <h1>Todos</h1>
//          <Card>
//           <p>Please note: Below are just the most important todos - feel free to add more.</p>
//         </Card>
//         <ul>
//           <li className="todo">
//             <Card>
//               <h2>Learn React</h2>
//               <p>Learn React fundamentals & explore core concepts</p>
//             </Card>
//           </li>
//           <li className="todo">
//             <Card>
//             <h2>Practice React</h2>
//             <p>Apply your knowledge & build demo projects</p>
//             </Card>
//           </li>
//           <li className="todo">
//             <Card>
//               <h2>Recat Neative</h2>
//               <p>React is a javascript library  for building user intreface</p>
//             </Card>
//           </li>
//           <li className="todo">
//             <Card>
//               <h2>Recat language</h2>
//               <p>It provide Smooth transtion in your Website One of the main benefits of using React JS is its potential to reuse components</p>
//             </Card>
//           </li>
//         </ul>
//       </div>
//    )
//  }
export default App ;
