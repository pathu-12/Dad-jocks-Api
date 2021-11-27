const joke = document.getElementById("joke");
const next_joke = document.getElementById("next_joke");

const fetch_joke = async () =>{
    try{
        let set_headers = {
            headers :{
                Accept : "Application/json"
            }
        }
        const response = await fetch("https://icanhazdadjoke.com/",set_headers);
        const response_data = await response.json();
        joke.innerHTML = response_data.joke;
    }
    catch(err){
        console.log(err);
    }
}

next_joke.addEventListener("click", () =>{
    joke.innerHTML = "Joke is loading ...";
   setTimeout(() =>{
    fetch_joke();
   },500);
});

fetch_joke();