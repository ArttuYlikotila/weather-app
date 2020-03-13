export function getCurrent(city) {
   return new Promise((resolve, reject) => {
    if (city === 'tampere') {
        resolve(cTampere);
     }
     else if (city === 'jyvaskyla') {
        resolve(cJyvaskyla);
     }
     else  if (city === 'kuopio') {
        resolve(cKuopio);
     }
     else if (city === 'helsinki') {
        resolve(cHelsinki);
     }
   })
}

export function getForecast(city) {
   return new Promise((resolve, reject) => {

      if (city === 'tampere') {
         resolve(tampere);
      }
      else if (city === 'jyvaskyla') {
         resolve(jyvaskyla);
      }
      else  if (city === 'kuopio') {
         resolve(kuopio);
      }
      else if (city === 'helsinki') {
         resolve(helsinki);
      }
   })
}

// 658225
const cHelsinki = {
    "coord": {
        "lon": 24.94,
        "lat": 60.17
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 5.92,
        "feels_like": -0.82,
        "temp_min": 5.56,
        "temp_max": 6.67,
        "pressure": 980,
        "humidity": 75
    },
    "visibility": 10000,
    "wind": {
        "speed": 7.2,
        "deg": 200
    },
    "clouds": {
        "all": 40
    },
    "dt": 1584020869,
    "sys": {
        "type": 1,
        "id": 1332,
        "country": "FI",
        "sunrise": 1583988326,
        "sunset": 1584029675
    },
    "timezone": 7200,
    "id": 658225,
    "name": "Helsinki",
    "cod": 200
}

// 655195
const cJyvaskyla = {
    "coord": {
        "lon": 25.61,
        "lat": 62.21
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 2.21,
        "feels_like": -1.41,
        "temp_min": 1.67,
        "temp_max": 3,
        "pressure": 977,
        "humidity": 93
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.6,
        "deg": 180
    },
    "clouds": {
        "all": 75
    },
    "dt": 1584021102,
    "sys": {
        "type": 1,
        "id": 1337,
        "country": "FI",
        "sunrise": 1583988255,
        "sunset": 1584029423
    },
    "timezone": 7200,
    "id": 655195,
    "name": "Jyvaskyla",
    "cod": 200
}

// 650225
const cKuopio = {
    "coord": {
        "lon": 27.69,
        "lat": 62.88
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 2,
        "feels_like": -2.01,
        "temp_min": 2,
        "temp_max": 2,
        "pressure": 977,
        "humidity": 93
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.1,
        "deg": 230
    },
    "clouds": {
        "all": 90
    },
    "dt": 1584021147,
    "sys": {
        "type": 1,
        "id": 1345,
        "country": "FI",
        "sunrise": 1583987789,
        "sunset": 1584028891
    },
    "timezone": 7200,
    "id": 650225,
    "name": "Kuopio",
    "cod": 200
}

// 634964
const cTampere = {
    "coord": {
        "lon": 23.87,
        "lat": 61.61
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 3.72,
        "feels_like": -1.75,
        "temp_min": 2.22,
        "temp_max": 4.44,
        "pressure": 977,
        "humidity": 80
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.1,
        "deg": 230
    },
    "clouds": {
        "all": 75
    },
    "dt": 1584020965,
    "sys": {
        "type": 1,
        "id": 1360,
        "country": "FI",
        "sunrise": 1583988644,
        "sunset": 1584029869
    },
    "timezone": 7200,
    "id": 634964,
    "name": "Tampere",
    "cod": 200
}

