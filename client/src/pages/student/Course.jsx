import React from 'react'
import { Card } from '@/components/ui/card'
import { CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const Course = () => {
  return (
    <Card className="bg-white shadow-lg hover:shadow-2xl tranform hover:scale-105  transition-all duration-300 rounded-lg overflow-hidden">
        <div className="relative">
            <img src="https://tech.sparkfabrik.com/images/content/nextjs/nextjs-logo.jpg" alt="Course Image" className="w-full h-36 object-cover rounded-t-lg"/>
        </div>
        <CardContent className='px-5 py-4 space-y-1'>
<h1 className='hover:underline font-bold text-lg truncate' >Next.js Course</h1> 
<div className='flex items-center justify-between '>
<div className='flex items-center gap-3'>
    <Avatar className='w-8 h-8  '>
        <AvatarImage src="https://avatars.githubusercontent.com/u/125043891?s=400&u=1c8e5b9a0c3d2f1b4e7a9c8e5b6a7c8d9e0f1a&v=4" alt="Instructor Avatar" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <h1 className='font-medium text-sm'>Rutuja -dev</h1>
</div>
<Badge className="bg-blue-600 px-2 py-1 text-xs rounded-full text-white">Advance</Badge>
</div>
<div className='text-lg font-bold '>
    <span>₹499</span>
</div>
        </CardContent>

    </Card>
  )
}
