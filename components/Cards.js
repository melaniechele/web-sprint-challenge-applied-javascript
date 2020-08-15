// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
let resArray = [];
axios 
.get('https://lambda-times-api.herokuapp.com/articles')
.then((res) =>{
    console.log('here is the RES: ', res)
    const data = res.data.articles
    // console.log(data.bootstrap[0].headline)
    const bootstrap = data.bootstrap

    bootstrap.forEach((element) => {
        cardCont.appendChild(cardMaker(element))

    });
    const javascript = data.javascript
    javascript.forEach((element) => {
        cardCont.appendChild(cardMaker(element))

    });
    const jquery = data.jquery
    jquery.forEach((element) => {
        cardCont.appendChild(cardMaker(element))

    });
    const node = data.node
    node.forEach((element) => {
        cardCont.appendChild(cardMaker(element))

    });
    const technology = data.technology
    technology.forEach((element) => {
        cardCont.appendChild(cardMaker(element))

    });


})
.catch((err) =>{
    console.log('here is the ERR: ', err)
})



function cardMaker(object){
const newCard = document.createElement('div');
newCard.classList.add('card');

const headLine = document.createElement('div');
headLine.classList.add('headline');
headLine.textContent = object.headline;
headLine.addEventListener('click', () =>{
   console.log(headLine.textContent = object.headline)
    
});
newCard.appendChild(headLine)

const authorDiv = document.createElement('div');
authorDiv.classList.add('author');
newCard.appendChild(authorDiv);

const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');
authorDiv.appendChild(imgContainer);


const imageUrl = document.createElement('img');
imageUrl.src = object.authorPhoto;
imgContainer.appendChild(imageUrl);


const authName = document.createElement('span');
authName.textContent = `By: ${object.authorName}`;
authorDiv.appendChild(authName);

return newCard

}

const cardCont = document.querySelector('.cards-container')