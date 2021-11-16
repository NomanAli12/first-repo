// import React,{useState} from 'react'
import './ExpanseItem.css'
import ExpanseDate from './ExpanseDate'

const ExpanseItem = (props) => {
//    const [title,setTitle] = useState(props.title)
    // const eventHandler = () => {
    //     setTitle('kam update hogya')
    //     console.log('event clicked')
    // }



    return (
        <div className='main-container'>
            <div className='expense-item' >
                <ExpanseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                </div>
                <div className='expense-item__price'>${props.amount}</div>
                {/* <button onClick={eventHandler}>change title</button> */}
            </div>
        </div>
    )
}

export default ExpanseItem
