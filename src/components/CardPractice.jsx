"use client"
import React, { useRef, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaHeart } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
const CardPractice = () => {
  const[liked,setLiked] = useState(false)
  const iconRef = useRef(null)
  const handleChange = ()=>{
    setLiked(!liked)
    if(iconRef.current){
      iconRef.current.style.color  = 'red';
    }
  }
  return (
    <div className='p-3 flex justify-center items-center  min-h-screen'>
      <Card className='w-[400px]'>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src="/images/user.png" alt="" className='h-10 w-10 rounded-full' />
              <div>
                <h2 className='font-semibold'>Azlan Siddiqui</h2>
                <p className='text-[12px] text-gray-600'>Post 3h ago</p>
              </div>
            </div>
            <button onClick={handleChange} className='h-10 w-10 border flex justify-center items-center rounded-lg'>
              <FaHeart ref={iconRef} />
            </button>
          </div>

        </CardHeader>
        <CardContent>
          <h2 className='text-2xl font-bold '>Looking for SM manager to create posts accross various platforms</h2>
          <p className='text-[16px] text-gray-500 mt-1 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        
          <div className='flex gap-2 items-center justify-start mt-1'>
            <p className='bg-violet-300 px-1 text-[16px]'>SMM</p>
            <p className='bg-violet-300 px-1 text-[16px]'>Growth Strategy</p>
            <p className='bg-violet-300 px-1 text-[16px]'>Startup</p>
            <p className='bg-violet-300 px-1 text-[16px]'>Brand</p>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col items-start'>
          <h2 className='font-bold text-[30px]'>$150 - $200/h</h2>
          <p className='text-[14px] text-gray-500 mb-1'>Hourly save</p>
          <button className='bg-blue-600 px-2 py-3 w-full rounded-lg text-white flex justify-center items-center gap-2'>
            <FaBolt /> <p>Apply</p>
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardPractice