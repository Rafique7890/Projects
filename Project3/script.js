setInterval(() => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector("p").innerText = time;
}, 1000)