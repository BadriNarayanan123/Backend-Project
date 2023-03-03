import React from 'react'
import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Incomeexpense = () => {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map((trans)=> trans.amount)
  const incomeRes = amount.filter(item=>item>0).reduce((acc,val)=>acc+=val,0);
  const expenseRes = amount.filter(item=>item<0).reduce((acc,val)=>acc+=val,0);
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">+${incomeRes} </p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className="money minus">-${expenseRes}</p>
    </div>
  </div>
  )
}

export default Incomeexpense