import { useState, useEffect } from "react";
import Button from "./Button";
import useBooks from "./Books";

export default function BookList() {
  const { books, fetchBooks } = useBooks();

  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState([]);
  let count = 0;

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    let tempBooks = books;

    if (searchTerm) {
      tempBooks = tempBooks.filter((book) =>
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (genreFilter !== "All") {
      tempBooks = tempBooks.filter(
        (book) => book.bookGenre.toLowerCase() === genreFilter.toLowerCase()
      );
    }

    setFilteredBooks(tempBooks);
  }, [books, searchTerm, genreFilter]);

  return (
    <>
      <div className="w-[80%] flex justify-between mt-10 gap-4 px-8 mx-auto">
        <input
          type="text"
          placeholder="Search by book name..."
          className="border-2 border-gray-200 rounded-md flex-1 p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-4">
          <select
            className="bg-gray-300 px-4"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Education">Education</option>
            <option value="Horror">Horror</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>

      <div className="w-full flex mt-10 justify-center">
        <table className="w-3/4 border-box bg-red-100">
          <thead className="bg-yellow-300">
            <tr className="h-14">
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Book Genre</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredBooks.map((book, index) => (
                <tr
                key={book.bookId}
                className={`h-10 ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
                >
                <td className="px-4 py-2">{book.bookId}</td>
                <td className="px-4 py-2">{book.bookTitle}</td>
                <td className="px-4 py-2">{book.bookGenre}</td>
                </tr>
            ))}
           </tbody>
        </table>
      </div>
    </>
  );
}