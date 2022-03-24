import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/message/message.js';
const Greeting = () => {
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);
  return (
    <h2>{message}</h2>
  )
}

export default Greeting