// 634964
const tampere = {
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [
        {
            "dt": 1584025200,
            "main": {
                "temp": 2.64,
                "feels_like": -0.91,
                "temp_min": 2.64,
                "temp_max": 3.54,
                "pressure": 977,
                "sea_level": 977,
                "grnd_level": 962,
                "humidity": 81,
                "temp_kf": -0.9
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 2.17,
                "deg": 218
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-03-12 15:00:00"
        },
        {
            "dt": 1584036000,
            "main": {
                "temp": 0.33,
                "feels_like": -2.28,
                "temp_min": 0.33,
                "temp_max": 1,
                "pressure": 975,
                "sea_level": 975,
                "grnd_level": 961,
                "humidity": 91,
                "temp_kf": -0.67
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 0.69,
                "deg": 157
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 18:00:00"
        },
        {
            "dt": 1584046800,
            "main": {
                "temp": 0.32,
                "feels_like": -3.1,
                "temp_min": 0.32,
                "temp_max": 0.77,
                "pressure": 975,
                "sea_level": 975,
                "grnd_level": 961,
                "humidity": 93,
                "temp_kf": -0.45
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.91,
                "deg": 289
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 21:00:00"
        },
        {
            "dt": 1584057600,
            "main": {
                "temp": -1.44,
                "feels_like": -5.86,
                "temp_min": -1.44,
                "temp_max": -1.22,
                "pressure": 977,
                "sea_level": 977,
                "grnd_level": 963,
                "humidity": 92,
                "temp_kf": -0.22
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.98,
                "deg": 267
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 00:00:00"
        },
        {
            "dt": 1584068400,
            "main": {
                "temp": -0.14,
                "feels_like": -5.28,
                "temp_min": -0.14,
                "temp_max": -0.14,
                "pressure": 979,
                "sea_level": 979,
                "grnd_level": 964,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 4.22,
                "deg": 291
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 03:00:00"
        }
    ],
    "city": {
        "id": 634964,
        "name": "Tampere",
        "coord": {
            "lat": 61.6074,
            "lon": 23.8702
        },
        "country": "FI",
        "timezone": 7200,
        "sunrise": 1583988644,
        "sunset": 1584029870
    }
}

// 655195
const jyvaskyla = {
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [
        {
            "dt": 1584025200,
            "main": {
                "temp": 3.79,
                "feels_like": 0.27,
                "temp_min": 3.09,
                "temp_max": 3.79,
                "pressure": 977,
                "sea_level": 977,
                "grnd_level": 960,
                "humidity": 85,
                "temp_kf": 0.7
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.52,
                "deg": 210
            },
            "rain": {
                "3h": 0.13
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-03-12 15:00:00"
        },
        {
            "dt": 1584036000,
            "main": {
                "temp": 0.82,
                "feels_like": -2.27,
                "temp_min": 0.3,
                "temp_max": 0.82,
                "pressure": 975,
                "sea_level": 975,
                "grnd_level": 959,
                "humidity": 91,
                "temp_kf": 0.52
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 1.48,
                "deg": 191
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 18:00:00"
        },
        {
            "dt": 1584046800,
            "main": {
                "temp": 0.62,
                "feels_like": -1.9,
                "temp_min": 0.27,
                "temp_max": 0.62,
                "pressure": 975,
                "sea_level": 975,
                "grnd_level": 958,
                "humidity": 92,
                "temp_kf": 0.35
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.66,
                "deg": 262
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 21:00:00"
        },
        {
            "dt": 1584057600,
            "main": {
                "temp": -0.51,
                "feels_like": -4.3,
                "temp_min": -0.68,
                "temp_max": -0.51,
                "pressure": 976,
                "sea_level": 976,
                "grnd_level": 959,
                "humidity": 94,
                "temp_kf": 0.17
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.3,
                "deg": 280
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 00:00:00"
        },
        {
            "dt": 1584068400,
            "main": {
                "temp": -1.5,
                "feels_like": -6.24,
                "temp_min": -1.5,
                "temp_max": -1.5,
                "pressure": 977,
                "sea_level": 977,
                "grnd_level": 960,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 3.51,
                "deg": 273
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 03:00:00"
        }
    ],
    "city": {
        "id": 655195,
        "name": "Jyvaskyla",
        "coord": {
            "lat": 62.2081,
            "lon": 25.6074
        },
        "country": "FI",
        "timezone": 7200,
        "sunrise": 1583988256,
        "sunset": 1584029424
    }
}

// 650225
const kuopio = {
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [
        {
            "dt": 1584025200,
            "main": {
                "temp": 1.98,
                "feels_like": -1.24,
                "temp_min": 1.45,
                "temp_max": 1.98,
                "pressure": 977,
                "sea_level": 977,
                "grnd_level": 964,
                "humidity": 91,
                "temp_kf": 0.53
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.9,
                "deg": 188
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-03-12 15:00:00"
        },
        {
            "dt": 1584036000,
            "main": {
                "temp": 1.4,
                "feels_like": -2.39,
                "temp_min": 1,
                "temp_max": 1.4,
                "pressure": 976,
                "sea_level": 976,
                "grnd_level": 963,
                "humidity": 97,
                "temp_kf": 0.4
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.79,
                "deg": 202
            },
            "snow": {
                "3h": 0.13
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 18:00:00"
        },
        {
            "dt": 1584046800,
            "main": {
                "temp": -0.87,
                "feels_like": -3.93,
                "temp_min": -1.13,
                "temp_max": -0.87,
                "pressure": 974,
                "sea_level": 974,
                "grnd_level": 962,
                "humidity": 96,
                "temp_kf": 0.26
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 1.25,
                "deg": 184
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 21:00:00"
        },
        {
            "dt": 1584057600,
            "main": {
                "temp": -1.01,
                "feels_like": -4.36,
                "temp_min": -1.14,
                "temp_max": -1.01,
                "pressure": 975,
                "sea_level": 975,
                "grnd_level": 962,
                "humidity": 94,
                "temp_kf": 0.13
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.59,
                "deg": 258
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 00:00:00"
        },
        {
            "dt": 1584068400,
            "main": {
                "temp": -2.29,
                "feels_like": -6.38,
                "temp_min": -2.29,
                "temp_max": -2.29,
                "pressure": 975,
                "sea_level": 975,
                "grnd_level": 962,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 2.44,
                "deg": 272
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 03:00:00"
        }
    ],
    "city": {
        "id": 650225,
        "name": "Kuopio",
        "coord": {
            "lat": 62.8818,
            "lon": 27.6894
        },
        "country": "FI",
        "timezone": 7200,
        "sunrise": 1583987790,
        "sunset": 1584028891
    }
}

// 658225
const helsinki = {
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [
        {
            "dt": 1584025200,
            "main": {
                "temp": 5.71,
                "feels_like": 2.35,
                "temp_min": 3.54,
                "temp_max": 5.71,
                "pressure": 978,
                "sea_level": 978,
                "grnd_level": 978,
                "humidity": 88,
                "temp_kf": 2.17
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 87
            },
            "wind": {
                "speed": 2.88,
                "deg": 190
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-03-12 15:00:00"
        },
        {
            "dt": 1584036000,
            "main": {
                "temp": 4.73,
                "feels_like": -0.85,
                "temp_min": 3.1,
                "temp_max": 4.73,
                "pressure": 974,
                "sea_level": 974,
                "grnd_level": 973,
                "humidity": 96,
                "temp_kf": 1.63
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 6.13,
                "deg": 138
            },
            "rain": {
                "3h": 1.63
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 18:00:00"
        },
        {
            "dt": 1584046800,
            "main": {
                "temp": 3.85,
                "feels_like": 0.8,
                "temp_min": 2.77,
                "temp_max": 3.85,
                "pressure": 973,
                "sea_level": 973,
                "grnd_level": 972,
                "humidity": 96,
                "temp_kf": 1.08
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.28,
                "deg": 315
            },
            "rain": {
                "3h": 0.88
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-12 21:00:00"
        },
        {
            "dt": 1584057600,
            "main": {
                "temp": 3.66,
                "feels_like": -2.71,
                "temp_min": 3.12,
                "temp_max": 3.66,
                "pressure": 978,
                "sea_level": 978,
                "grnd_level": 978,
                "humidity": 81,
                "temp_kf": 0.54
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.41,
                "deg": 325
            },
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 00:00:00"
        },
        {
            "dt": 1584068400,
            "main": {
                "temp": 2.28,
                "feels_like": -5.85,
                "temp_min": 2.28,
                "temp_max": 2.28,
                "pressure": 981,
                "sea_level": 981,
                "grnd_level": 981,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.65,
                "deg": 272
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-03-13 03:00:00"
        }
    ],
    "city": {
        "id": 658225,
        "name": "Helsinki",
        "coord": {
            "lat": 60.1695,
            "lon": 24.9355
        },
        "country": "FI",
        "timezone": 7200,
        "sunrise": 1583988327,
        "sunset": 1584029676
    }
}