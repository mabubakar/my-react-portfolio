import React from 'react'
import { languages, tools } from '../data'
import Bar from '../components/Bar'
import { motion } from 'framer-motion'

const Resume = () => {
  const resume_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      className='container resume'
      variants={resume_variants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='row'>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>Education</h4>
          <div className='resume-card__body'>
            <h5 className='resume-card__title'>BS Computer Science</h5>
            <p className='resume-card__name'>Punjab University(2012-2016)</p>
            {/* <p className='resume-card__details'></p> */}
          </div>
        </div>
        <div className='col-lg-6 resume-card'>
          <h4 className='resume-card__heading'>Experience</h4>
          <div className='resume-card__body'>
            <h5 className='resume-card__title'>Freelance</h5>
            {/* <p className='resume-card__name'>TCS (2020)</p> */}
            <p className='resume-card__details'>
              I work as a Freelance and develope websites for client
            </p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-6 resume-languages'>
          <h5 className='reume-language__heading'>Language and Framework</h5>
          <div className='resume-language__body mt-3'>
            {languages.map(language => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className='col-lg-6 resume-languages'>
          <h5 className='reume-language__heading'>Tools and Softwares</h5>
          <div className='resume-language__body mt-3'>
            {tools.map(tool => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume
