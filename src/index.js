const gymEndPoint = "http://localhost:3000/api/v1/gyms"

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();
    app.searchEventListener();
    //Once DOM content is loaded, we are grabbing the JSON and using it in the getGyms() function
    getGyms()
    //grabs form
    const createGymForm = document.querySelector("#create-gym-form")

//     const createSearchForm = document.querySelector("#search-form")

//     createSearchForm.addEventListener("submit", e =>
//             e.preventDefault();
//             const searchValue = document.getElementById(`search`).value
//             searchLocations(searchValue)
//       )

// )
    //createSearchForm.addEventListener("submit")
    //fires this when submit is pressed to add the new gym from the form
    createGymForm.addEventListener("submit", (e) => 
    createFormHandler(e))
})
//gets the gym data from the JSON
function getGyms() {
    fetch(gymEndPoint)
    .then(response => response.json())
    .then(gyms => {
        gyms.data.forEach(gym => {
            let reviewHTML = ''
            gym.attributes.reviews.forEach(review => {
                let newReview = new Review(review)
                //debugger
                reviewHTML += `<p>${review.content} - ${review.rating}</p>`
            })
            //debugger
            let newGym = new Gym(gym, gym.attributes, gym.attributes.reviews)

            document.querySelector('#gym-container').innerHTML += newGym.renderGymCard()
            document.getElementById(`gym-reviews-${gym.id}`).innerHTML += reviewHTML
            //document.querySelector('#gym-reviews').innerHTML += reviewHTML
            document.querySelector('#gym-container').innerHTML += `<br></br>`
            //debugger
            //renders this html and appends it on the page to display the attr data
            //console.log(gym.attributes.reviews[0])
          })
    })
}

//handles form to assign data from form into variables
function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const descInput = document.querySelector('#input-description').value
    const locationInput = document.querySelector('#input-location').value
    postFetchGyms(nameInput, descInput, locationInput)
}

function postFetchGyms(name, description, location) {
    //confirms data is goin thru
    // console.log(name, description, location)
    
  fetch(gymEndPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        name: name,
        description: description,
        location: location
    })
  })
  .then(response => response.json())
  .then(gym => {
    console.log(gym);

    let newGym = new Gym(gym, gym)

    document.querySelector('#gym-container').innerHTML += newGym.renderGymCard()
  })
}

{/* <h3> All Comments for this Gym </h3>
${reviewHTML}
<button data-id=${gym.id}>Add Comment</button> */}
