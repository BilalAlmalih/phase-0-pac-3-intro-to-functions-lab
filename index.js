function shout(string){
    return string.toUpperCase()
}

console.log(shout("bilal!"))

function whisper(string){
    return string.toLowerCase()
}

console.log(whisper("HI"))

function logShout(string){
    console.log(string.toUpperCase()) 
}

logShout("meh")



function logWhisper(string){
    console.log(string.toLowerCase()) 
}

logWhisper("LOL")


function sayHiToHeadphonedRoommate(string){
    
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }

    else if (string === string.toLowerCase())  {
        return "I can't hear you!"

    }

    

    else if (string === "Let's have dinner together!")  {
        return "I would love to!"

    }
    
}

console.log(sayHiToHeadphonedRoommate("what"))
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))
console.log(sayHiToHeadphonedRoommate("HELLO"))
