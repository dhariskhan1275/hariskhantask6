// script.js
document.addEventListener('DOMContentLoaded', function () {
    const bookList = document.getElementById('book-list');
    const addBookForm = document.getElementById('add-book-form');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResult = document.getElementById('search-result');

    const books = [
        "Hacking: The Art of Exploitation by Jon Erickson ISBN: 978-1593271442",
        "Introduction to the Theory of Computation by Michael Sipser ISBN: 978-1133187790",
        "Eloquent JavaScript: A Modem Introduction to Programming by Marijn Haverbeke ISBN: 978-1593279509"
    ];

    // Function to render the book list
    function renderBookList(bookArray) {
        bookList.innerHTML = '';
        bookArray.forEach(book => {
            const li = document.createElement('li');
            li.textContent = book;
            bookList.appendChild(li);
        });
    }

    // Function to add a new book
    function addBook(title, author, isbn) {
        const newBook = `${title} by ${author} ISBN: ${isbn}`;
        if (!books.includes(newBook)) {
            books.push(newBook);
            renderBookList(books);
        } else {
            alert('Book already exists!');
        }
    }

    // Function to search for books
    function searchBooks(searchTerm) {
        const filteredBooks = books.filter(book => book.toLowerCase().includes(searchTerm.toLowerCase()));
        renderBookList(filteredBooks);
    }

    // Event listener for form submission
    addBookForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        if (title && author && isbn) {
            addBook(title, author, isbn);
            addBookForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Event listener for search button
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value;
        searchBooks(searchTerm);
    });
});
