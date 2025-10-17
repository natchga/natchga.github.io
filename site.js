window.addEventListener("DOMContentLoaded", () => {
  const hours = new Date().getHours(); // get the current hour

  const isMorning = hours >= 4 && hours < 12;   // is it morning?
  const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
  const isEvening = hours >= 17 || hours < 4;   // is it evening?

  let message = "";

  if (isMorning) {
    message = "Good morning!";
  } else if (isAfternoon) {
    message = "Good afternoon!";
  } else if (isEvening) {
    message = "Good evening!";
  }

  const welcomeDiv = document.getElementById("welcome");
  welcomeDiv.textContent = message;

  localStorage.setItem("It's a secret to everybody.", "the cake is a lie, easy portal reference, give me the brownie points");

  // To Do List below
  const todoList = document.querySelector(".todo-list");
  const input = document.querySelector("#new-todo");
  const addButton = document.querySelector("#add-todo");

  let todos = JSON.parse(localStorage.getItem("todo-list")) || [];

  const renderTodos = () => {
    todoList.innerHTML = "";
    todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo.text;
      todoList.append(li);
    });
  };

  renderTodos();

  addButton.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    todos.push({ text, completed: false });
    localStorage.setItem("todo-list", JSON.stringify(todos));

    input.value = "";
    renderTodos();
  });


//Carousel below
  const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ].map(url => { (new Image()).src = url; return url });

  const images = document.querySelectorAll('#carousel img');
  let currentImage = 0;

  const showImages = () => {
    const offset = currentImage % urls.length;
    images.forEach((image, index) => {
      const imageIndex = (index + offset + urls.length) % urls.length;
      image.src = urls[imageIndex];
    });
  };

  showImages();

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  prevBtn.addEventListener('click', () => {
    currentImage = (currentImage - 1 + urls.length) % urls.length;
    showImages();
  });

  nextBtn.addEventListener('click', () => {
    currentImage = (currentImage + 1) % urls.length;
    showImages();
  });

  setInterval(() => {
    // code to run EVERY 5 seconds
    currentImage = (currentImage + 1) % urls.length;
    showImages();
  }, 5000);

// Pokemon assignment code below
const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 150) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon;
};

const renderPokemon = (pokemon) => {
    const container = document.getElementById('pokemon');

    container.innerHTML = '<h2>Random Pokemon</h2>';
    
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;
    img.style.width = '150px';
    img.style.height = '150px';
    
    const name = document.createElement('p');
    name.textContent = `#${pokemon.id} ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;
    name.style.fontWeight = 'bold';
    name.style.marginTop = '10px';
    
    const details = document.createElement('p');
    details.textContent = `Height: ${pokemon.height / 10}m, Weight: ${pokemon.weight / 10}kg`;
    
    container.append(img, name, details);
};

getRandomPokemon().then(pokemon => {
    renderPokemon(pokemon);
});
});
