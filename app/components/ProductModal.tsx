import React from 'react'

type Props = {}

const ProductModal = (props: Props) => {
  return (
    //Global container
    <div className='flex items-center justify-center bg-slate-100 min-h-screen'>
        {/* card container */}
        <div className='
        flex 
        flex-col
        p-6 m-3 space-y-10
        bg-white rounded-2xl shadow-2xl
        md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16
         '>
        {/* Image container */}
         <div>
            <img className='mx-auto w-60 duration-200 hover:scale-105'
            src="images/headphone.png" alt="" />
        </div>

        {/* Content container */}
         <div className='flex flex-col space-y-6'>
            {/* Label and title container */}
            <div className='flex flex-col mb-3 space-y-3 text-center md:text-left'>
                {/* Label */}
                <div>
                    <div className='inline-block bg-black text-white text-sm px-3 py-1 rounded-full'>
                        Free shipping
                    </div>
                </div>
                {/* Title */}
                <div className='max-w-sm text-2xl font-medium'
                >This is Product title Beatuiful cat like headset pink colour</div>

                {/* price container */}
                <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'>
                    <p className='line-through'>$899</p>
                    <p className='text-5xl font-bold '>$799</p>
                    <p className='text-sm font-light text-gray-400'>This offer is valid only limited time</p>
                </div>

                {/* Add to cart */}
                <div className='group'>
                    <button className='w-full transition-all duration-150 bg-blue-700 text-white rounded-lg border-b-8 border-b-blue-700
                    group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:bg-blue-700
                    group-hover:shadow-lg
                    '>
                        <div className='px-8 py-4 bg-blue-500 rounded-lg duration-150 group-hover:bg-blue-700'>
                            Add to cart
                        </div>
                    </button>
                </div>
                {/* Buy Now
                <div className='group'>
                    <button className='w-full transition-all duration-150 bg-red-700 text-white rounded-lg border-b-8 border-b-red-700
                    group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-red-700 group-hover:bg-red-700
                    group-hover:shadow-lg
                    group-hover:scale-90
                    '>
                        <div className='px-8 py-4 bg-red-500 rounded-lg duration-150 group-hover:bg-red-700'>
                            Buy Now
                        </div>
                    </button>
                </div> */}

                {/* stocks */}
                <div className='flex items-center space-x-3 group'>
                    <div className='bg-green-400 w-3 h-3 rounded-full group-hover:animate-pulse'></div>
                    <div className='text-sm'>50+ stocks available</div>
                </div>

                {/* Bottom buttons container */}

                <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
                    <button className='flex items-center justify-center px-5 py-4 border-2 space-x-4 border-gray-300
                    rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:bg-opacity-30 transition-all'>
                        <img src="images/weight.png" alt="" className='w-8'/>
                        <span>Add to cart</span>
                    </button>
                </div>

                
               

                
            </div>

         </div>
        </div>
    </div>
  )
}

export default ProductModal