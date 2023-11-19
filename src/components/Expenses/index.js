import React, { useState } from "react"
import "./styles.css"
import Card from "../Card"
import ExpenseFilter from "../ExpenseFilter"
import ExpenseItem from "../ExpenseItem"
import ExpenseList from "../ExpenseList"
import ExpensesChart from "../ExpensesChart"

const Expenses = ({items}) => {
    console.log('ITEMS:',items)
    const [filteredYear, setFilteredYear] = useState('2023')
    const [filtereInfo, setFiltereInfo] = useState('2021, 2022 $ 2024');

    const filterChangeHandler = selectedYear => {
        console.log(selectedYear)
        setFilteredYear(selectedYear);

        if(selectedYear === '2021') {
            setFiltereInfo('2022, 2023 & 2024')
        } else if(selectedYear === '2022') {
            setFiltereInfo('2021,2023 & 2024')
        } else if(selectedYear === '2023') {
            setFiltereInfo('2021,2022 & 2024')
        } else if(selectedYear === '2024') {
            setFiltereInfo('2021,2022 & 2023')
        }
    }
   const filteredExpenses = items.filter(element => {
        return element.date.getFullYear().toString() === filteredYear
    })
    // let ExpensesContent = <p className="description">No Expense Found</p>

    // if(filteredExpenses.length > 0) {
    //     ExpensesContent = filteredExpenses.map(item => {
    //         return(
    //             <ExpenseItem title={item.title} ammount={item.price} date={item.date} />
    //         )
    //     }) 
    // }
     return (
        <div>
            <Card className='expenses'>

            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <p>Data of Year {filtereInfo} is hidden.</p>
            {/* multiple props way */}
        {/* <ExpenseItem title={items[0].title} ammount={items[0].price} date={items[0].date} />
        <ExpenseItem title={items[1].title} ammount={items[1].price} date={items[1].date} />
        <ExpenseItem title={items[2].title} ammount={items[2].price} date={items[2].date} />
        <ExpenseItem title={items[3].title} ammount={items[3].price} date={items[3].date} /> */}

        {/* single prop way */}

        {/* <ExpenseItem expenses={items[0]} />
        <ExpenseItem expenses={items[1]} />
        <ExpenseItem expenses={items[2]} />
        <ExpenseItem expenses={items[3]} /> */}

        {/* {ExpensesContent} */}

        <ExpensesChart Expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />

        
        </Card>
         </div>
    )
    }

export default Expenses;