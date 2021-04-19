class App {
    attachEventListeners() {
      document.querySelector('#gym-container').addEventListener('click', e => {
        const id = e.target.dataset.id
        const gym = Gym.findById(id)
        //console.log(id)
        console.log(gym)
        document.getElementById(`review-form-${gym.id}`).innerHTML = gym.renderReviewForm()
        
      });
    }
  }