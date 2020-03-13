import React from 'react';
import './text.css';

export default function Dropdown(props) {
   // Function that changes the city state of parent component
   function handleCityChange(e) {
      props.onCityChange(e.target.value);
   }

   return (
      <div className='card mt-4'>
         <select value={props.chosenCity} onChange={handleCityChange} className='card-body dark small-text'>
            <option value='Kaikki'>Kaikki kaupungit</option>
            <option value='Helsinki'>Helsinki</option>
            <option value='Jyvaskyla'>Jyväskylä</option>
            <option value='Kuopio'>Kuopio</option>
            <option value='Tampere'>Tampere</option>
         </select>
      </div>
   );
}