"use client"
import React from 'react'
import Countdown from 'react-countdown'

const offerEndsIn=new Date("2025-01-02")

const countDown = () => {
  return (
    <Countdown className='font-bold text-5xl text-yellow-300' date={offerEndsIn}/>
  )
}

export default countDown