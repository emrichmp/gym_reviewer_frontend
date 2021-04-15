//console.log("in gym.js")

class Gym {
    constructor(gym, gymAttributes){
        this.id = gym.id
        //debugger
        this.name = gymAttributes.name
        this.description = gymAttributes.description
        this.location = gymAttributes.location
        Gym.all.push(this);
        //debugger
    }

    renderGymCard() {
        //debugger
        return `
        <div data-id=${this.id}>
          <h3>${this.name} - id: ${this.id}</h3>
          <h3>Location: ${this.location}</h3>
          <h4>Description: ${this.description}</h4>
          <button data-id=${this.id}>edit</button>
          <h3> Reviews </h3>
          <button data-id=${this.id}>Add Review</button>
        </div>
        <br><br>`;
    }
}

Gym.all = [];