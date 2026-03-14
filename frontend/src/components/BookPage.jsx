import Card from "./Card";
import Button from "./Button";
import useTransactions from "./Transactions";
import { useEffect, useState } from "react";

function BookPage() {
    return (
        <>
        </>
    );
}

export function BorrowBook() {
    //states for inputs
    const [bookId, setBookId] = useState('');
    const [studentId, setStudentId] = useState('');
    const transactions = useTransactions();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];

        if(transactions.length === 0) console.log('transactions nai');
        const isBorrowed = transactions.some(
            (transact) => transact.book === bookId
        );

        if(!isBorrowed){
            console.log('BookID: ',bookId,'\nStudentID: ',studentId);
            fetch('http://localhost:8000/api/transactions')
        }
        else
            alert('Already Borrowed');
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
                            isSubmit={true}
                        />
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default BookPage;