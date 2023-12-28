import React from 'react'

type Props = {}

const PricingCards = (props: Props) => {
  return (
    //Global container
    <div className='flex items-center justify-center min-h-screen bg-slate-800'>
        {/* Inner container */}
        <div className='flex flex-col my-6 space-y-6 
        md:flex-row md:space-x-6 md:space-y-0 md:my-0'>
            {/* column 1 */}
            <div className='bg-slate-700 rounded-xl text-white'>
                {/* Upper container */}
                <div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800'>
                    <div>Basic</div>
                    <h2 className='mt-10 font-serif text-5xl text-center'>99GB</h2>
                    <h3 className='mt-2 text-center'>$1.99/Month</h3>
                    <div className='
                        flex justify-center
                    '>
                        <a href="#"
                        className='
                            inline-block px-10 py-3 my-6 text-center border border-violet-600
                            rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800
                        '
                        >Purchase</a>
                    </div>
                </div>
            </div>
            <div>Item</div>
            <div>Item</div>
        </div>
    </div>
  )
}

export default PricingCards