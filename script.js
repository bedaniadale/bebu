const messages = [
    "hi bebuuuu koooo",
    "sorry po if naging rude me sa pananalita",
    "there is nothing wrong with you",
    "i want you, i like you",
    "patawarin mo na ako and maging okay us",
    "i want you to be mine",
    "di ko na kaya mawala ka ule",
    "i miss you and you mean a lot to me",
    "alam ko masyado pang maaga, pero i know that...",
    "i love you"
];

const messageButton = document.getElementById("messageButton");
const messageParagraph = document.getElementById("message");
const hiddenImage = document.getElementById("hiddenImage");

let currentIndex = 0;

messageButton.addEventListener("click", function() {
    if (currentIndex < messages.length) {
        messageParagraph.textContent = messages[currentIndex];
        currentIndex++;
    } else {
        hiddenImage.style.display = "block";
    }
});
