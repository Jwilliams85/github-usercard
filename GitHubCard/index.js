

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [];

const entryPoint = document.querySelector ('.cards')
axios.get('https://api.github.com/users/Jwilliams85')
.then(response => { 
  const myCard = response.data
  console.log(response)
  entryPoint.appendChild(gitCard(myCard));

  axios.get(response.data.followers_url)
  .then(response1 => {
    console.log(response1);
    response1.data.forEach(follower => {
      document.querySelector('.cards').appendChild(gitCard(follower));
    });
  })

.catch(err => {
  console.log ('something happened!');
 
})
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


/*

  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const gitCard = (user) => {

    const card = document.createElement ('div');
    const image = document.createElement ('img')
    const cardInfo = document.createElement ('div');
    const name = document.createElement ('h3');
    const userName = document.createElement ('p');
    const location = document.createElement ('p');
    const profile = document.createElement ('p');
    const profileAnchor = document.createElement ('anchor')
    const followers = document.createElement ('p');
    const following = document.createElement ('p');
    const bio = document.createElement ('p');
    const button = document.createElement ('span')


card.classList.add ('card');
cardInfo.classList.add ('card-info');
name.classList.add ('name');
userName.classList.add ('username');
button.classList.add ('expandButton')

name.textContent = user.name;
image.src = user.avatar_url;
userName.textContent = user.login;
location.textContent = `location: ${user.location}`;
profile.textContent = `profile:`
profileAnchor.textContent = user.html_url;
followers.textContent = `Followers: ${user.followers}`;
following.textContent = `Following: ${user.following}`;
bio.textContent = `Bio ${user.bio}`;
button.textContent = 'Expand'



card.appendChild(image)
card.appendChild(cardInfo)
cardInfo.appendChild(name)
cardInfo.appendChild(userName)
cardInfo.appendChild(location)
cardInfo.appendChild(profile)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)
card.appendChild(button)


button.addEventListener('click', () => {
  card.classList.toggle('card-open')
})

return card

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
