// function add<T extends number>(num1: T, num2: T) {
//   return num1 + num2
// }
function add(...numbers: number[]) {
  if(numbers.length === 0) {
    throw new Error('No numbers specified')
  }
  let result = 0

  for(let i=0;i<numbers.length;i++){
    if(typeof numbers[i] !== 'number') return null
    if (Number.isNaN(numbers[i])) return null
    result += numbers[i]
  }

  // numbers.forEach(num => {
  //   result += num
  // })
    return result
  }

function mul<T extends number>(num1: T, num2: T) {
  return num1 * num2
}

function divide<T extends number>(num1: T, num2: T) {
  return num1 / num2
}

export {add, mul, divide}