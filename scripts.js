// document.addEventListener("DOMContentLoaded", () => {
//   const deck = document.querySelector(".deck");
//   let cards = Array.from(deck.children);

//   function rotateCards() {
//     let firstCard = cards[0];
//     firstCard
//       .querySelector(".card-face.card-front")
//       .classList.toggle("flipped");
//     firstCard.querySelector(".card-face.card-back").classList.toggle("flipped");

//     setTimeout(() => {
//       let lastCard = cards.pop();
//       cards.unshift(lastCard);
//       applyTransformations();
//     }, 1000); // Add a delay before moving the card
//   }

//   function applyTransformations() {
//     cards.forEach((card, index) => {
//       card.style.transform = `rotateY(${index * 5}deg) translateZ(${
//         index * -50
//       }px)`;
//       card.style.zIndex = `${5 - index}`;
//     });
//   }

//   setInterval(rotateCards, 2000); // Adjust the interval to control animation speed
//   applyTransformations();
// });

//SECOND
// document.addEventListener("DOMContentLoaded", () => {
//   const deck = document.querySelector(".deck");
//   let cards = Array.from(deck.children);
//   let currentCard = cards[0];

//   function rotateCards() {
//     currentCard.classList.remove("current");
//     currentCard = cards.shift();
//     cards.push(currentCard);
//     currentCard.classList.add("current");

//     // setTimeout(() => {
//     //   currentCard
//     //     .querySelector(".card-face.card-back")
//     //     .classList.toggle("flipped");
//     //   currentCard
//     //     .querySelector(".card-face.card-front")
//     //     .classList.toggle("flipped");
//     // }, 500);

//     setTimeout(() => {
//       const cardRect = currentCard.getBoundingClientRect();
//       const center = window.innerWidth / 2 - cardRect.width / 2;
//       currentCard.style.transform = `translate(${
//         center - cardRect.left
//       }px, -5rem)`;
//     }, 1500);

//     setTimeout(() => {
//         currentCard
//         .querySelector(".card-face.card-front")
//         .classList.toggle("flipped");
//       currentCard
//         .querySelector(".card-face.card-back")
//         .classList.toggle("flipped");

//     }, 2000);

//     setTimeout(() => {
//       currentCard.style.transform = "";
//     }, 2500);
//   }

//   setInterval(rotateCards, 4000);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const deck = document.querySelector(".deck");
//   let cards = Array.from(deck.children);
//   let currentCard = cards[0];

//   function rotateCards() {
//     currentCard.classList.remove("current");
//     currentCard = cards.shift();
//     cards.push(currentCard);
//     currentCard.classList.add("current");

//     setTimeout(() => {
//       const cardRect = currentCard.getBoundingClientRect();
//       const center = window.innerWidth / 2 - cardRect.width / 2;
//       currentCard.style.transform = `translate(${
//         center - cardRect.left
//       }px, -5rem)`;
//     }, 1500);

//     setTimeout(() => {
//       currentCard.querySelector(".card-face").classList.toggle("flipped");
//       currentCard.querySelector(".card-face").classList.toggle("flipped");
//     }, 2000);

//     setTimeout(() => {
//       currentCard.style.transform = "";
//     }, 2500);
//   }
//   setInterval(rotateCards, 4000);
// });

document.addEventListener("DOMContentLoaded", () => {
  const deck = document.querySelector(".deck");
  let cards = Array.from(deck.children);
  let currentCard = cards[0];

//   function shuffleCards() {
//     // Shuffle the cards randomly
//     cards.sort(() => Math.random() - 0.75);

//     // Animate each card to its final position
//     cards.forEach((card, index) => {
//       setTimeout(() => {
//         card.style.transition = "all .5s ease-in-out";
//         card.style.transform = `translateX(${index * 90}px)`;
//       }, index * 200);
//     });
//   }

//   shuffleCards();

function applyTransformations() {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = `rotateY(${index * 5}deg) translateZ(${index * -80}px)`;
        card.style.zIndex = `${105 - index}`;
      }, index * 50); // increase the delay based on the card's index
       card.style.zIndex = `${5 - index}`;
    });
  }
  applyTransformations();

  function rotateCards() {
    currentCard.classList.remove("current");
    currentCard = cards.shift();
    cards.push(currentCard);
    currentCard.classList.add("current");

    setTimeout(() => {
      const cardRect = currentCard.getBoundingClientRect();
      const center = window.innerWidth / 2 - cardRect.width / 2;
      currentCard.style.transform = `translate(${
        center - cardRect.left
      }px, -5rem)`;
    }, 1500);

    setTimeout(() => {
      currentCard.classList.toggle("flipped");
    }, 2000);

    setTimeout(() => {
      currentCard.style.transform = "";
    }, 2500);
  }



  setInterval(rotateCards, 3000);
});
