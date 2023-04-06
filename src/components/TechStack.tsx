import { FC } from 'react';
import { IStack } from '../pages/ProfilePage';

const TechStack:FC<IStack> = (props) => {
  const {name, logo } =props
  return (
    <div>
      <div className="">
        <img src={logo} alt={name} className="aspect-[6/5] object-cover"/>
      </div>
      </div>
  )
}

export default TechStack;