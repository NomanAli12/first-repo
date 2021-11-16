import React from 'react'
import './ExpenseFilter.css'



const ExpenseFilter = (props) => {

    const dropDownChangeHandler = (event)=>{
            props.filterChange(event.target.value)
    }



    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor="">filter by year</label>
                <select value={props.selected} onChange={dropDownChangeHandler} >
                    <option value="2022">2020</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter