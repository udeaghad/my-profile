const AboutMe = () => {
  return (
    <div className="mt-5 p-5 bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-700">
      <div className="px flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center mb-5 p-5">About me</h1>
        <p className="mb-5 text-justify">
          My name is <span className="font-bold">Dozie Udeagha</span>. I am a Full Stack Developer with a background 
          in banking and finance. I have a bachelor's degree in Project Management, 
          MBA in Finance, and more than 7 year experience in banking operations. 
          Also, I am a graduate of Microverse, an online software 
          development school that uses real-world projects to teach JavaScript, React, 
          Redux, and Rails. Within the past year, I have worked on different tech 
          projects using HTML, CSS, Javascript, TypeScript, React, Redux, NodeJS, and 
          ExpressJS.
        </p>

        <p className="mb-5 text-justify">
          My project management and ITIL certifications have also taught me to follow a
          project from client description to deployment. I have worked on projects 
          with tight deadlines and minimal supervision and used project management tools, 
          such as Kanban and Google Calendar for my time management. I am also a strong team player 
          and believe communication is the key to successful teamwork. I have worked in 
          a cross-functional team of 2 - 6 people on projects and learned to communicate 
          directly with team members and manage conflicts arising from group tasks. 
          Remote collaboration tools like GitHub, Slack, and Zoom are very effective 
          for teamwork. I have used these tools for the past year while building projects 
          and following proper Gitflow and branching methodology. 
        </p>
      </div>
    </div>
  )
}

export default AboutMe;