import { FC } from "react";
import { IProjectCard } from "../pages/Projects";

const ProjectCard: FC<IProjectCard> = (props) => {
  const { name, description, stack, image, source_code, demo } = props;
  return (
    <div className="mb-2 flex flex-col justify-center items-center gap-2 border-2 m-[10%] border-[#fea02a] p-[5%] rounded-md drop-shadow-md hover:-translate-y-4 duration-200">
      <h4 className="text-xl font-bold">{name}</h4>

      <div className="hover:animate-pulse">
        <img src={image} alt={name} />
      </div>

      

      <p className="text-justify">{description}</p>

       
      <div className="flex gap-2 mt-2 flex-wrap justify-center items-center">
        {stack.map(item => (
          <span className="border-transparent bg-[#fea02a] p-2 outline-inherit rounded-md">{item}</span>
        ))}
      </div>

      <div className="flex justify-between w-[100%] mt-2">
        <a href={source_code} target="_blank" rel="noreferrer">
          <button className="border-transparent bg-[#ff6dcd] py-3 px-5 rounded-full text-white font-bold text-lg">Code</button>
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          <button className="border-transparent bg-[#ff6dcd] py-3 px-10 rounded-full text-white font-bold text-lg" >Demo</button>
        </a>
      </div>
      
    </div>
  )
}

export default ProjectCard;