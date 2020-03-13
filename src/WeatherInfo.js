import React from 'react';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

export default function WeatherInfo(props) {
   // Comparing function for the sorting algorithm
   function sortByName(a, b) {
      if (a.name < b.name) {
         return -1;
      }
      if (a.name > b.name) {
         return 1;
      }
      return 0;
   };

   // Sort and map the weather data and return components with correct data based on the city choice of the user
   const cities = [...props.current].sort(sortByName).map((city) => {
      if (props.chosenCity === city.name || props.chosenCity === 'Kaikki') {
         return (
            <React.Fragment key={city.name}>
               <CurrentWeather date={props.date} time={props.time} current={city} />
               <ForecastWeather id={city.id} forecast={props.forecast} />
            </React.Fragment>
         );
      }
      else {
         return null;
      }
   })

   return (
      <div className='mt-4'>
         { cities }
      </div>
   );
}