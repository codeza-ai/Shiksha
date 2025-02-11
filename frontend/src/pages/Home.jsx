import Header from '../components/Header';
// import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className='w-full pt-16'>
                <div id="hero" className='w-full h-screen flex justify-center items-center'>
                    <h1>Hey there</h1>
                </div>
                <div className='flex justify-center items-center w-full h-fit pt-5 p-4'>
                    <div className='w-1/2 p-4 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed recusandae dignissimos repudiandae. Impedit, voluptatibus animi! Id vero facilis unde fuga reprehenderit dolores neque, consequatur suscipit molestiae necessitatibus fugiat. Illum dignissimos quas minus placeat sapiente doloremque porro voluptas eligendi ducimus?
                    </div>
                    <div className='w-1/2 p-4'>
                        
                    </div>
                </div>
                <div className='flex justify-center items-center w-full h-fit pt-5 p-4'>
                    <div className='w-1/2 p-4'>
                        
                    </div>
                    <div className='w-1/2 p-4 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed recusandae dignissimos repudiandae. Impedit, voluptatibus animi! Id vero facilis unde fuga reprehenderit dolores neque, consequatur suscipit molestiae necessitatibus fugiat. Illum dignissimos quas minus placeat sapiente doloremque porro voluptas eligendi ducimus?
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;