const gymEndPoint = "http://localhost:3000/api/v1/gyms"

document.addEventListener('DOMContentLoaded', () => {
    //Once DOM content is loaded, we are grabbing the JSON and using it in the getGyms() function
    getGyms()
    //grabs form
    const createGymForm = document.querySelector("#create-gym-form")
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
                reviewHTML += `<h4>${review.content} - ${review.rating}</h4>`
            })
            //renders this html and appends it on the page to display the attr data
            //console.log(gym.attributes.reviews[0])
            const gymMarkup = `
              <div data-id=${gym.id}>
                <h3>${gym.attributes.name}</h3>
                <h3>${gym.attributes.location}</h3>
                <h4>${gym.attributes.description}</h4>
                <button data-id=${gym.id}>edit</button>
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
    console.log(name, description, location)
    
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
