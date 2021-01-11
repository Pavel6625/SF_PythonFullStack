console.clear()

newobj = {
    name: 'test',
    count: 10
}

function showObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}
showObject(newobj)