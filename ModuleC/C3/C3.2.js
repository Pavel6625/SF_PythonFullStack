console.clear()

newobj = {
    name: 'test',
    count: 10
}

function checkObjectProperty (prop, obj) {
    return (prop in obj) ? `Свойство "${prop}" присутствует в объекте` : `Свойство "${prop}" отсутствует в объекте`;
}
console.log(checkObjectProperty('name', newobj))
console.log(checkObjectProperty('lastname', newobj))