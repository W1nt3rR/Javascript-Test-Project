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