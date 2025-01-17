// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }
// 1 - Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const Science = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = Science;
console.log(Science);
// 2 - Destructure and assign the elements of countries array to fin, est, sw, den, nor
const Contries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
let [fin , est, sw, den, nor] = Contries
console.log(Contries);
// 3 - Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)