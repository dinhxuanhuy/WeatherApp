/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n//import './styles.css';\nlet button = document.querySelector('.search-button');\nlet Weatherpanel = document.querySelector('.weather-info');\nbutton.addEventListener('click', async () => {\n    console.log('Button clicked, fetching weather data...');\n    const weatherData = await (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)();\n    if (weatherData) { \n        const weatherInfo = (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.extractWeatherInfo)(weatherData);\n        document.querySelector('.city-name').textContent = weatherInfo.city;\n        document.querySelector('.humidity').textContent = `Humidity: ${weatherInfo.humidity}%`;\n        document.querySelector('.wind-speed').textContent = `Wind Speed: ${weatherInfo.windspeed} mph`;\n        document.querySelector('.weather-icon').src = weatherInfo.iconUrl;\n        document.querySelector('.temperature').textContent = `Temperature: ${weatherInfo.temperature}°C`;\n        document.querySelector('.description').textContent = `Description: ${weatherInfo.description}`;\n        document.querySelector('.date').textContent = `Time: ${weatherInfo.date}`;\n        (0,_script_js__WEBPACK_IMPORTED_MODULE_0__.ChangeImg)(weatherInfo.icon + ' ' + weatherInfo.condition);\n        Weatherpanel.classList.remove('hidden');\n        console.log('Weather data retrieved successfully:', weatherInfo);\n    } else {\n        console.error('Failed to retrieve weather data.');\n    }\n});\n\n//# sourceURL=webpack://weatherapp/./src/index.js?\n}");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChangeImg: () => (/* binding */ ChangeImg),\n/* harmony export */   extractWeatherInfo: () => (/* binding */ extractWeatherInfo),\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getWeatherData() {\n    const city = document.querySelector('.input-field').value;\n    const apikey = \"E57DNCL98ARVHDRWSD39U6CAS\";\n    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=us&key=' + apikey + '&contentType=json';\n    console.log(url);\n    try {\n        const response = await fetch(url);\n        const data = await response.json();\n        console.log(data);\n        return data;\n    } catch (error) {\n        console.error('Error fetching weather data:', error);\n    }\n}\n\nfunction extractWeatherInfo(data) {\n    function DegreeTransform(degree) {\n        let res = (degree - 32) / 1.8; \n        return Math.round(res * 10) / 10; // Round to one decimal place\n    }\n    const weatherInfo = {\n        city: data.resolvedAddress,\n        temperature: DegreeTransform(data.currentConditions.temp), // Convert Fahrenheit to Celsius\n        description: data.description,\n        date: data.currentConditions.datetime,\n        windspeed: data.currentConditions.windspeed,\n        humidity: data.currentConditions.humidity,\n        icon : data.currentConditions.icon,\n        condition : data.currentConditions.conditions,\n    };\n    \n    return weatherInfo;\n}\nfunction ChangeImg(WeatehrDescription){\n    let API_KEY = \"iUYQqniye6QkpJGUTraeyxYxUymr1Bnx\"; // Ensure you have set this environment variable\n    // 'https://api.giphy.com/v1/gifs/translate?api_key=iUYQqniye6QkpJGUTraeyxYxUymr1Bnx&s=books'\\\n    let img = document.querySelector('.weather-icon');\n    const url = 'https://api.giphy.com/v1/gifs/translate?api_key=' + API_KEY + '&s=' + WeatehrDescription;\n    async function fetchGif() {\n        try {\n            const response = await fetch(url);\n            const data = await response.json();\n            return data.data.images.original.url;\n        } catch (error) {\n            console.error('Error fetching GIF:', error);\n        }\n    }\n    fetchGif().then(gifUrl => {\n        img.src = gifUrl;\n    });\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/script.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;