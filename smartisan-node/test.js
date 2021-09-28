var a = [1, 34, 65, 4, 3, 5, 345]
var newA = a.filter((item) => item % 2)
newA.sort((a, b) => {
  return a - b
})
console.log(newA)
