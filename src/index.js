const init = () => {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', function(event){
    event.preventDefault();
    //ALWAYS MAKE SURE TO ADD .value TO ACTUALLY READ IN THE VALUE OF THE INPUT
    //event.target refers to the <form> since the event is just the event itself but the target of the event
    //is going to be the <form> element, we named our <input> "movieId" which is why we reference event.target.movieId
    //but if we actually want the value a user has inputted into it, we need event.target.movieId.VALUE
    const match = event.target.movieId.value;
    //since we can access a spcecific resource with its path via its id attribute
    //we can just automatically fetch it and see if there is a match by putting the
    //id number passed in directly into the URL we are fetching
    fetch(`http://localhost:3000/movies/${match}`)
        .then(res => res.json())
        .then((searchedMovie)=>{
            /*if you want to add a card, make sure to document.createElement() an HTML element first 
            and THEN alter that created element's innerHTML property, seen below*/
                let childNode = document.createElement('div');
                let searchedMovieCard = `
                <div class="searchedMovieDetails">
                    <h4>${searchedMovie.title}</h4>
                    <p>${searchedMovie.summary}</p>
                </div>
                `;
                childNode.innerHTML = searchedMovieCard;

                let parent = document.querySelector("div#results");
                parent.appendChild(childNode);

                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');
          
                title.innerText = searchedMovie.title;
                summary.innerText = searchedMovie.summary;
            });
  });
}

document.addEventListener('DOMContentLoaded', init);
