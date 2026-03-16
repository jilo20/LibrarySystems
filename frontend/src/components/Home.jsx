import { useState } from 'react';
import logo from '../assets/librarybg.jpg';
import useBooks from './Books';
import Button from './Button';
import Card from './Card';
import useTransactions from './Transactions';

function Home({ children }) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Hero />
            <BodyContent />
        </div>
    );
}


function Hero() {
    return (
        <div className='grid md:grid-cols-2'>
            <div className='flex flex-col py-10 px-20 items-center justify-center gap-5 snapper'>
                <p className='text-[3em] font-black text-gray-800'>Discover Knowledge at the Heart of USJR</p>
                <p className='text-gray-800 text-base'>
                    The Quadricentennial Campus Library is a hub for learning, research, and collaboration. With a wide range of academic resources, quiet study spaces, and modern facilities, it supports students and faculty in their pursuit of knowledge and excellence.</p>
                <Button content={'Borrow a Book'} variant={'primarybtn'}></Button>
            </div>
            <div className="relative">
                <img src={logo} className="object-cover aspect-square w-full h-full" />

                <div className="absolute w-3/4 inset-0 bg-gradient-to-r from-white"></div>
            </div>
        </div>

    );
}

function BodyContent() {
    const { books } = useBooks();
    const { transactions } = useTransactions();

    const activeTransactions = transactions.filter(t => t.isReturned === false);

    const transactionsBookTitles = activeTransactions.map((t) => {
        const book = books.find(b => b.bookId === t.book);
        return book ? book.bookTitle : "Unknown Title";
    });
    

    return (
        <div className='p-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-around'>
            <Card stylee={'h-[34em] w-[34em] smooth-avg'}>
                <div className='w-full text-center text-gray-800 flex flex-col'>
                    <p className='text-green-700 font-bold text-[2.5em] p-4'>Borrowed Books</p>
                    <div className='bg-gray-50 flex-1 p-6'>
                        <ul className='flex flex-col gap-2'>
                            {transactions.length > 0 && transactionsBookTitles.map((transact,index) => (
                                <li key={index} className='font-light text-lg'>{transact}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>
            <Card stylee={'h-[34em] w-[34em] smooth-avg'}>
                <div className='w-full text-center text-gray-800 flex flex-col'>
                    <p className='text-green-700 font-bold text-[2.5em] p-4'>Most Borrowed Books</p>
                    <div className='bg-gray-50 flex-1 p-6'>
                        <ul className='flex flex-col gap-2 text-lg'>
                            <li className='font-light'>Mathematics: From Ancient to Modern</li>
                            <li className='font-light'>Physics for the Curious Mind</li>
                            <li className='font-light'>Biology: Life and Evolution</li>
                            <li className='font-light'>Historia de la Ciencia</li>
                            <li className='font-light'>Introduction to Philosophy</li>
                            <li className='font-light'>Les Fondements de la Chimie</li>
                            <li className='font-light'>World Geography: Patterns and Processes</li>
                            <li className='font-light'>Computer Science Essentials</li>
                            <li className='font-light'>El Arte de la Literatura</li>
                            <li className='font-light'>Environmental Studies: Our Planet Today</li>
                        </ul>
                    </div>
                </div>
            </Card>
            <Card stylee={'h-[34em] w-[34em] smooth-avg'}>
                <div className='w-full text-center text-gray-800 flex flex-col'>
                    <p className='text-green-700 font-bold text-[2.5em] p-4'>Popular Books</p>
                    <div className='bg-gray-50 flex-1 p-6'>
                        <ul className='flex flex-col gap-2 text-lg
                        '>
                            <li className='font-light'>Mathematics: From Ancient to Modern</li>
                            <li className='font-light'>Physics for the Curious Mind</li>
                            <li className='font-light'>Biology: Life and Evolution</li>
                            <li className='font-light'>Historia de la Ciencia</li>
                            <li className='font-light'>Introduction to Philosophy</li>
                            <li className='font-light'>Les Fondements de la Chimie</li>
                            <li className='font-light'>World Geography: Patterns and Processes</li>
                            <li className='font-light'>Computer Science Essentials</li>
                            <li className='font-light'>El Arte de la Literatura</li>
                            <li className='font-light'>Environmental Studies: Our Planet Today</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    );
}
export default Home;