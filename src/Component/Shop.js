import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import {actionCreators} from '../State/index';

const Shop = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <div className="btn btn-primary mx-2 mt-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</div>
            Update Balance
        <div className="btn btn-primary mx-2 mt-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</div>
    </div>
  )
}

export default Shop