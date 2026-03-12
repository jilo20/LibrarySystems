import logo from '../assets/librarybg.jpg';
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
        <div className='grid md:grid-cols-2'>
            <div className='flex flex-col py-10 px-20 items-center justify-center gap-5 snapper'>
                <p className='text-[3em] font-black text-gray-800'>Discover Knowledge at the Heart of USJR</p>
                <p className='text-gray-800 text-base'>
                    The Quadricentennial Campus Library is a hub for learning, research, and collaboration. With a wide range of academic resources, quiet study spaces, and modern facilities, it supports students and faculty in their pursuit of knowledge and excellence.</p>
                <Button content={'Borrow a Book'} variant={'primarybtn'}></Button>
            </div>
            <div className="relative">
                <img src={logo} className="object-cover aspect-square w-full h-full"/>

                <div className="absolute w-3/4 inset-0 bg-gradient-to-r from-white"></div>
            </div>
        </div>
        
    );
}

function BodyContent(){
    return (
        <div className='p-10 flex'>
            <Card stylee={'w-[40em] h-[50em]'}>
                <div className='w-full text-center'>
                    <p className='font-bold text-[2em] mb-4'>Borrowed Books</p>
                    <ul>
                        <li>Noli me Tingali</li>
                        <li>El Filipino Burismo</li>
                    </ul>
                </div>

                
            </Card>
        </div>
    );
}

export default Home;