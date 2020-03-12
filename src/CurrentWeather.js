import React from 'react';
import './CurrentWeather.css';
import './text.css';

export default function CurrentWeather(props) {
   // Function that capitalizes the first letter of a string
   function capitalize(name) {
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
      return capitalizedName;
   }

   // Function that corrects the spelling in case the city-name is Jyvaskyla
   function correctSpelling(name) {
      if (name === 'Jyvaskyla') {
         name = name.replace(/a/g, 'ä');
      }
      return name;
   }

   return (
      <div className='card'>
         <div className='row row-cols-2'>
            <div className='col-6 pr-0 mt-1'>
                  <div className='card-body'>
                     <p className='card-title mb-0 large-text dark'>{ correctSpelling(props.current.name) }</p>
                     <p className='card-subtitle small-text light'>{ capitalize(props.current.weather[0].description) }</p>
                  </div>
            </div>
            <div className='col-6'>
               <div className='row card-body pl-0 pt-0'>
                  <div className='col p-0 img-container'>
                     <img src={`https://openweathermap.org/img/wn/${ props.current.weather[0].icon }@2x.png`} alt='icon' align='right' />
                  </div>
                  <div className='col pt-4 pl-0'>
                     <p className='mt-1 text-right x-large-text dark'>{ props.current.main.temp } °C</p>
                  </div>
               </div>
            </div>
            <div className='col-4'>
                  <div className='card-body'>
                     <p className='card-title mt-4 mb-0 medium-text dark'>{ props.date }</p>
                     <p className='card-subtitle small-text light'>{ props.time }</p>
                  </div>
            </div>
            <div className='col-8'>
                  <div className='card-body text-right'>
                     <p className='card-text mb-0 small-text light'>Wind: { props.current.wind.speed } m/s</p>
                     <p className='card-text mb-0 small-text light'>Humidity: { props.current.main.humidity } %</p>
                     <p className='card-text mb-0 small-text light'>Precipitation (3 h): { props.current.snow ? props.current.snow['3h'] : (props.current.rain ? props.current.rain['3h'] : 0 ) } mm</p>
                  </div>
            </div>
         </div>
      </div>
   );
}