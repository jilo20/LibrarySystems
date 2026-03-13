import { useState, useEffect } from "react";

export default function useBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return books;
}