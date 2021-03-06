
class Gym {
    constructor(gym, gymAttributes, gymReviews){
        this.id = gym.id
        this.name = gymAttributes.name
        this.description = gymAttributes.description
        this.location = gymAttributes.location
        this.reviews = gymReviews
        Gym.all.push(this);
    }

    renderGymCard() {
        return `
        <div data-id=${this.id}>
          <h3>${this.name} - id: ${this.id}</h3>
          <h3>Location: ${this.location}</h3>
          <h4>Description: ${this.description}</h4>
          <h3> Reviews </h3>
          <button data-id=${this.id}>Add Review</button>
          <div id="gym-reviews-${this.id}"></div>
          <div id="review-form-${this.id}"></div>
        </div>

        `;
    }



    //SEARCH FUNCTION CODE
    static searchLocations(searchValue){
        //console.log(Gym.all)
        document.querySelector("#search-results").innerHTML = ``
        let nameArray = [];
        Gym.all.forEach(gym => {
            if (searchValue === gym.location){
                nameArray += gym.name
            }
        })
        if (nameArray.length > 1){
            document.querySelector("#search-results").innerHTML += `These gyms match ur location:`
            document.querySelector("#search-results").innerHTML += nameArray
        } else {
            document.querySelector("#search-results").innerHTML = `No gym in that location`
        }
    }




    

    static findById(id) {
        return this.all.find(gym => gym.id === id);
      }

    renderReviewForm() {
        return `
        <form data-id=${this.id}>
          <label>Comment</label>
          <p>
          <input id='review-input-content-${this.id}' type="text" name="content" value="" class="input-text">
          </p>
          <label>Rating</label>
          <p>
          <input id='review-input-rating-${this.id}' type="text" name="rating" value="" class="input-text">
          </p>
          <button type='submit'>Save Review</button>
        </form>
      `;
      }

}

Gym.all = [];