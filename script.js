const addForm = document.querySelector('.form--add');
const searchForm = document.querySelector('.form--search');
const content = document.querySelector('.content');


const addElementToDom = (e, node = addForm.elements.node.value, txt = addForm.elements.text.value, attr = addForm.elements.attr.value, value = addForm.elements.value.value) => {
    e.preventDefault();
    console.log(node, txt, attr, value);
    const element = document.createElement(node);
    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value)
    }

    content.appendChild(element)


}

const searchElements = (e, search = searchForm.elements['searching-element'].value) => {
    e.preventDefault();
    const result = document.querySelector('.result');
    result.textContent = '';
    console.log(search);
    const elements = document.querySelectorAll(search);
    console.log(elements.length);

    console.log(result);
    if (elements.length > 0) {
        result.innerHTML = "<p class='result__info'>W tym dokumencie znalezniono <strong>" + elements.length + '</strong> elementów <strong>' + search + '</strong></p>';
        showInfo(elements, result)

    } else {
        result.innerHTML = "<p class='result__info'>W tym dokumencie nie znalezniono elementów <strong>" + search + '</strong></p>';

    }

}

const showInfo = (elements, result) => {
    console.log(elements, result);
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'element-info';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>klasa/klasy: ${element.className}</div>
        <div>Wysokośc elementu (offsetHeight): ${element.offsetHeight}</div>
        <div>Szerokość elementu (offsetWidth): ${element.offsetWidth}</div>
        <div>Odległość od lewej krawędzi (offsetLeft): ${element.offsetLeft}</div>
        <div>Odległość od górnej krawędzi (offsetTop): ${element.offsetTop}</div>
        <div>Liczba elementów dzieci (childElementCount): ${element.childElementCount}</div>
        `;
        result.appendChild(item)
    })
}

addForm.addEventListener('submit', addElementToDom);
searchForm.addEventListener('submit', searchElements);