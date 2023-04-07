
let myArr = ['a', 'b', 'c']
let newArr = myArr
newArr.push('d')
console.log(myArr)

myArrVal1 = 'a'
myArrVal2 = 'b'
myArrVal3 = 'c'

myArrObj1 = {
    'data': 'a',
    'nextObj': myArrObj2
}

myArrObj2 = {
    'data': 'b',
    'nextObj': myArrObj3
}

myArrObj3 = {
    'data': 'c'
}

myObjArr = [myArrObj1, myArrObj2, myArrObj3]
// console.log(myObjArr)