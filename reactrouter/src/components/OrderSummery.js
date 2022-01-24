import React from 'react';
import {useNavigate} from 'react-router-dom';


export const OrderSummery = () => {
    const navigate=useNavigate()
  return <>
  <div>
      Order confirmed !
      <button onClick={()=>navigate('/')}>Back</button>
  </div>
  </>;
};
