import React from 'react'
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button";
export const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-500 to to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-26 px-4 text-center'>

        <div className="mx-auto max-w-3xl">
            <h1 className='text-white text-4xl font-bold mb-4'>Find the best courses for you</h1>
            <p className='text-gray-200 dark:text-gray-400 mb-8'>Discover,Learn & Upskill with our wide range of courses</p>
            {/*  dark:bg-gray-800 */}
            <form action="" className='flex items-center bg-white rounded-full shadow-lg overflow-hidden max-w-xl max-w-xl mx-auto mb-6'> 
                {/* dark:bg-gray-100  dark:placeholder:text-gray-500 */}
                <Input type="text" placeholder='Search for courses' className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 placeholder:text-gray-400"/>
                {/* dark:hover:bg-blue-800 dark:bg-blue-700 */}
                <Button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 '>Search</Button>
            </form>
{/* dark:bg-gray-800  */}
                <Button type='submit' className='bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-200 '>Explore Courses</Button>
        </div>
    </div>
  )
}
