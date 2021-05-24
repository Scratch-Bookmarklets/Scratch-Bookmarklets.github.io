if (parser.hostname === scratch.mit.edu) {
  let user = prompt("Which user would you like to go to?");
window.location.href = `https://scratch.mit.edu/users/${user}/`;
}
else {
alert("Please click the bookmarklet on the scratch website (scratch.mit.edu)")
}
