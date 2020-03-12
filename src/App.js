import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';
import Header from './Header';
import Dropdown from './Dropdown';
import WeatherInfo from './WeatherInfo';
import Spinner from './Spinner';
import { getCurrent, getForecast, getWeatherData } from './apiCalls';

const cityIdArray = [658225, 655195, 650225, 634964];

export default function App() {
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   const [city, setCity] = useState('Kaikki');
   const [date, setDate] = useState(null);
   const [time, setTime] = useState(null);
   const [currentWeather, setCurrentWeather] = useState([]);
   const [forecastWeather, setForecastWeather] = useState([]);

    useEffect(() => {
      setDate(moment().format('MMMM Do'));
      setTime(moment().format('HH:mm'));

      /*
      getCurrentWeather(city, 'weather').then(result => {
         if (result.status === 'Success') {
            setCurrentWeather(currentWeather => result.data.list);
         }
         else if (result.status === 'Failure') {
            console.log(result);
            setError(error => result.data);
         }
      });
      */

      /*
      function getData() {
         cityIdArray.forEach((city) => {
            console.log(city);
            getWeatherData(city,'weather').then(result => {
               if (result.status === 'Success') {
                  setCurrentWeather(currentWeather => [...currentWeather, result.data]);
               }
               else if (result.status === 'Failure') {
                  setError(error => result.data);
               }
            })
            getWeatherData(city,'forecast').then(result => {
               if (result.status === 'Success') {
                  setForecastWeather(forecastWeather => [...forecastWeather, result.data]);
               }
               else if (result.status === 'Failure') {
                  setError(error => result.data);
               }
            })
         })
         setIsLoading(false);
      };
      getData();
      */
      
      getCurrent('helsinki').then(result => {
         setCurrentWeather(currentWeather => [...currentWeather, result]);
      });

      getCurrent('jyvaskyla').then(result => {
         setCurrentWeather(currentWeather => [...currentWeather, result]);
      });

      getCurrent('kuopio').then(result => {
         setCurrentWeather(currentWeather => [...currentWeather, result]);
      });

      getCurrent('tampere').then(result => {
         setCurrentWeather(currentWeather => [...currentWeather, result]);
      });
      
      getForecast('helsinki').then(result => {
         setForecastWeather(forecastWeather => [...forecastWeather, result]);
      });

      getForecast('jyvaskyla').then(result => {
         setForecastWeather(forecastWeather => [...forecastWeather, result]);
      });

      getForecast('kuopio').then(result => {
         setForecastWeather(forecastWeather => [...forecastWeather, result]);
      });

      getForecast('tampere').then(result => {
         setForecastWeather(forecastWeather => [...forecastWeather, result]);
         setIsLoading(false);
      });
   }, []);

   if (error) {
      return(
         <div className='card'>
            <div className='card-body text-center'>
               { error.message }
            </div>
         </div>
      );
   }

   return (
      <React.Fragment>
         <Header />
         <div className='app-container'>
            <Dropdown chosenCity={city} onCityChange={setCity} />
            {isLoading? <Spinner /> : <WeatherInfo chosenCity={city} date={date} time={time} current={currentWeather} forecast={forecastWeather} />}
         </div>
      </React.Fragment>
   );
}