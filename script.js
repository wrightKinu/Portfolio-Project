console.log("Foodie Time")

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();

console.log(event.target.input.value)
let user_search = document.querySelector("#input").value
let foodSearch =`https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=${user_search}`


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcd6ff595cmsh47ebeacfde95a96p1d5c57jsnffaf3affdd1d',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};


fetch(foodSearch, options)
	.then(response => response.json())
	.then((json) =>{
console.log(foodSearch)

 let recipeBox = document.querySelector("div .search-container")
 let recipeName = json.results[0].display
 recipeHead = document.createElement("h3")
 recipeHead.className = 
 recipeHead.innerHTML = `<strong>${recipeName}</strong>`
 recipeBox.append(recipeHead)
 
 console.log(json)

})




.catch((err) = {




});
 console.log(user_search)
 event.target.input.value = "" 
 console.log(user_search)
})