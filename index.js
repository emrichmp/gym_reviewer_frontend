const gymEndPoint = "http://localhost:3000/api/v1/gyms"

document.addEventListener('DOMContentLoaded', () => {
    getGyms()
})

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