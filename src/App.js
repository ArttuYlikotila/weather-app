import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Dropdown from './Dropdown';
import WeatherInfo from './WeatherInfo';
import Spinner from './Spinner';
import { getCurrent, getForecast } from './apiCalls';

const cityIdArray = [658225, 655195, 650225, 634964];
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

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

      cityIdArray.forEach((city) => {
         const getData = async () => {
            try {
               const result = await axios.get(`${baseUrl}weather?id=${city}&units=metric&cnt=5&APPID=${apiKey}`);
               setCurrentWeather(currentWeather => [...currentWeather, result.data]);
            } catch (error) {
               setError(error);
            }
            try {
               const result = await axios.get(`${baseUrl}forecast?id=${city}&units=metric&cnt=5&APPID=${apiKey}`);
               setForecastWeather(forecastWeather => [...forecastWeather, result.data]);
            } catch (error) {
               setError(error);
            }
         };
         getData();
      })

      setIsLoading(false);

      /*
      getCurrent('tampere').then(result => {
         setCurrentWeather(currentWeather => [...currentWeather, result]);
      });

      getCurrent('kuopio').then(result => {
         setCurrentWeather(currentWeather => [...currentWeather, result]);
      });

      getCurrent('jyvaskyla').then(result => {
         setCurrentWeather(currentWeather => [...currentWeather, result]);
      });

      getCurrent('helsinki').then(result => {
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
      */
   }, []);

   // If there is an error, show error message on screen without rendering other components
   if (error) {
      return (
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
            {/* If data has not finished loading render Spinner, otherwise render WeatherInfo */}
            {isLoading? <Spinner /> : <WeatherInfo chosenCity={city} date={date} time={time} current={currentWeather} forecast={forecastWeather} />}
         </div>
      </React.Fragment>
   );
}