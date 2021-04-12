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
            //renders this html and appends it on the page to display the attr data
            const gymMarkup = `
              <div data-id=${gym.id}>
                <h3>${gym.attributes.name}</h3>
                <h3>${gym.attributes.location}</h3>
                <h4>${gym.attributes.description}</h4>
                <button data-id=${gym.id}>edit</button>
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
    postFetch(nameInput, descInput, locationInput)
}

function postFetch(name, description, location) {
    console.log(name, description, location)
}