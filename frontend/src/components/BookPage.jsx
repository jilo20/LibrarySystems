import Card from "./Card";
import Button from "./Button";

function BookPage(){
    return (
        <>
            <BorrowBook/>
        </>
    );
}

function BorrowBook(){

    const sendTransaction = (book) => {
        fetch('http://127.0.0.1:8000/api/transactions')
    }

    return (
        <div className="w-full min-h-screen flex justify-center pt-30">
            <div>
                <Card stylee={'w-[25em] flex flex-col items-center gap-10 py-12'} animation={false}>
                    <p className="text-[2em] font-bold">Borrow Book</p>
                    <form action="" method="post" className="flex flex-col gap-2">
                        <p className="text-gray-800 text-md font-semibold">Student ID</p>
                        <div className="focus:scale-103">
                            <input type="text" name="studentId" className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2"/>
                       </div> 
                       <p className="text-gray-800 text-md font-semibold">Book ID</p>
                       <div className="focus:scale-103 mb-6">
                            <input type="text" name="studentId" className="font-light smooth-avg border border-gray-300 border-b-4 border-b-green-700 rounded-sm text-lg p-2"/>
                       </div> 
                       <Button content={'Submit'} variant={'secondarybtn'} isSubmit={true}></Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default BookPage;