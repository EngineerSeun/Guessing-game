var randomNumber = Math.floor((Math.random() + 10)) = 1;
document.getElementById("guess").onclick = function () {

    if (document.getElementById("number").value > randomNumber) {
        document.getElementById("message").innerHTML = "Too High!"

    } else if (document.getElementById("number").value < randomNumber) {
        document.getElementById("message").innerHTML = "Too Low!"

    } else {
        document.getElementById("message").innerHTML = "That's it!"(<a href="play again"></a>);
        document.getElementById("text").style.color = "red";
    }
}