import Card from "./Card";
import Button from "./Button";
import useTransactions from "./Transactions";
import useStudents from "./Students";
import useBooks from "./Books";
import { useEffect, useState } from "react";

export default function BorrowBook() {
    //states for inputs
    const [bookId, setBookId] = useState('');
    const [studentId, setStudentId] = useState('');
    const {students} = useStudents();
    const { transactions, fetchTransactions } = useTransactions();
    const {books} = useBooks();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];

        if(!bookId.trim() || !studentId.trim()){alert('Please fill all the fields.'); return;}

        const studentExists = students.find(s => s.studentId === studentId);
        console.log(students);
        if (!studentExists) { alert("Error: Student ID does not exist in our records."); return;}

        // Check Book Existence
        const bookExists = books.find(b => b.bookId === bookId);
        if (!bookExists) { alert("Error: Book ID not found."); return;}
        //Check isBorrowed
        const isBorrowed = transactions.some(transact => String(transact.book) === String(bookId)
        && transact.isReturned === false);
        if(isBorrowed) {alert('Book already borrowed'); return;}

        console.log('BookID: ',bookId,'\nStudentID: ',studentId);
        let newTransaction = {
            student: studentId,
            book: bookId,
            date: currentDate,
            isReturned: false,
        }
        try {
            const response = await fetch('http://localhost:8000/api/transactions/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTransaction)
                
            })
            
            const data = await response.json();

            if(response.ok){
                alert('Transaction Successful po.');
                setBookId('');
                setStudentId('');
                fetchTransactions();
            }else{
                console.log('Error Details: ', data);

                if (data.student) {
                    alert(`Student Error: ${data.student[0]}`); // "Invalid pk... object does not exist"
                } else if (data.book) {
                    alert(`Book Error: ${data.book[0]}`);
                } else {
                    alert("Submission failed. Check console for details.");
                }
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Could not connect to the server.");
        }
    
    }

    return (
        <div className="w-full min-h-screen flex justify-center pt-30">
            <div>
                <Card
                    stylee={'w-[25em] flex flex-col items-center gap-10 py-12'}
                    animation={false}
                >
                    <p className="text-[2em] font-bold">Borrow Book</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <p className="text-gray-800 text-md font-semibold">Student ID</p>
                        <div className="focus:scale-103">
                            <input
                                type="text"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2 w-[20em]"
                                value={studentId}
                                onChange={(e)=>setStudentId(e.target.value)}
                            />
                        </div>

                        <p className="text-gray-800 text-md font-semibold">Book ID</p>
                        <div className="focus:scale-103 mb-6">
                            <input
                                type="text"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2 w-[20em]"
                                value={bookId}
                                onChange={(e)=>setBookId(e.target.value)}
                            />
                        </div>

                        <Button
                            content={'Submit'}
                            variant={'secondarybtn'}
                            stylee={'bg-green-700 text-gray-100'}
                            isSubmit={true}
                        />
                    </form>
                </Card>
            </div>
        </div>
    );
}