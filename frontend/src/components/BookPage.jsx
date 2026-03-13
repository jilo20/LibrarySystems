import Card from "./Card";
import Button from "./Button";
import { useEffect, useState } from "react";


function BookPage(){
    return (
        <>
            
        </>
    );
}

export function BorrowBook(){
    const date = new Date().toISOString().slice(0,10);
    const [transaction, setTransaction] = useState([]);
    console.log('date: ',date)

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const studentId = formData.get("studentId");
        const bookId = formData.get("bookId");

        const data = {
            student: studentId,
            book: bookId,
            date: date,
            isReturned: false
        };

        fetch("http://127.0.0.1:8000/api/transactions/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Transaction saved:", data);
            setTransaction(prev => [...prev, data]);
        })
        .catch(err => console.log("Error:", err));
    };


    return (
        <div className="w-full min-h-screen flex justify-center pt-30">
            <div>
                <Card stylee={'w-[25em] flex flex-col items-center gap-10 py-12'} animation={false}>
                    <p className="text-[2em] font-bold">Borrow Book</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <p className="text-gray-800 text-md font-semibold">Student ID</p>
                        <div className="focus:scale-103">
                            <input type="text" name="studentId" className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2 w-[20em]"/>
                       </div> 
                       <p className="text-gray-800 text-md font-semibold">Book ID</p>
                       <div className="focus:scale-103 mb-6">
                            <input type="text" name="bookId" className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2 w-[20em]"/>
                       </div> 
                       <Button content={'Submit'} variant={'secondarybtn'} isSubmit={true}></Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default BookPage;