function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}


 function sayHiToHeadphonedRoommate(string) {

  
 switch (string) {
    case string.toLowerCase():
      return "I can't hear you!";
    case string.toUpperCase():
      return "YES INDEED!";
    case "Let's have dinner together!":
      return "I would love to!";
}


}
sayHiToHeadphonedRoommate("hello");
sayHiToHeadphonedRoommate("HELLO");
sayHiToHeadphonedRoommate("Let's have dinner together!");

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

say("Julio", "hello");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
