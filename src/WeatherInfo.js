import React from 'react';
import './WeatherInfo.css';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

export default function WeatherInfo(props) {
   // Function that corrects the spelling in case the city-name is Jyvaskyla
   function correctSpelling(name) {
      if (name === 'Jyvaskyla') {
         name = name.replace(/a/g, 'ä');
      }
      return name;
   }

   //console.log('Current', props.current, 'Forecast', props.forecast)
   const cities = props.current.map((city) => {
      if (props.chosenCity === correctSpelling(city.name) || props.chosenCity === 'Kaikki') {
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