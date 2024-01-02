import React from 'react'

type Props = {}

const ImageGallery = (props: Props) => {
  return (
    //Global container
    <div className='flex items-center justify-center bg-cyan-50 min-h-screen'>
        {/* card container */}
        <div className='bg-white p-6 m-3 space-y-10 shadow-xl rounded-3xl md:p-40'>
            {/* Menu container */}
            <div className='flex flex-col items-center justify-center space-y-3
            md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end'>
                {/* Menu items */}
                <div className='group'>
                    <a href="#">Vector</a>
                    <div className='border-b-2 border-black mx-2 mt-2 opacity-0
                    transform scale-x-0
                    transition-transform ease-in-out
                    group-hover:scale-x-100
                    group-hover:opacity-100'></div>
                </div>
                <div className='group'>
                    <a href="#">Illustrations</a>
                    <div className='border-b-2 border-black mx-2 mt-2 opacity-0
                    transform scale-x-0
                    transition-transform ease-in-out
                    group-hover:scale-x-100
                    group-hover:opacity-100'></div>
                </div>
                <div className='group'>
                    <a href="#">Images</a>
                    <div className='border-b-2 border-black mx-2 mt-2 opacity-0
                    transform scale-x-0
                    transition-transform ease-in-out
                    group-hover:scale-x-100
                    group-hover:opacity-100'></div>
                </div>
                <div className='group'>
                    <a href="#">Icons</a>
                    <div className='border-b-2 border-black mx-2 mt-2 opacity-0
                    transform scale-x-0
                    transition-transform ease-in-out
                    group-hover:scale-x-100
                    group-hover:opacity-100'></div>
                </div>
            </div>

            {/* Search Container */}
              <div className='flex flex-col justify-between space-y-3 md:flex-row md:flex-y-0'>
                {/* Input and SVG container */}
                  <div className='flex justify-between border-b'>
                      <input type="text" placeholder='Search' className='ml-6 border-none outline-none placeholder:font-thin md:w-80'/>
                      <button>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                      </button>
                  </div>
                  <button className='bg-black text-white text-lg px-10 py-3 rounded-lg 
                  border border-black shadow-2xl duration-200
                  hover:bg-white hover:text-black'>
                    Upload</button>

              </div>

              {/* Gallery container */}
              <div className='grid gap-4 md:grid-cols-3'>
                {/* Gallery items */}
                <div className='relative group'>
                    <img src="images/image1.jpg" alt="" className='w-72'/>
                    <div className='
                        absolute bottom-0 left-0 right-0
                        p-2 px-4 text-white bg-black opacity-0
                        bg-opacity-40
                        duration-500
                        group-hover:opacity-100 
                    '>
                        <div className='flex justify-between w-full'>
                            <div className='font-normal'>
                                <p>Abstract Painting</p>
                                <p>245 likes -35 Shares</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="images/bookmark.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <img src="images/image2.jpg" alt="" className='w-72'/>
                    <div className='
                        absolute bottom-0 left-0 right-0
                        p-2 px-4 text-white bg-black opacity-0
                        bg-opacity-40
                        duration-500
                        group-hover:opacity-100 
                    '>
                        <div className='flex justify-between w-full'>
                            <div className='font-normal'>
                                <p>Abstract Painting</p>
                                <p>245 likes -35 Shares</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="images/bookmark.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <img src="images/image3.jpg" alt="" className='w-72'/>
                    <div className='
                        absolute bottom-0 left-0 right-0
                        p-2 px-4 text-white bg-black opacity-0
                        bg-opacity-40
                        duration-500
                        group-hover:opacity-100 
                    '>
                        <div className='flex justify-between w-full'>
                            <div className='font-normal'>
                                <p>Abstract Painting</p>
                                <p>245 likes -35 Shares</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="images/bookmark.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <img src="images/image4.jpg" alt="" className='w-72'/>
                    <div className='
                        absolute bottom-0 left-0 right-0
                        p-2 px-4 text-white bg-black opacity-0
                        bg-opacity-40
                        duration-500
                        group-hover:opacity-100 
                    '>
                        <div className='flex justify-between w-full'>
                            <div className='font-normal'>
                                <p>Abstract Painting</p>
                                <p>245 likes -35 Shares</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="images/bookmark.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <img src="images/image5.jpg" alt="" className='w-72'/>
                    <div className='
                        absolute bottom-0 left-0 right-0
                        p-2 px-4 text-white bg-black opacity-0
                        bg-opacity-40
                        duration-500
                        group-hover:opacity-100 
                    '>
                        <div className='flex justify-between w-full'>
                            <div className='font-normal'>
                                <p>Abstract Painting</p>
                                <p>245 likes -35 Shares</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="images/bookmark.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <img src="images/image6.jpg" alt="" className='w-72'/>
                    <div className='
                        absolute bottom-0 left-0 right-0
                        p-2 px-4 text-white bg-black opacity-0
                        bg-opacity-40
                        duration-500
                        group-hover:opacity-100 
                    '>
                        <div className='flex justify-between w-full'>
                            <div className='font-normal'>
                                <p>Abstract Painting</p>
                                <p>245 likes -35 Shares</p>
                            </div>
                            <div className='flex items-center'>
                                <img src="images/bookmark.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
               
              </div>

              <div>

              </div>

        </div>
    </div>
  )
}

export default ImageGallery