const emojis = [
    "",
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];

const heading = document.getElementById("heading");

function roll() {
    let num = Math.floor(Math.random() * 6) + 1;

    let message = document.getElementById("message");
    let dice = document.getElementById("dice");

    if (message == null) {
        message = document.createElement("h1");
        message.innerText = "You rolled " + num + ".";
        message.setAttribute("class", "text-2xl font-sans text-green-500");
        message.setAttribute("id", "message");
        
        dice = document.createElement("p");
        dice.innerText = emojis[num];
        dice.setAttribute("id", "dice");
        dice.setAttribute("class", "text-9xl text-white")

        heading.after(message);
        message.after(dice);
    } else {
        message.innerText = "You rolled " + num + ".";
        dice.innerHTML = emojis[num];
    }
}