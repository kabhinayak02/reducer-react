import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../State/index';

const Shop = () => {

  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector(state => state.amount);
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <div className="btn btn-primary mx-2 mt-2" onClick={()=>{withdrawMoney(100)}}>-</div>
            Update Balance: {amount}
        <div className="btn btn-primary mx-2 mt-2" onClick={()=>{depositMoney(100)}}>+</div>
    </div>
  )
}

export default Shop