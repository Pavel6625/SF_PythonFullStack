console.clear()

const JSONString = `{"list":[{"name": "Petr","age": "20","prof": "mechanic"},
         {"name": "Vova","age": "60","prof": "pilot"} ]}`


const jsondata = JSON.parse(JSONString);

result = {list : []}

jsondata.list.forEach(element => {
    result.list.push(element)
})

console.log(result)