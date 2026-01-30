/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books

      */


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = true; // default value
    }

    // Marks the book as not available
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is already borrowed.`);
        }
    }

    // Marks the book as available
    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }

    // Returns book details
    getInfo() {
        console.log(this.title+" by "+this.author+ "  "+this.pages+" pages");
    }

    // Checks if book is long
    isLongBook() {
        return this.pages > 300;
    }
}

const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("Atomic Habits", "James Clear", 250);
const book5 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 336);

// Store in array
const library = [book1, book2, book3, book4, book5];

// Display info of all books
console.log("All Books Information:");
library.forEach(book => {
    console.log(book.getInfo());
});

//Borrow 2 books and show their availability status
book1.borrow();
book3.borrow();

console.log("\nAvailability After Borrowing:");
library.forEach(book => {
    console.log(`${book.title}: ${book.isAvailable}`);
});

//Return 1 book and show updated status
book1.returnBook();

console.log("\nAvailability After Returning:");
library.forEach(book => {
    console.log(`${book.title}: ${book.isAvailable}`);
});

//Count how many books are "long books" (more than 300 pages)
const longBooksCount = library.filter(book => book.isLongBook()).length;

console.log(`\nNumber of Long Books: ${longBooksCount}`);

//List all available books

console.log("\nAvailable Books:");

const availableBooks = library.filter(book => book.isAvailable);

availableBooks.forEach(book => {
    console.log(book.getInfo());
});
