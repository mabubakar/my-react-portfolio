import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className='projectrCard col-md-6 col-lg-4 my-2'>
      <figure className='projectCard__wrapper'>
        <Link to={deployed_url} target='_blank'>
          <img src={image} alt={name} className='projectCard__image' />
        </Link>
        <div className='projectCard__title'>
          <Link to={github_url} target='_blank'>
            <FaGithubSquare className='projectCard__icon' />
          </Link>
          {name}
        </div>
      </figure>
    </div>
  )
}

export default ProjectCard
