

let myArr = ['a', 'b', 'c', 'd', 'e']
console.log(myArr)

// Write
myArr.push(6)

// Delete
myArr.pop()


let mimosa = {
    'startNode': null,
    'length': 0,
    'push': function(arg1){
        if(mimosa.length == 0){
            mimosa.startNode = mimosa._newNode(arg1)
        } else if(mimosa.length == 1){
            mimosa.startNode.nextObj = mimosa._newNode(arg1)
        } else if(mimosa.length == 2){
            mimosa.startNode.nextObj.nextObj = mimosa._newNode(arg1)
        }
        mimosa.length++
    },
    'pop': function(){
        mimosa.length--
        return mimosa[mimosa.length]
    },
    '_newNode': function(data){
        return {
            'data': data,
            'nextObj': null
        }
    }
}


mimosa.push('a')
mimosa.push('b')
mimosa.push('c')
mimosa.push('d')
console.log(mimosa)
// console.log(mimosa.pop())
// console.log(mimosa.pop())
// mimosa.push('c')
// mimosa.push('d')
// console.log(mimosa)