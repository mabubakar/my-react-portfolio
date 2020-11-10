import React from 'react'
import { skills } from '../data'
import SkillCard from '../components/SkillCard'
import { motion } from 'framer-motion'

const About = () => {
  const about_variants = {
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
    <motion.section
      className='about'
      variants={about_variants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h6 className='about__intro'>
        I describe myself as someone who's persistant, a quick learner and loves
        problem solving by using simple and scalable solutions.
      </h6>
      <div className='container about__container'>
        <h6 className='about__heading'>What i offer</h6>
        <div className='row'>
          {skills.map(skill => {
            return <SkillCard {...skill} key={skill.id} />
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default About
