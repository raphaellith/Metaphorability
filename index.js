/*eslint-env browser*/

let subjects = [
    "my family",
    "art",
    "christmas",
    "happiness",
    "marriage",
    "a criminal",
    "a woman",
    "money",
    "music",
    "the ocean",
    "fire",
    "the world",
    "social media",
    "a dating app",
    "school",
    "puberty",
    "the journey towards success",
    "a pet",
    "the process of giving birth",
    "an interview",
    "this game",
    "a foreign language",
    "homework",
    "a book",
    "friendship",
    "childhood",
    "a best friend",
    "a spouse",
    "life",
    "an enemy",
    "the coronavirus",
    "the internet",
    "climate change",
    "an old person",
    "society",
    "crime",
    "cryptocurrency",
    "a corpse",
    "the future",
    "my body",
    "a child",
    "a baby",
    "a vegan",
    "the weather",
    "a hospital",
    "2020",
    "a funeral",
    "an orphan",
    "summer",
    "an obese person",
    "a homeless person",
    "winter"
];

let objects = [
    "coffee from Starbucks",
    "origami",
    "a bicycle",
    "airplane food",
    "an NFT",
    "an Excel file",
    "a PowerPoint presentation",
    "a keyboard",
    "the Bible",
    "a calculator",
    "Shakespeare",
    "a pack of playing cards",
    "a game of Monopoly",
    "a game of Mario",
    "a game of Jenga",
    "a game of Twister",
    "the Olympics",
    "Disneyland",
    "a piece of A4 paper",
    "the Facebook Marketplace",
    "a robbery",
    "a spa",
    "the Leaning Tower of Pisa",
    "Google",
    "diabetes",
    "the lottery",
    "a jigsaw puzzle",
    "an English teacher",
    "milk",
    "wine",
    "the World Wars",
    "a Rubik's Cube",
    "a Wikipedia article",
    "Microsoft Windows",
    "fast food",
    "a credit card",
    "plastic surgery",
    "an influencer",
    "ChatGPT",
    "a Zoom meeting",
    "polystyrene",
    "Twitter",
    "chocolate",
    "bubble gum",
    "a P.E. lesson",
    "an Android",
    "an examination",
    "tissue paper",
    "a wheelchair",
    "deoderant",
    "the sunset",
    "the Titanic",
    "cheddar",
    "the quadratic formula",
    "McDonald's",
    "an influencer",
    "salt",
    "butter",
    "bread",
    "a rose"
];

let subject_bag = [];
let object_bag = [];

function newPrompt() {
    if (subject_bag.length == 0) {
        subject_bag = subjects.slice();
    }
    
    if (object_bag.length == 0) {
        object_bag = objects.slice();
    }
    
    let subject = random_item(subject_bag);
    let object = random_item(object_bag);
    
    let index = subject_bag.indexOf(subject);
    if (index > -1) {
        subject_bag.splice(index, 1);
    }
    
    index = object_bag.indexOf(object);
    if (index > -1) {
        object_bag.splice(index, 1);
    }
    
    document.getElementById("subject").innerHTML = capitalize_first_letter(subject);
    document.getElementById("object").innerHTML = object + "...";
}

function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function capitalize_first_letter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function init() {
    document.getElementById("newPromptButton").addEventListener("click", newPrompt);

    newPrompt();
}

init();
