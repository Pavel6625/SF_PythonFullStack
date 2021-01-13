console.clear();

const XMLString =`<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const students = new DOMParser().parseFromString(XMLString, "text/xml").querySelectorAll('student');

let result = { list: [] };

students.forEach(element => {
    const item =  {'name': `${element.querySelector('first').textContent} ${element.querySelector('second').textContent}`,
        'age': element.querySelector('age').textContent,
        'prof': element.querySelector('prof').textContent,
        'lang': element.querySelector('name').getAttribute('lang')
    }
    result.list.push(item)
});

console.log(result)


