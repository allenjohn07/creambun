import Image from 'next/image'
import React from 'react'
import Float from './fancy/float'

const AboutComponent = () => {
  return (
    <div className="mx-auto space-y-5">
          <div className='flex justify-center'>
            {/* <Image
              src="/allen.png"
              alt="Allen John"
              width={200}
              height={200}
              className="rounded-md mx-auto"
            /> */}
            <Float>
            <div className="sm:w-40 sm:h-40 my-5 h-32 w-32 md:w-48 md:h-48 shadow-2xl relative overflow-hidden">
              <img
                src={"/allen.png"}
                className="w-full rounded-md h-full object-cover absolute top-0 left-0"
              />
            </div>
          </Float>
          </div>
          <div className='tracking-tighter max-w-screen-lg mx-auto'>
            <h2 className="text-2xl font-semibold text-start">Hi there!</h2>
            <p className="text-lg mb-4">
              I'm Allen John, the sole force behind this service. With a passion for web development and video editing, I've made it my mission to provide top-notch services to clients who need a personal touch in their projects.
            </p>
            <p className="text-lg mb-4">
              With years of experience in both fields, I bring a unique blend of technical expertise and creative vision to every project I undertake.
            </p>
          </div>
        </div>
  )
}

export default AboutComponent