Goals/to do
[X] - Finish Reviews
    [X] - Have review form render under specific gym instance
    [X] - Add review to API/JSON w/ POST request
    [X] - Have DOM update with the review in the right spot
[X] - Make sure there are 3 AJAX Calls - when I finish reviews this will be completed

Technical and Complexity Requirements
In order to demonstrate your proficiency with what you've learned about web development with JavaScript, here are the requirements for your project. You should view these guidelines as a minimum bar for the features you include in your application. It's your project, and you are encouraged to go above and beyond these requirements.

[X] - The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[X] - The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.
    - Used Gym class to in JS to save it on the DOM

[X] - The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

[X] - The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). 
    - 3 AJAX calls
        * getGyms - GET fetch on the API to grab all gym instances
        * postFetchGyms - POST fetch on the API to add gym instance
        * postFetchReviews - POST fetch on the API to add the review instance
    - Create and Read gyms
    - Create and Read views

[X] - Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.
    - GET when loading all gyms
    - POST when adding a gym
    - POST when adding a comment

JavaScript
[X] Use classes and functions to organize your code into reusable pieces.
[X] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[X] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).
Rails
[X] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
[X] Well-named variables and methods
[X] Short, single-purpose methods
Git
[X] Aim for a large number of small commits - commit frequently!
[X] Add meaningful messages to your commits. When you look back at your commits with git log, the messages should describe each change.
[X] Don't include changes in a commit that aren't related to the commit message

