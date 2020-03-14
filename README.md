# Weather-app

This responsive Weather-app is made with Create React App.

This version shows current weather and forecasts of four Finnish cities.

## Installation

### Pre-requisites:

You need NPM installed on your computer and you need an API key for OpenWeatherMap API.

### Procedure:

1. Clone or download this repository

2. In the project directory, run:

`npm install`

3. Before starting the app, you need to insert your API key to the app.

You can do this by either:

- creating .env file in the project directory and create a line like this in the file:

`REACT_APP_API_KEY= *your_API_key*`

- or replacing `process.env.REACT_APP_API_KEY` with your API key on the line 11 in the file App.js.

> Note: neither of the above methods for the API key are safe for a production build. They both expose you API key to the user through the browser console.

4. In the project directory, run:

`npm start`

A local version of the app will start in http://localhost:3000
