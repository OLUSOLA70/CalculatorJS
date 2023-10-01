let data = [
    {
        namee: "Jane",
        score: 70
    },
    {
        namee: "Mark",
        score: 72
    }
]
let myScore = document.getElementById("btn")
myScore.addEventListener("click", function() {
    console.log(data[0].score)
})

 