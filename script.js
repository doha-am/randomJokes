//#region GetAllJokes
function GetJokes() {
    axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(function (response) {

            document.getElementById("joke").innerHTML = response.data.joke
            document.getElementById("joke").classList.add("fade");
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
document.getElementById("btn").addEventListener("click", GetJokes)