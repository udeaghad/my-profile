import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import TechStack from '../components/TechStack';

describe("TechStack Component", () => {  
  it("Should display tech stack logo", () => {
    const stack = {
      name: 'HTML',
      logoImg: 'html-logo.png',
    }
    const {name, logoImg } = stack
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <TechStack name={name} logo={logoImg} />
        </Provider>
      </BrowserRouter>
    )

    const logo = screen.getByRole('img')
    expect(logo).toHaveAttribute("src", logoImg)
    expect(logo).toHaveAttribute("alt", name)
  })
})