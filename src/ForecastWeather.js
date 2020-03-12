import React from 'react';
import './ForecastWeather.css';
import './text.css';

export default function ForecastWeather(props) {
   const cards = props.forecast.map((city) => {
      if (props.id === city.city.id) {
         const hourForecast = city.list.map((hour) => {
            return (
               <div className='card text-center' key={hour.dt_txt}>
                  <div className='card-body pl-0 pr-0'>
                     <p className='mb-0 small light'>{ hour.dt_txt.slice(11,16) }</p>
                     <img src={ `https://openweathermap.org/img/wn/${ hour.weather[0].icon }@2x.png` } alt='icon' />
                     <p className='mb-0 mt-0 medium dark'>{ hour.main.temp } °C</p>
                  </div>
                  <div className='card-footer'>
                     <p className='mb-0 x-small light'>{ hour.wind.speed } m/s</p>
                     <p className='mb-0 x-small light'>{ hour.main.humidity } %</p>
                     <p className='mb-0 x-small light'>{ hour.snow ? hour.snow['3h'] : (hour.rain ? hour.rain['3h'] : 0 )} mm</p>
                  </div>
               </div>
            );
         })
         return hourForecast;
      }
      else {
         return null;
      }
   })
   
   return (
      <div className='flex-container mt-4 mb-5'>
         { cards }
      </div>
   )
}