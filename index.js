import Book from "./modules/Book.js";

  const addButton = document.querySelector('#add-book');
  const removeButton = document.querySelectorAll('.remove');
  
  addButton.addEventListener('click', Book.addBook);
  removeButton.forEach((element) => element.addEventListener('click', Book.removeBook));
  