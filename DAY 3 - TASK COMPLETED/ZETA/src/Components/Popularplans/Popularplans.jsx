import React from 'react';
import './Popularplans.css';
import PlanCards from '../PlanCards/PlanCards';
import {useSelector} from 'react-redux'

export default function Popularplans() {
  const plans = useSelector(state => state.plans.plans);

  return (
    <div className='Popular-Card'>
      {plans.map((plan, index) => (
        <PlanCards key={index} {...plan} />
      ))}
    </div>
  );
}
