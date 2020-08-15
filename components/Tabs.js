// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


axios 
    .get("https://lambda-times-api.herokuapp.com/topics")

    .then((res) => {
        console.log("Here is the res", res)
        const whatever = res.data.topics; 
        // here we have an array of 5 strings from the get request, as a response
        console.log(whatever) 

        whatever.forEach(element => {
            const newTab = myTop(element);
            topicCss.appendChild(myTop(element)); // topicsCss was selected outside the then
        });
    })

    .catch((err) => {
        console.log(`Here is the err: ${err}`)
    })

function myTop(string){


const tops = document.createElement('div');
    tops.classList.add('tab')
    tops.textContent = string;


return tops

}

    const topicCss = document.querySelector('.topics')


