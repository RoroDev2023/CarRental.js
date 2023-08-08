import React from 'react'


const Heading = () => {
  return (
    <div>
        <section class="bg-[#fff]">
            <div class="text-black py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-800 bg-[#00A67E] rounded-full hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-2 bg-blue-800">New</span> <span class="text-sm font-medium ">ChatGPT is integrated. Check it out and make your voyage even better</span> 
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </a>
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Book a Ride. <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-purple-600"> Anywhere,</span><span class="underline-offset-[18px] bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 bg-[length:100%_5px] bg-no-repeat bg-bottom ">Anytime</span></h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-500">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                
            </div>
        </section>
    </div>
  )
}

export default Heading