const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

type TDrink = [string, boolean, number]

const cola: TDrink  = ['brown', true, 40]
const sprite: TDrink  = ['clear', true, 40]
const cofee: TDrink = ['black', false, 0]

const carSpecs: [number, number] = [400, 3354]

const carSpecsObj = {
  horsePower: 400,
  weight: 3354,
}