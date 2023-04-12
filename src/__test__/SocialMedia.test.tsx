import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import SocialMedia from '../components/SocialMedia';

describe("SocialMedia Component", () => {
  it("should have heading", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <SocialMedia />
        </Provider>
      </BrowserRouter>
    )
      const heading = screen.getByRole('heading')
      expect(heading.innerHTML).toBe("Social Media");
  })

  it("should show social media links", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <SocialMedia />
        </Provider>
      </BrowserRouter>
    )
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(4);
      expect(links[0]).toHaveAttribute('href', 'https://github.com/udeaghad')
      expect(links[1]).toHaveAttribute('href', 'https://www.linkedin.com/in/dozie-udeagha/')
      expect(links[2]).toHaveAttribute('href', 'https://twitter.com/theodoz')
      expect(links[3]).toHaveAttribute('href', 'mailto:dozie.udeagha@gmail.com')
  })
})