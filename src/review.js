//console.log("review.js")

class Review {
    constructor(review){
        this.id = review.id
        this.content = review.content
        this.rating = review.rating
        this.gym_id = review.gym_id
        Review.all.push(this);
    }
}

Review.all = [];