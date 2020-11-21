import React from 'react'
import { Link } from 'react-router-dom'
import myPic from '../assets/mypic.jpg'
// import mightyCoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGithubSquare,
  FaGraduationCap,
  FaPhoneAlt,
} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Sidebar = () => {
  const sendEmail = () => {
    window.open('mailto:a4abubakkar@gmail.com')
  }

  const sidebar_variant = {
    hidden: {
      x: '-20vw',
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: 'spring',
      },
    },
  }

  return (
    <motion.section
      className='sidebar'
      variants={sidebar_variant}
      initial='hidden'
      animate='visible'
    >
      <img src={myPic} alt='avatar' className='sidebar__avatar' />
      <div className='sidebar__name'>
        Muhammad <span>Abubakar</span>
      </div>
      <div className='sidebar__item sidebar__title'>Frontend Developer</div>
      <a href={resume} download='resume.pdf'>
        <div className='sidebar__item sidebar__resume'>
          <FaGraduationCap className='sidebar__icon mr-2' />
          Download Resume
        </div>
      </a>
      <figure className='sidebar__social-icons mx-2'>
        <a href='https://www.facebook.com/a4abubakar' target='_blank'>
          <FaFacebookSquare className='sidebar__icon mx-2 sidebar__facebook' />
        </a>
        <a href='https://www.linkedin.com/in/a4abubakar' target='_blank'>
          <FaLinkedin className='sidebar__icon sidebar__linkdin' />
        </a>
      </figure>
      <div className='sidebar__contact'>
        <div className='sidebar__item'>
          <a href='https://github.com/mabubakar' target='_blank'>
            <FaGithubSquare className='sidebar__icon mx-1 sidebar__github' />
            Github
          </a>
        </div>
        <div className='sidebar__location'>
          <FaMapMarkerAlt className='sidebar__icon mx-1' />
          Sargodha, Pakistan
        </div>
        <div className='sidebar__item'>
          <AiOutlineMail className='sidebar__icon mx-1' />
          a4abubakkar@gmail.com
        </div>
        <div className='sidebar__item'>
          <FaPhoneAlt className='sidebar__icon mx-1' />
          +92-305-7675122
        </div>
      </div>
      <div className='sidebar__item sidebar__email' onClick={sendEmail}>
        email me
      </div>
    </motion.section>
  )
}

export default Sidebar
