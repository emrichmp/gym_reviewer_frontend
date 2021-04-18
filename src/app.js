class App {
    attachEventListeners() {
      document.querySelector('#gym-container').addEventListener('click', e => {
        //console.log('clicked');
        const id = e.target.dataset.id
        const gym = Gym.findById(id)
        //console.log(id)
        console.log(gym)
        document.querySelector('#review-form').innerHTML += gym.renderReviewForm()
      });
    //   document.querySelector('#review-form').addEventListener('submit', (e) => 
    //   gym.createReviewFormHandler(e))
    }
  }