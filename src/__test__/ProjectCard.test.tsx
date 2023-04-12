import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard';

describe("ProjectCard Component", () => {
  const project = {
    id: 1,
    name: 'Pick And Drop App',
    description: 'This app enables companies/individuals in small-scale delivery businesses to subscribe, receive, monitor, and update orders received from their clients. The clients can also create orders on the app and select any company for delivery services.',
    stack: ['TypeScript', 'JavaScript', 'Node.js', 'MongoDB'],
    image: 'pick-and-drop-app.png',
    source_code: 'https://github.com/udeaghad/Pick-and-drop',
    demo: 'https://pick-and-drop.onrender.com/api-docs',
  }

  const { id, name, description, stack, image, source_code, demo } = project

  it("Should display the project name", () => {
    
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <ProjectCard  
          id={id}
          name={name} 
           description={description} 
          stack={stack} 
          image={image} 
          source_code={source_code}
          demo={demo}
        />
        </Provider>
      </BrowserRouter>
    )

    const projectName = screen.getByRole("heading")
    expect(projectName.innerHTML).toBe(name)
  })

  it("Should display the project image", () => {
    
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <ProjectCard  
          id={id}
          name={name} 
           description={description} 
          stack={stack} 
          image={image} 
          source_code={source_code}
          demo={demo}
        />
        </Provider>
      </BrowserRouter>
    )

    const projectImage = screen.getByRole("img")
    expect(projectImage).toBeInTheDocument()
    expect(projectImage).toHaveAttribute('src', image)
  })


  it("Should display the project description", () => {
    
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <ProjectCard  
          id={id}
          name={name} 
           description={description} 
          stack={stack} 
          image={image} 
          source_code={source_code}
          demo={demo}
        />
        </Provider>
      </BrowserRouter>
    )

    const projectDescription = screen.getByTestId('description')
    expect(projectDescription.innerHTML).toBe(description)
    
  })

  it("Should display the card buttons", () => {
    
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <ProjectCard  
          id={id}
          name={name} 
           description={description} 
          stack={stack} 
          image={image} 
          source_code={source_code}
          demo={demo}
        />
        </Provider>
      </BrowserRouter>
    )

    const projectButtons = screen.getAllByRole('button')
    expect(projectButtons).toHaveLength(2)
    expect(projectButtons[0].innerHTML).toBe("Code")
    expect(projectButtons[1].innerHTML).toBe("Demo")
    
  })
})