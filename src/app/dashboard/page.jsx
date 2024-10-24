"use client"
import NavBar from '@/components/NavBar'
import WeatherCard from '@/components/WeatherCard'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [data,setData] = useState()
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("data"))
        console.log(storedData,"storedData...")
        if(storedData?.length > 0){
            setData(storedData)
        }    
    },[])
console.log(".....")
  return (
    <>
    <NavBar />
    <div className='flex md:flex-row flex-col p-2'>
        {
            data?.map((item) => { return(
                <div key={item?.id} className='m-4'>
                <WeatherCard    
                weather={item?.weather}
                places={item?.places}
                country={item?.country} />
                </div>
            )
            })
        }
    </div>
    </>
  )
}

export default page