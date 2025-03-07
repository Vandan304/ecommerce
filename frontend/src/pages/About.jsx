import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit tempore reprehenderit tempora maxime rerum. Enim voluptatem ratione ab, numquam quidem nesciunt cupiditate necessitatibus labore veniam ducimus facere modi explicabo obcaecati repellat temporibus! Consequuntur explicabo qui culpa. Facilis aut eaque numquam.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo magnam nesciunt harum natus incidunt molestias error? Adipisci explicabo odio rerum? Commodi atque delectus beatae ab officiis aliquid consequatur, in pariatur quasi, dolorum repudiandae!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam labore maxime nisi ipsam quibusdam explicabo et voluptatem. Amet eos esse, quia itaque doloremque, mollitia eius nisi tempora aut magnam ipsam nemo obcaecati. Illum, pariatur? Commodi praesentium blanditiis temporibus molestiae reiciendis.</p>
          </div>

      </div>
       <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
       </div>
       <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assuarance:</b>
              <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat, corrupti voluptatem fuga perspiciatis blanditiis! </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat, corrupti voluptatem fuga perspiciatis blanditiis! </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est fugiat, corrupti voluptatem fuga perspiciatis blanditiis! </p>
          </div>
       </div>
       <NewsletterBox/>
    </div>
  )
}

export default About
