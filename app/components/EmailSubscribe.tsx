import React from 'react';

const EmailSubscribe: React.FC = () => {
    return (
       <div className="flex items-center justify-center h-screen bg-zinc-700">
        <div className='bg-zinc-800 p-2 mx-4 rounded-xl'>
            <div className='flex flex-col md:flex-row rounded-l-xl'>
                <img src="images/image.jpg" alt="" 
                className='md:w-1/3 rounded-xl h-80 md:h-68 md:rounded-l-xl md:rounded-r-none
                transform hover:scale-105 hover:rounded-xl duration-200'/>

                {/* Content */}
                <div className='p-6 md:p-12'>
                    <h2 className='font-serif text-xl font-medium text-center text-white md:text-left'>Get video and photo editing tips in your inbox</h2>
                    <p className='px-3 max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left md:px-0'> Learn new techniques from this course. 
                    Sign up for the News letter. Sign up for the News letter</p>
                    <div className='flex flex-col flex-wrap mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0'>
                        <input type="text" name="email" id="" placeholder='Enter your Email' 
                        className='p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600
                        placeholder:text-center md:text-left placeholder:md:text-left focus: outline-none'/>

                        <button className='
                            px-5 py-3 text-xs bg-lime-500 hover:bg-lime-700 hover:text-white duration-500
                            rounded-md text-zinc-800
                        '>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default EmailSubscribe;
