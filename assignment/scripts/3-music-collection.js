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

// showCollection function

function showCollection(collection){
    console.log(`Number of items are: ${collection.length}`);
    for(const album of collection) {
        console.log(album.title, "by", album.artist + ",", "published in", album.yearPublished);
    }   
}
showCollection(collection);

// Find by artist function
function findByArtist(artist){
    const arrAlbum = [];
    for(const album of collection){
        if(album.artist === artist){
            arrAlbum.push(album);
        }
    }
    return arrAlbum;
}
// test multiple albums
const results = findByArtist("Lil Wayne");
showCollection(results);

// test by unkown artist
console.log(`Album by artist:`);
showCollection(findByArtist("Jay-z"));

// test by single artist
console.log(`Album by artist`);
showCollection(findByArtist("Nas"));

// Stretch goals

console.log("Stretch Goals");

// new function search
function search (searchCriteria){
    if(!searchCriteria || Object.keys(searchCriteria).length === 0){
        //Returns all albums 
        return collection;
    }
    const results = [];
    for(let i = 0; i < collection.length; i++){
        const album = collection[i];
        let matches = true;
        for(let key in searchCriteria){
            if(album[key] !== searchCriteria[key]){
                matches = false;
                break;
            }
        }
        if (matches){
            results.push(collection[i]);
        }
    }
    return results;
}

// test the search criteria
console.log(`Search result:`);
showCollection(search({artist:'Nas'}));

console.log(`Search result`);
showCollection(search({yearPublished:'2011'}));

console.log(`Search result`);
showCollection(search({artist: 'Kevin Gates', yearPublished:'2016'}));

console.log(`All results`);
showCollection(search());

//updated function with track
function addToCollection(title, artist, yearPublished, tracks) {
        let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks  
    };
    collection.push(album);
    return album;
}

// collection with tracks
addToCollection("Renaissance", "Beyonce", "2022", [{name:"Cuff It", duration: "3:45"}, {name: "Heated", duration: "4:20"}]);
console.log("New album:", addToCollection("Teflon Don", "Rick ross", "2010", [{name:"Aston Martin Music", duration: "4:31"}, {name: "B.M.F", duration: "4:10"}]));
console.log("New album:", addToCollection("Islah", "Kevin Gates", "2016", [{name:"Hard For", duration: "4:07"}, {name: "2 phones", duration: "4:00"}]));
console.log("New album:", addToCollection("Magic", "Nas", "2021", [{name:"Wave Gods", duration: "3:11"}, {name: "The Truth", duration: "3:28"}]));
console.log("New album:", addToCollection("Tha Carter III", "Lil Wayne", "2008", [{name:"La La", duration: "4:22"}, {name: "Lollipop", duration: "4:59"}]));
console.log("New album:", addToCollection("Sorry 4 the wait", "Lil Wayne", "2011", [{name:"Shit", duration: "4:18"}, {name: "Admit it", duration: "4:03"}]));
