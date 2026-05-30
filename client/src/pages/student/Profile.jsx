import React, { useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent } from '@/components/ui/dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { Button } from '../../components/ui/button';
import { DialogHeader } from '@/components/ui/dialog';
import { DialogTitle } from '@/components/ui/dialog';
import { DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { Course } from './Course';




export const Profile = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
  return (
    <div className='max-w-4xl mx-auto px-4  my-24'>
        <h1 className='font-bold text-2xl text-center md:text-left'>PROFILE</h1>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
            <div className='flex flex-col items-center'>
                 <Avatar className='w-24 h-24 md:w-32 md:h-32 mb-4'>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/125043891?s=400&u=1c8e5b9a0c3d2f1b4e7a9c8e5b6a7c8d9e0f1a&v=4" alt="Instructor Avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
            </div>
            <div>
                <div  className='mb-2'>
                <h1 className='text-xl text-gray-900 font-semibold dark:text-gray-100'>
                Name:<span className='font-normal text-gray-700 dark:text-gray-300 ml-2'> Rutuja Gaikwad</span>
                </h1>
                </div>
                <div  className='mb-2'>
                <h1 className='text-xl text-gray-900 font-semibold dark:text-gray-100'>
                Email:<span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>rutuja.gaikwad@example.com</span>
                </h1>
                </div>
                <div  className='mb-2'>
                <h1 className='text-xl text-gray-900 font-semibold dark:text-gray-100'>
                Role:<span className='font-normal text-gray-700 dark:text-gray-300 ml-2'> Instructor</span>
                </h1>
                </div>
                <Dialog>
    <DialogTrigger asChild>
        <Button size="sm" className="mt-2">
            Edit Profile
        </Button>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you're done.
            </DialogDescription>
        </DialogHeader>
        <div className='grid py-4 gap-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="name">Name</Label>
                <Input type="text" placeholder="Name" value="Rutuja Gaikwad" className="col-span-3" />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="profilePicture" >Profile Picture</Label>
                <Input id="profilePicture" type="file" accept="image/*"  className="col-span-3" />
            </div>
        </div>
        <DialogFooter>
            <Button disabled={isLoading} type="submit">{
            isLoading ?<><Loader2 className="animate-spin mr-2 h-4 w-4" />
            Please wait
            </>  : 'Save changes'
            }</Button>
        </DialogFooter>
    </DialogContent>
  </Dialog>
        </div>
    </div>
    <div>
        <h1 className='font-medium text-lg'>Courses you are enrolled in</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
{enrolledCourses.length === 0 ? (
    <div className='text-center col-span-full text-gray-500'>You are not enrolled in any courses yet.</div>
) : (
    enrolledCourses.map((course) => (
       <Course key={course.id} {...course} />
    ))
)}
        </div>
    </div>
    </div>
  )
}
