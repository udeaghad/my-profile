import ProfilePhoto from "../components/ProfilePhoto";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import SocialMedia from "../components/SocialMedia";
import History from "../components/History";

export interface IStack {
  name: string;
  logo: string;
}

const ProfilePage = () => {
  const stacks: IStack[] = [
    {name: "HTML", logo: "html-logo.png"},
    {name: "CSS", logo: "css-logo.png"},
    {name: "JavaScript", logo: "js-logo.png"},
    {name: "TypeScript", logo: "ts-logo.png"},
    {name:"React", logo:"logo192.png"},
    {name: "NodeJs", logo: "node-logo.png"},
    {name: "MongoDB", logo: "mongodb-logo.png"},
    {name: "PostgreSQL", logo: "postgesql-logo.png"}
  ]
  return (
    <div>
      <div>
        <ProfilePhoto />
      </div>

      <div>
        <AboutMe />
      </div>

      <div>
        <h2 className="text-xl font-bold text-center pt-5">My Stacks</h2>
        <div className="grid grid-cols-4 p-3 gap-2">
          {stacks.map(stack => {
            const {name, logo } = stack
            return (
              <TechStack key={name} name={name} logo={logo} />
            )
          })}
        </div>
      </div>
      
      <div>
        <History />
      </div>

      <div>
        <SocialMedia />
      </div>


      
    </div>
  )
}

export default ProfilePage;