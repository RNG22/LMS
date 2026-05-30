import { Menu, School } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from 'react'
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DarkMode } from '../../DarkMode';

export const Navbar = () => {
    const user=true;
  return (
    <div className='h-16 px-6 bg-white border-b dark:border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'> 
    {/* desktop */}
    <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
<School size={"30"}/>
    <h1 className='hidden md:block font-extrabold text-2xl'>E-learning</h1>
        </div>
        <div className='flex items-center gap-4'>
            {user?
(<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem><Link to="/my-learning">My Learning</Link></DropdownMenuItem>
      <DropdownMenuItem><Link to="/profile">Edit Profile</Link></DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuItem><Link to="/login">Logout</Link></DropdownMenuItem>

      <DropdownMenuItem><Link to="/dashboard">Dashboard</Link></DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>):(<div className='flex items-center gap-5'>
    <Button variant="outline">Login</Button>
    <Button>Signup</Button></div>)  }  
            {/* user icon & dark mode icon */}
             <DarkMode />
        </div>
       
    </div>
    {/* mobile */}
    <div className='flex md:hidden items-center justify-between px-4 h-full'> 
        <h1 className='font-extrabold text-2xl'>E-Learning</h1>
        <MobileNavbar/></div>
   
    </div>
    )}
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
    const MobileNavbar=()=>{
        const role="instructor";
        return(
            <div>
                <Sheet>
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent className="flex flex-col">
    <SheetHeader className="flex flex-row justify-between mt-4 items-center">
      <SheetTitle>E-Learning</SheetTitle>
      <DarkMode/>
    </SheetHeader>
    <Separator/>
    <nav className="flex flex-col space-y-4 ms-2">
      <span>My Learning</span>
      <span>Edit Profile</span>
      <span>Logout</span>
    </nav>
    {role ==="instructor" && (<SheetFooter className="mt-1">
      <SheetClose asChild>
        <Button type="submit" >Dashboard</Button>
      </SheetClose>
    </SheetFooter>)}
  </SheetContent>
</Sheet>
            </div>
        )
        }
        
