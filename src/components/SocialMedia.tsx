import { BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';


const SocialMedia = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center font-bold text-xl">
        Social Media
      </h2>

      <div className='flex justify-between items-center px-12 mt-5'>
        <a href='https://github.com/udeaghad' target='_blank' rel="noreferrer">
          <BsGithub className='text-2xl'/>
        </a>
        <a href='https://www.linkedin.com/in/dozie-udeagha/' target='_blank' rel="noreferrer">
          <BsLinkedin className='text-2xl'/>
        </a>

        <a href='https://twitter.com/theodoz' target='_blank' rel="noreferrer">
          <BsTwitter className='text-2xl'/>
        </a>

        <a href='mailto:dozie.udeagha@gmail.com' target='_blank' rel="noreferrer">
          <IoMdMail className='text-2xl'/>
        </a>
        

      </div>
    </div>
  )
}

export default SocialMedia;