console.log('***** Music Collection *****')

// Empty variable collection

const collection = [];

// function addToCollection, and object

function addToCollection(title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(album);

    return album;
}

// Adding albums to addToCollection function
addToCollection("Renaissance", "Beyonce", "2022");
console.log("New album:", addToCollection("Teflon Don", "Rick ross", "2010"));
console.log("New album:", addToCollection("Islah", "Kevin Gates", "2016"));
console.log("New album:", addToCollection("Magic", "Nas", "2021"));
console.log("New album:", addToCollection("Tha Carter III", "Lil Wayne", "2008"));
console.log("New album:", addToCollection("Sorry 4 the wait", "Lil Wayne", "2011"));

// console collection array

console.log("collection:", collection);
