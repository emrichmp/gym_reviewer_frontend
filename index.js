const gymEndPoint = "http://localhost:3000/api/v1/gyms"
const reviewEndPoint = "http://localhost:3000/api/v1/reviews"

document.addEventListener('DOMContentLoaded', () => {
    //Once DOM content is loaded, we are grabbing the JSON and using it in the getGyms() function
    getGyms()
    //grabs form
    const createGymForm = document.querySelector("#create-gym-form")
    //fires this when submit is pressed to add the new gym from the form
    createGymForm.addEventListener("submit", (e) => 
    createFormHandler(e))
    //fires this when submit is pressed to add the new review from the form
    const createReviewForm = document.querySelector("#create-review-form")
    createReviewForm.addEventListener("submit", (e) => 
    createReviewFormHandler(e))
})
//gets the gym data from the JSON
function getGyms() {
    fetch(gymEndPoint)
    .then(response => response.json())
    .then(gyms => {
        gyms.data.forEach(gym => {
            let reviewHTML = ''
            gym.attributes.reviews.forEach(review => {
                reviewHTML += `<p>${review.content} - ${review.rating}</p>`
            })
            //renders this html and appends it on the page to display the attr data
            //console.log(gym.attributes.reviews[0])
            const gymMarkup = `
              <div data-id=${gym.id}>
                <h3>${gym.attributes.name} - id: ${gym.id}</h3>
                <h3>${gym.attributes.location}</h3>
                <h4>${gym.attributes.description}</h4>
                <button data-id=${gym.id}>edit</button>
                <h3> All Comments for this Gym </h3>
                ${reviewHTML}
              </div>
              <br><br>`;
              document.querySelector('#gym-container').innerHTML += gymMarkup
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
    // updates DOM with newly created gym instance
    const gymMarkup = `
    <div data-id=${gym.id}>
      <h3>${gym.name} </h3>
      <h3>${gym.description}</h3>
      <h4>${gym.location}</h4>
      <button data-id=${gym.id}>edit</button>
    </div>
    <br><br>`;
    document.querySelector('#gym-container').innerHTML += gymMarkup;
  })
}

function createReviewFormHandler(e) {
    e.preventDefault()
    const contentInput = document.querySelector('#input-content').value
    const ratingInput = document.querySelector('#input-rating').value
    const idInput = document.querySelector('#input-gym-id').value
    postFetchReviews(contentInput, ratingInput, idInput)
}

function postFetchReviews(content, rating, id) {
    console.log(content, rating, id)

    // fetch(reviewEndPoint, {
    //     // POST request
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({
    //         content: content,
    //         rating: rating,
    //         gym_id: id
    //     })
    //   })
}