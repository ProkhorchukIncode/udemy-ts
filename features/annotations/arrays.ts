const colors = ['red', 'blue', 'Hello, World'];
const dates = [new Date(), new Date()];
const fruitByColor = [
  ['tomato'],
  ['pulm'], 
  ['lemon']
]
const fruitByColor1: string [][] = []

const color = colors[0]
const color1 = colors.pop()

colors.map((color: string)=> {
  return color.toUpperCase();
})

const importantDates: (Date | string)[] = [new Date(), '2022-02-09']