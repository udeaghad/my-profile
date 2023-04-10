import ProjectCard from "../components/ProjectCard";

export interface IProjectCard {
  id: number;
  name: string
  description: string
  stack: string[];
  image: string;
  source_code: string;
  demo: string
}

const Projects = () => {

  const projects: IProjectCard[] = [
    {
      id: 1,
      name: 'Pick And Drop App',
      description: 'This app enables companies/individuals in small-scale delivery businesses to subscribe, receive, monitor, and update orders received from their clients. The clients can also create orders on the app and select any company for delivery services.',
      stack: ['TypeScript', 'JavaScript', 'Node.js', 'MongoDB'],
      image: 'pick-and-drop-app.png',
      source_code: 'https://github.com/udeaghad/Pick-and-drop',
      demo: 'https://pick-and-drop.onrender.com/api-docs',
    },
    {
      id: 2,
      name: 'Hotel Booking App',
      description: 'This web application also allows users to find their favorite Hotel around the world and reserve it for a specific date, find information about a hotel on the details page, and cancel a reservation. The project was to test the knowledge of the MERN stack.',
      stack: ['NodeJS', 'ExpressJS', 'MongoDB', 'React', 'Redux'],
      image: 'mern-hotel-api.png',
      source_code: 'https://github.com/udeaghad/mern-hotel-api',
      demo: 'https://booooka-hotel-app.netlify.app/',
    },
    {
      id: 3,
      name: 'Crypto Tracker',
      description: 'This project is about building a mobile web application to check a list of metrics (numeric values) which I created using React and Redux. I selected an API that provides numeric data about cryptocurrency exchange and then developed the web app using the API.',
      stack: ['React', 'Redux', 'Jest', 'JavaScript'],
      image: 'crypto-app.png',
      source_code: 'https://github.com/udeaghad/crypto-market-app',
      demo: 'https://crypto-exchange-market.netlify.app/',
    },

    {
      id: 4,
      name: 'Game of throne movie app',
      description: 'This project is about building a mobile web application to check a list of movies and their details using React and Redux. I selected an API that provides numeric data about movies and then built the web app around it.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest'],
      image: 'movie-app.png',
      source_code: 'https://github.com/udeaghad/Movie-app',
      demo: 'https://game-of-throne-movie.netlify.app/',
    },

    {
      id: 5,
      name: "Space Travelers' Hub",
      description: 'In this Project, We worked with live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      stack: ['React', 'Redux', 'HTML/CSS', 'JavaScript'],
      image: 'space-travellers-app.png',
      source_code: 'https://github.com/udeaghad/space-travelers-hub',
      demo: 'https://galaxy-travellers.netlify.app/',
    },

    {
      id: 6,
      name: 'Maths Calculator',
      description: 'This project was to learn React components, React props, and React state. It was later updated to Handle events in a React app, use React life cycle methods, and understand the mechanism of the lifting state. Also, React hooks were used to refactor the components, and Routing was implemented for this SPA.',
      stack: ['HTML/CSS', 'JavaScript', 'React'],
      image: 'maths-calculator-app.png',
      source_code: 'https://github.com/udeaghad/my-maths-calculator',
      demo: 'https://my-maths-calculator.netlify.app/',
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">My Projects</h1>

      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {projects.map(project => {
          const { id, name, description, stack, image, source_code, demo } = project
          return (
            <ProjectCard  
              key={id} 
              id={id}
              name={name} 
              description={description} 
              stack={stack} 
              image={image} 
              source_code={source_code}
              demo={demo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects;