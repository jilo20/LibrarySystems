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
    const transactions = useTransactions();
    console.log(transactions);

    transactions.forEach(tr => {
        if(tr.book == 1){
            console.log('Transaction BookID:  ',tr.book)
        }
    });

    return (
        <div className="w-full min-h-screen flex justify-center pt-30">
            <div>
                <Card
                    stylee={'w-[25em] flex flex-col items-center gap-10 py-12'}
                    animation={false}
                >
                    <p className="text-[2em] font-bold">Borrow Book</p>
                    <form className="flex flex-col gap-2">
                        <p className="text-gray-800 text-md font-semibold">Student ID</p>
                        <div className="focus:scale-103">
                            <input
                                type="text"
                                name="studentId"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2 w-[20em]"
                            />
                        </div>

                        <p className="text-gray-800 text-md font-semibold">Book ID</p>
                        <div className="focus:scale-103 mb-6">
                            <input
                                type="text"
                                name="bookId"
                                className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2 w-[20em]"
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