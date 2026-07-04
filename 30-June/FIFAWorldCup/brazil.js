coach = "Carlo Ancelotti"
captain = "Marquinhos"
top_players = [ "Marquinhos", "Vinicius Jr.", "Rodrygo", "Raphinha" ]

function rank() {
    console.log("Current FIFA Ranking : 5")
}

function welcome() {
    console.log("Welcome to Brazil Team")
}

function top_player() {
    console.log("TOP Player")
    console.log("-------------------------")
    for (player of top_players) {
        console.log(player)
    }
    console.log()
}

module.exports = {captain, coach, top_player, welcome, rank}