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
            // const formContent = e.target.querySelector('input-content').value;
            // const formRating = e.target.querySelector('input-rating').value;
            //const formContent = document.querySelector('review-input-content').value
            console.log(formId)
            //console.log(formContent)
            // console.log(formRating)
        })
      });
    }
  }