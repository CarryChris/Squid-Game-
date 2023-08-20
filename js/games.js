// Games content dynamicly
// Array of games objects
const games = [
  {
    gameNumber: "First Game",
    title: "Red Light Green Light",
    desc: "The game is simple, and you just have to move from point A to point B without being “seen”, but rules vary. In most cases, the ultimate goal is to get past the leader when their back is turned. In others, you have to touch the tree in which the leader is leaning without being caught moving.",
    img: "images/firstgame.jpg",
    id: "first",
    difficulty: 1,
  },
  {
    gameNumber: "Second Game",
    title: "Sugar Honeycombs",
    desc: "In this game, each player gets a circular tin that can be opened up to reveal a sugar honeycomb with one of four different shapes modelled into it: a circle, a triangle, a star or an umbrella. Armed with nothing but a needle, the players have to carve out the shapes without breaking their design – if the shape doesn’t come out whole, the player is killed.",
    img: "images/secondgame.jpg",
    id: "second",
    difficulty: 2,
  },
  {
    gameNumber: "Third Game",
    title: "Tug of War",
    desc: "The tug of war challenges each group of players into using all their strength and the best of their skills to make the other group fall to their death. There is only one rule: pulling on a thick rope to make the opposing team fall past the center mark",
    img: "images/thirdgame.jpg",
    id: "third",
    difficulty: 3,
  },
  {
    gameNumber: "Forth Game",
    title: "Marbles",
    desc: "Each player is given a bag containing ten marbles and then they are all divided in pairs. The goal is to win every marble your opponent has, but, as they quickly figure out, that between themselves and the person they chose to pair up with (usually the person they have become closest to), one of them will die.",
    img: "images/forthgame.jpg",
    id: "forth",
    difficulty: 4,
  },
  {
    gameNumber: "Fifth Game",
    title: "Hopscotch",
    desc: "Players have to jump their way through a bridge that has two glass squares side by side. While one glass square is tempered and will hold up to two players at a time, the square beside it is fragile and whoever jumps on it falls to their death. ",
    img: "images/fifthgame.jpg",
    id: "fifth",
    difficulty: 5,
  },
  {
    gameNumber: "Last Game",
    title: "Squid Game",
    desc: "The game is played by drawing a square, a triangle and two circles on the ground and has two teams trying to invade each other’s space. The tricky part is: you can’t touch any lines and must hop on one foot on most areas. Of course, players will try their best to make you fall along the way.",
    img: "images/lastgame.jpg",
    id: "last",
    difficulty: 6,
  },
];
// select games-right block
const gamesContent = document.getElementById("games__right");

// starts anonymous arrow function
let generateGamesContent = () => {
  return (gamesContent.innerHTML = games
    .map((game, index) => {
      // destruction obj properties
      let { id, title, img } = game;
      // use ternary operator for default active class on first child of gamesContent(games right block)
      const isActive = index === 0 ? "active" : "";

      return `<div id=games-id-${id} class="games__content ${isActive}" >
      <img src="${img}" alt="Squid game first game" />
      <div class="games__desc">
        <h3>
          ${title}
        </h3>
      </div>
      <div class="button__more-info">
        <button class"learn-more-btn">LEARN MORE</button>
      </div>
    </div>`;
    })
    // used join method coz of(,,,) to fix commas after objs
    .join(""));
};
generateGamesContent();

// selecting games-left block
const gameDescription = document.getElementById("games__left");

// it's listening to click event on right-block,in detail (while click on different game,it has own description)
gamesContent.addEventListener("click", (event) => {
  //
  const clickedGameContent = event.target.closest(".games__content");

  // if div is not exist, function stops execution
  if (!clickedGameContent) return;

  // add/remove active class on games divs
  const allGameContents = gamesContent.querySelectorAll(".games__content");
  allGameContents.forEach((content) => {
    content.classList.remove("active");
  });
  clickedGameContent.classList.add("active");

  const gameId = clickedGameContent.id;

  // variable which hold the game obj that corresponds to the id clicked game content
  const selectedGame = games.find((game) => `games-id-${game.id}` === gameId);

  updateGamesLeft(selectedGame);
});

let updateGamesLeft = (selectedGame) => {
  // selecting left block elements to change onclick description and also star rates
  const h5Element = gameDescription.querySelector(".games__left h5");
  const h2Element = gameDescription.querySelector(".games__left h2");
  const pElement = gameDescription.querySelector(".games__left p");
  const levelsElement = gameDescription.querySelector(".levels");
  // granting values
  h5Element.textContent = selectedGame.gameNumber;
  h2Element.textContent = selectedGame.title;
  pElement.textContent = selectedGame.desc;
  // change star classes depended on game difficulity
  const starElements = levelsElement.querySelectorAll("i");
  const totalStars = 6;
  const solidStars = selectedGame.difficulty;
  for (let i = 0; i < totalStars; i++) {
    if (i < solidStars) {
      starElements[i].classList.add("fa-solid");
      starElements[i].classList.remove("fa-regular");
    } else {
      starElements[i].classList.add("fa-regular");
      starElements[i].classList.remove("fa-solid");
    }
  }
};
//
const learnMoreButton = document.querySelectorAll(".button__more-info button");

learnMoreButton.forEach((button) => {
  button.addEventListener("click", () => {
    gameDescription.style.display = "flex";
  });
});

const closeModal = document.getElementById("close__modal");
closeModal.addEventListener("click", () => {
  gameDescription.style.display = "none";
});
