const cardsData = [
    { image: "Img/1.jpg", text: "Испуганный кот" },
    { image: "Img/2.jpg", text: "Игривый котенок на даче" },
    { image: "Img/3.jpg", text: "Удивленная кошка" },
    { image: "Img/4.jpg", text: "Голубоглазая кошка в сирени" },
    { image: "Img/5.jpg", text: "Котята в лукошке" },
    { image: "Img/6.jpg", text: "Пушистая кошка" },
  ];
  const cardTemplate = document.getElementById('cardTemplate');
  const cardSection = document.querySelector(".card-section");
  let loadIndex = 0;
  function loadCardImage(card, imageUrl) {
    const img = card.querySelector('.card-image');
    const spinner = card.querySelector('.loading-spinner');
    setTimeout(() => {
        img.src = imageUrl;
        img.onload = () => {
            spinner.style.display = 'none'; // Скрыть спиннер
            img.style.display = 'block'; // показать изображение
        };
    }, 1000 * loadIndex); // Задержска 1с
  }
  function createCard(imageData) {
    const card = cardTemplate.content.cloneNode(true);
    const img = card.querySelector('.card-image');
    const text = card.querySelector('.card-text');
    const heartIcon = card.querySelector('.heart-icon');
    const initialHeartSrc = heartIcon.src;
    const likedHeartSrc = 'img/Like.png';
    text.textContent = imageData.text;
    let isLiked = false;
    heartIcon.addEventListener('click', () => {
        isLiked = !isLiked;
        heartIcon.src = isLiked ? likedHeartSrc : initialHeartSrc;
    });
    loadCardImage(card, imageData.image); // Запускаем изображения с задежской
    return card;
  }
  cardsData.forEach(cardData => {
    const card = createCard(cardData);
    cardSection.appendChild(card);
    loadIndex++; // переход по картинкам
  });