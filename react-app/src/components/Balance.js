import React from 'react'
import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map((trans)=> trans.amount)
  const result = amount.reduce((acc,val)=>acc+=val,0);
  return (
    <>
    <h4>Your Balance</h4>
    <h1 id="balance">${result}</h1>
    </>
  )
}

export default Balance