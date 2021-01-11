console.clear()

function getSumFunction(a) {
    return function(b) {
        return a + b
    }
}

const sumFunction = getSumFunction(2);

const sum = sumFunction(3)

console.log(sum); // 5