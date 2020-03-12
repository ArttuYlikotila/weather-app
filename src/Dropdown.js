import React from 'react';
import './text.css';

export default function Dropdown(props) {
   function handleCityChange(e) {
      props.onCityChange(e.target.value);
   }

   return (
      <div className='cities card mt-4'>
         <select value={props.chosenCity} onChange={handleCityChange} className='card-body dark small-text'>
            <option value='Kaikki'>Kaikki kaupungit</option>
            <option value='Helsinki'>Helsinki</option>
            <option value='Jyväskylä'>Jyväskylä</option>
            <option value='Kuopio'>Kuopio</option>
            <option value='Tampere'>Tampere</option>
         </select>
      </div>
   );
}