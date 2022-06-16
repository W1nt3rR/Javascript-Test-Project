/*
This is the api you will need to get data from: https://api.imgflip.com/get_memes
The data looks like this:
{
    "success": true,
    "data": {
        "memes": [
            {
                "id": "61579",
                "name": "One Does Not Simply",
                "url": "https://i.imgflip.com/1bij.jpg",
                "width": 568,
                "height": 335,
                "box_count": 2
            },
            {
                "id": "101470",
                "name": "Ancient Aliens",
                "url": "https://i.imgflip.com/26am.jpg",
                "width": 500,
                "height": 437,
                "box_count": 2
            }
            // probably a lot more memes here..
        ]
    }
}

You will need to show all the memes on one page in correct dimensions in the cards as displayed below.
Card should have a border and its width should be set to 500px; Height of the cards should be auto generated.
Image should fit inside of the card.
Cards should be at the center of the page and be one after the other.

*/


// const fetch = require("node-fetch");

const randomMeme = async (name) => {
    try {

        const response = await fetch(`https://api.imgflip.com/get_memes`);
        const result = await response.json();

        console.log(result.data.memes); //.map((value, index) => value.url || value.name)

        // console.log(result.content + " Author: " + result.author);

        return result.data.memes;

    } catch (error) {
        console.log(error);
    }
};

let memes = randomMeme();


const contentDiv = document.getElementById("content");

const createCard = (name, url) => {
    return `<div style="width: 500px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;">
        <h1 style="text-align: center;">${name} </h1>
        <img style="width: 100%;" src="${url}" alt="">
    </div>`
}


randomMeme().then((result) => {
    result.forEach(element => {
        console.log(element);
        contentDiv.innerHTML = contentDiv.innerHTML + createCard(element.name, element.url);
    });
});

// const returnMemes = async (page = 1) => {
//     try {
//         const response = await fetch(`https://api.quotable.io/quotes?${page ? `page=${page}` : ""}`);
//         const result = await response.json(); //json je promise
//         return result.results;
//     } catch (error) {
//         console.log(error);
//     }
// };

/*
const createCardNode = (name, url) => {
    const div = document.createElement('div');
    div.style = "width: 500px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;";
    
    const h1 = document.createElement("h1");
    h1.textContent = name;
    div.appendChild(h1);

    const img = document.createElement("img");
    img.textContent = `By: ${author}`;
    div.appendChild(p2);

    return div;
}
*/

/*
const pageInput = document.getElementById("pageInput");
const fn = () => {
    contentDiv.innerHTML = "";
    returnQuotes(pageInput.value).then(result => {
        result.forEach(quote => {
            const newCard = createCardNode(quote.author, quote.content);
            contentDiv.appendChild(newCard);
            // page++;
        });
    });
}
*/

/*
const returnQuotes = async (page = 1) => {
    try {
        const response = await fetch(`https://api.quotable.io/quotes?${page ? `page=${page}` : ""}`);
        const result = await response.json(); //json je promise
        return result.results;
    } catch (error) {
        console.log(error);
    }
};


const contentDiv = document.getElementById("content");
let page = 1;

const createCard = (author, quote) => {
    return `<div style="width: 400px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;">
        <p>${quote} </p>
        <p>By: ${author}</p>
    </div>`
}


returnQuotes().then((result) => {
    result.forEach(element => {
        console.log(element);
        contentDiv.innerHTML = contentDiv.innerHTML + createCard(element.author, element.content);
    });
});


const createCardNode = (author, quote) => {
    const div = document.createElement('div');
    div.style = "width: 400px; min-height: 100px; border: 1px solid black; margin: 10px; padding: 20px;";
    
    const p = document.createElement("p");
    p.textContent = quote;
    div.appendChild(p);

    const p2 = document.createElement("p");
    p2.textContent = `By: ${author}`;
    div.appendChild(p2);

    return div;
}

const pageInput = document.getElementById("pageInput");
const fn = () => {
    contentDiv.innerHTML = "";
    returnQuotes(pageInput.value).then(result => {
        result.forEach(quote => {
            const newCard = createCardNode(quote.author, quote.content);
            contentDiv.appendChild(newCard);
            // page++;
        });
    });
}

const dugme = document.getElementById("dugme");

dugme.addEventListener("click", fn);


const authorCheck = async (author) => {
    try {
        const response = await fetch(`https://api.quotable.io/search/authors?query=${author}`);
        const result = await response.json();

        if(!result.count) {
            return false;
        }
        
        // console.log(result);
        // if(result.count === 1){
            return result.results[0].name;
        // }

        // return result.author;
    } catch (error) {
        console.log(error);
    }
}
*/
// randomQuoteFromAuthor("Nikola Teslas");
// authorCheck("Adam").then((value) => console.log(value));
// randomQuoteFromAuthor("richard");

// returnQuotes();
/*
returnQuotes(5, "content", "desc").then(value => value.forEach(element => { 
    console.log(element.content + " by: " + element.author + "\n"); 
}));
*/