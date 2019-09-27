var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999",
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold",
artist:"ABBA"
    }
};


function updateRecords(id, prop, val){

    let obj = collection[id];

    if(prop !== 'tracks' && val !== ""){
        obj[prop] = val;
    }
    else if(prop === 'tracks'){
        if(obj[prop] === undefined){
            obj[prop] = [];
        }
        obj[prop].push(val);
    }
    else if(val === ""){
        delete obj[prop];
    }

}

// updateRecords(5439, "artist", "ABBBA");
// console.log(collection);
// updateRecords(5439, "tracks", "Take a Chance on Me"), 
// console.log(collection);
updateRecords(2548, "artist", "");
console.log(collection);