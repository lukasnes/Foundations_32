// submit buttons
const getSubmit = document.getElementById('getSubmit');
const getParamsSubmit = document.getElementById('getParamsSubmit');
const getQuerySubmit = document.getElementById('getQuerySubmit');

// inputs
const paramsInput = document.getElementById('params-input');
const queryInput = document.getElementById('query-input');

// response section
const responseSection = document.getElementsByClassName('response-area')[0];

// handle submits
getSubmit.addEventListener('click', () => {
    axios
        .get('http://localhost:5050/api/inventory')
        .then(res => addToView(res.data))
});

getParamsSubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:5050/api/inventory/${paramsInput.value}`)
        .then(res => addToView([res.data]))
});

getQuerySubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:5050/api/inventory?item=${queryInput.value}`)
        .then(res => addToView(res.data))
});

// handle response
function addToView(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
}