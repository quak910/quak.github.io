var inv = document.getElementById("inv");
var server = document.getElementById("server");

inv.addEventListener("click", () => {
    window.open(
        "https://discord.com/api/oauth2/authorize?client_id=814034700997361664&permissions=8&scope=bot", "_blank");
});

server.addEventListener("click", () => {
    window.open(
        "https://discord.gg/NQwkvfX9CG", "_blank");
});