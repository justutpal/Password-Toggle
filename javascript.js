let input = document.querySelector("input");
let img = document.querySelector("img");

// Function

img.addEventListener('click', () => {
    if (input.type == "password") {
        input.type = "text"
        img.src = "Resourses/discord.png"
    }
    else {
        input.type = "password"
        img.src = "Resourses/favicon (2).ico"
    }
})