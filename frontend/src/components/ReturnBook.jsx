import useStudents from "./Students";
import useTransactions from "./Transactions";
import useBooks from "./Books";
import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

export default function ReturnBook(){

    const students = useStudents();
    const { transactions, fetchTransactions } = useTransactions();
    const books = useBooks();
    const [bookId, setBookId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!bookId.trim()){alert('Please fill all the fields.'); return;}
        const sendData = {
            isReturned: true
        };
        
        const transactionExist = transactions.some(t => t.book === bookId && t.isReturned === false);
        if(!transactionExist) {alert('Book is not borrowed'); return;}
        console.log(bookId);

        //REQUERST PATCH AHHAHAHAHAHA

        // if(transactionId !== NULL) {
        //     const response = await fetch(`http://localhost:8000/api/transactions/${transactionId}/`, {
        //         method: 'PATCH',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(sendData)
        //     });
        // }


        // if(response.ok){
        //     fetchTransactions();
        //     alert("Book returned");
        // }
    }

    return (
        <div className="w-full min-h-screen flex justify-center pt-30">
            <div>
                <Card
                    stylee={'w-[25em] flex flex-col items-center gap-10 py-12'}
                    animation={false}
                >
                    <p className="text-[2em] font-bold">Return Book</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <p className="text-gray-800 text-md font-semibold">Book ID</p>
                        <div className="focus:scale-103">
                            <input
                                type="text"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-yellow-400 rounded-sm text-lg p-2 w-[20em]"
                                value={bookId}
                                onChange={(e)=>setBookId(e.target.value)}
                            />
                        </div>

                        <Button
                            content={'Submit'}
                            variant={'secondarybtn'}
                            stylee={'bg-yellow-400 text-gray-800'}
                            isSubmit={true}
                        />
                    </form>
                </Card>
            </div>
        </div>
    );
}