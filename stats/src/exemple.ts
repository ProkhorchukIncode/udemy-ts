// class HoldAnything<TypeOfData> {
//   data: TypeOfData;
// }

// const holdNumber = new HoldAnything<number>();
// holdNumber.data = 111;

// const holdString = new HoldAnything<string>();
// holdString.data = 'ommomom';

// const rectangular = (state) => {
//   return {
//     area: () => {
//       return state.height * state.width;
//     },
//   };
// };

// const openable = (state) => {
//   return {
//     toggleOpen: () => {
//       state.open = !state.open;
//     },
//   };
// };

// const buildRectangleWindow = (state) => {
//   return Object.assign(state, rectangular(state), openable(state));
// };

// const rectangleWindow = buildRectangleWindow({
//   height: 30,
//   width: 20,
//   open: false
// })
