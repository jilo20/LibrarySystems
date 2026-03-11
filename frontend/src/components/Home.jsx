import logo from '../assets/librarybg.png';
import Button from './Button';
import Card from './Card';

function Home({children}){
    return(
        <div className="w-full min-h-screen flex flex-col">
            <Hero/>
            <BodyContent/>
        </div>
    );
}


function Hero(){
    return (
        <div className='grid grid-cols-3'>
            <div className='flex flex-col py-10 px-20 items-center justify-center gap-5'>
                <p className='text-[3em] font-black text-gray-800'>Discover Knowledge at the Heart of USJR</p>
                <p className='text-gray-800'>
                    The Quadricentennial Campus Library is a hub for learning, research, and collaboration. With a wide range of academic resources, quiet study spaces, and modern facilities, it supports students and faculty in their pursuit of knowledge and excellence.</p>
                <Button content={'Borrow a Book'} variant={'primarybtn'}></Button>
            </div>
            <div className='col-span-2'>
                <img src={logo} className='object-cover w-full h-full'/>
            </div>
        </div>
    );
}

function BodyContent(){
    return (
        <div className='p-10 flex'>
            <Card>
                <p className='font-bold text-[2em]'>Borrowed Books</p>
            </Card>
        </div>
    );
}

export default Home;