import React, { useState } from 'react'
import './ExpenseForm.css'




const ExpenseForm = (props) => {

    const [enteredTitle , setEntered] = useState('')
    const [enteredAmount , setEnteredAmount] = useState('')
    const [enteredDate , setEnteredDate] = useState('')

    const inputTitleHandler = (event) =>{
        // console.log(event.target.value)
        setEntered(event.target.value)
    }
    const amountChangeHandler = (event) =>{
        // console.log(event.target.value)
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        // console.log(event.target.value)
        setEnteredDate(event.target.value)
    }

    const  submitHandler = (e)=>{
        e.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
        props.onSaveExpenseData(expenseData)
        setEntered('')
        setEnteredAmount('')
        setEnteredDate('')
    }





    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__controls'>
                        <label htmlFor="">Title</label>
                        <input type="text" value={enteredTitle} onChange={inputTitleHandler}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label htmlFor="">Amount</label>
                        <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label htmlFor="">Date</label>
                        <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel} >Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
