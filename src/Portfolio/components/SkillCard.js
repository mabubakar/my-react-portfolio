import React from 'react'

const SkillCard = ({ id, icon, title, about }) => {
  return (
    <div key={id} className='col-lg-6'>
      <div className='skill__card'>
        <span className='skill__card-icon'>{icon}</span>
        <div className='skill-card-body'>
          <h6 className='skill-card-title'>{title}</h6>
          <p className='skill-card-content'>{about}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
