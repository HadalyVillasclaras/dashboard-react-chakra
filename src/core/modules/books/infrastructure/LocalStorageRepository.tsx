import { Book } from "../domain/Book";
import { BookRepoInterface } from "../domain/BookRepoInterface";

export function createLocalStorageBookRepository(): BookRepoInterface {
  // crea el repo
	return {
		create,
    update, 
    getById, 
    getAll
	};
}

function create(Book: Book) {
	const books = getAllFromLocalStorage();

	books.set(book.id, book); // set es como un array pero con items unicos
	localStorage.setItem("books", JSON.stringify(Array.from(books.entries())));
}

function getAllFromLocalStorage(): Map<string, Book> {
  //esto es xk en localstorage se tiene que ir guaradndo todo
  // es una funcion privada. no la exponemos al repo
	const books = localStorage.getItem("books");

	if (books === null) {
		return new Map();
	}

	const map = new Map(JSON.parse(books) as Iterable<[string, Book]>);

	return map;
}

function update() {

}

function getById() {

}

function getAll() {

}