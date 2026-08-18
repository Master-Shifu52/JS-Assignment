let role = "Admin";
let password = "TheMaster";
if (role === "Admin") {
  if (password === "TheMaster") {
    console.log("Welcome");
  } else if (password === "TheKiller") {
    console.log("This guy is a killer, I don't know Him");
  } else {
    console.log("I don't know you");
  }
} else {
  console.log("This is not an admin");
}
