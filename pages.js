console.log("Foodie Time")

const form = document.querySelector("button")
form.addEventListener("click", (event) => {
    event.preventDefault();

console.log("Time to chef it up")

let foodSearch =`https://tasty.p.rapidapi.com/recipes/detail?id=5586`

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcd6ff595cmsh47ebeacfde95a96p1d5c57jsnffaf3affdd1d',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch(foodSearch, options)
	.then(response => response.json())
	.then((json) => {

        let max = 4
        let min = 1
        let range = max - min + 1 
        
        for(let i = 0; i < 4; i++){
           let random = (Math.random() * range) + min 
           return random
        }
        
       console.log(random) 
        console.log(json)
    })
	
   
    
    
    
    .catch((err) => {

    });

})