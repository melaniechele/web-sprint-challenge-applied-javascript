// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');


    const spanIn = document.createElement('span');
    spanIn.classList.add('date');
    spanIn.textContent = `MARCH 28, 2020`
    headerDiv.appendChild(spanIn);

    const title = document.createElement('h1')
    headerDiv.appendChild(title);
    title.textContent = `Lambda Times`

    const lastSpan = document.createElement('span')
    lastSpan.classList.add('temp')
    lastSpan.textContent = '98°'
    headerDiv.appendChild(lastSpan);

    return headerDiv;
}
const myHead = Header();

const headerCont = document.querySelector('.header-container');

headerCont.appendChild(myHead)
