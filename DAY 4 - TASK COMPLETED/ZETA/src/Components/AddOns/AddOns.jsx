import React from 'react';
import './AddOns.css';
import PlanCards from '../PlanCards/PlanCards';
import { useSelector } from 'react-redux';

export default function AddOns() {
  const addOnsData = useSelector(state => state.addons.addons);

  return (
    <div className='AddOns-Card'>
      {addOnsData.map((addOn, index) => (
        <PlanCards key={index} {...addOn} />
      ))}
    </div>
  );
}
