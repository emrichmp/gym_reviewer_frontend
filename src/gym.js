
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
          <div id="gym-reviews"></div>
          <div id="review-form"></div>
        </div>

        `;
    }
    static findById(id) {
        return this.all.find(gym => gym.id === id);
      }

    renderReviewForm() {
        return `
        <form data-id=${this.id}>
          <label>Comment</label>
          <p>
          <input id='input-content' type="text" name="content" value="" class="input-content">
          </p>
          <label>Review</label>
          <p>
          <input id='input-rating' type="text" name="rating" value="" class="input-rating">
          </p>
          <button type='submit'>Save Review</button>
        </form>
      `;
      }

      createReviewFormHandler(e) {
        e.preventDefault()
        const contentInput = document.querySelector('#input-content').value
        const ratingInput = document.querySelector('#input-rating').value
        console.log(contentInput)
        console.log(ratingInput)
        //postFetchReviews(contentInput, ratingInput)
    }
}

Gym.all = [];