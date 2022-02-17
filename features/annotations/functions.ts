const add = (a: number, b: number): number => {
  return a + b;
}

const substract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a/b
}

const multiply = function(a: number, b: number): number {
  return a*b
}

const logger = (massage:string): void => {
  console.log(massage);
}

const throwError = (massage:string): never => {
  throw new Error
}

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

// const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
//   console.log(date);
//   console.log(weather);
// }

logWeather(todayWeather)