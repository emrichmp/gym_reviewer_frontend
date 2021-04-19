const reviewEndPoint = "http://localhost:3000/api/v1/reviews"

class App {
    attachEventListeners() {
      document.querySelector('#gym-container').addEventListener('click', e => {
        const id = e.target.dataset.id
        const gym = Gym.findById(id)
        //console.log(id)
        //console.log(gym)
        document.getElementById(`review-form-${gym.id}`).innerHTML = gym.renderReviewForm()
        
        document.getElementById(`review-form-${gym.id}`).addEventListener('submit', e => {
            e.preventDefault();
            //id of the gym it belongs to
            const formId = e.target.dataset.id
            const formContent = document.getElementById(`review-input-content-${formId}`).value;
            const formRating = document.getElementById(`review-input-rating-${formId}`).value;
            console.log(formId)
            console.log(formContent)
            console.log(formRating)
            this.postFetchReviews(formId, formContent, formRating)

            document.getElementById(`gym-reviews-${formId}`).innerHTML += `<p>${formContent} - ${formRating}</p>`
        })
      });
    }
    postFetchReviews(gymReviewId, gymReviewContent, gymReviewRating){
        fetch(reviewEndPoint, {
            // POST request
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                content: gymReviewContent,
                rating: gymReviewRating,
                gym_id: gymReviewId
            })
          })
          .then(response => response.json())
          .then(review => {
            console.log(review);
        
          })
    }
  }