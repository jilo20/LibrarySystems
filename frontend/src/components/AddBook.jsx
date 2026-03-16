import Card from "./Card";
import Button from "./Button";
import useBooks from "./Books"; 
import { useState } from "react";

export default function AddBook() {
    const { books, fetchBooks } = useBooks(); 
    const [bookId, setBookId] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [bookGenre, setBookGenre] = useState('');

    const handleAction = async (action) => {
        const isBookExists = books.some((b) => b.bookId === bookId);
        
        const bookInfo = {
            bookId: bookId,
            bookTitle: bookTitle,
            bookGenre: bookGenre,
        };

        if (action === 'add') {
            try {
                if (!bookId.trim() || !bookTitle.trim() || !bookGenre.trim()) {
                    alert('Please fill all the fields');
                    return;
                }
                if (isBookExists) {
                    alert('Book ID already exists');
                    return;
                }

                const response = await fetch('http://localhost:8000/api/books/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bookInfo)
                });

                if (response.ok) {
                    alert('Book added successfully');
                    fetchBooks(); // Refresh the list
                    // Reset inputs
                    setBookId('');
                    setBookTitle('');
                    setBookGenre('');
                }
            } catch (error) {
                console.error('Error adding book:', error);
            }
        } else if (action === 'remove') {
            if (!bookId.trim()) {
                alert('Please enter a Book ID to remove');
                return;
            }

            const confirmDelete = window.confirm(`Delete book "${bookId}"?`);
            if (!confirmDelete) return;

            try {
                const response = await fetch(`http://localhost:8000/api/books/${bookId}/`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    alert('Book successfully removed');
                    fetchBooks();
                    setBookId('');
                    setBookTitle('');
                    setBookGenre('');
                } else {
                    alert('Book not found or could not be deleted');
                }
            } catch (error) {
                console.error('Error deleting book:', error);
            }
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center pt-30">
            <Card stylee={'w-[25em] flex flex-col items-center gap-10 py-12'} animation={false}>
                <p className="text-[2em] font-bold">Add/Remove Book</p>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                    
                    <p className="text-gray-800 text-md font-semibold">Book ID</p>
                    <input
                        type="text"
                        className="font-light border border-gray-300 border-b-4 border-b-blue-700 rounded-sm text-lg p-2 w-[20em]"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}
                    />

                    <p className="text-gray-800 text-md font-semibold">Book Title</p>
                    <input
                        type="text"
                        className="font-light border border-gray-300 border-b-4 border-b-blue-700 rounded-sm text-lg p-2 w-[20em]"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />

                    <p className="text-gray-800 text-md font-semibold">Genre</p>
                    <input
                        type="text"
                        className="font-light border border-gray-300 border-b-4 border-b-blue-700 rounded-sm text-lg p-2 w-[20em] mb-6"
                        value={bookGenre}
                        onChange={(e) => setBookGenre(e.target.value)}
                    />

                    <div className="w-full flex justify-around">
                        <Button
                            content={'Add'}
                            variant={'secondarybtn'}
                            stylee={'bg-blue-700 text-gray-100'}
                            onClick={() => handleAction('add')}
                        />
                        <Button
                            content={'Remove'}
                            variant={'secondarybtn'}
                            stylee={'bg-red-500 text-gray-100'}
                            onClick={() => handleAction('remove')}
                        />
                    </div>
                </form>
            </Card>
        </div>
    );
}