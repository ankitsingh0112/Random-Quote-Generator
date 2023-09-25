const quote = document.querySelector(".quote");
let author_name = document.querySelector(".author .name")
let btn = document.querySelector("button");

// fetching api
btn.addEventListener('click', (e) => {
    btn.classList.add("loading");
    btn.innerText = "Loading New Quote...";
    fetch('https://api.quotable.io/random').then(response => response.json()).then(result => {
        console.log(result);
        quote.innerText = result.content;
        author_name.innerText = result.author;
        btn.innerText = "Generate New Quote";
        btn.classList.remove("loading");
    })
})