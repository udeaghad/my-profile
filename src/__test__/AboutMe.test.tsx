import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import AboutMe from '../components/AboutMe';

describe('AboutMe Component', () => {
  it('Should display the heading', () => {
    const { getByRole } = render(    
      <BrowserRouter>
        <Provider store={store}>
         <AboutMe />
        </Provider>
      </BrowserRouter>
    )
    
    const heading = getByRole('heading')    
    expect(heading.innerHTML).toBe("About me")
  })

  it('Should display name inthe first paragraph', () => {
    const { getAllByRole} = render(    
      <BrowserRouter>
        <Provider store={store}>
          <AboutMe />
        </Provider>
      </BrowserRouter>
    )

    const text = getAllByRole('paragraph')
    expect(text[0].innerHTML).toContain("Dozie Udeagha")
  })

  it('Should display content of the second paragraph', () => {
    const { getAllByRole} = render(    
      <BrowserRouter>
        <Provider store={store}>
          <AboutMe />
        </Provider>
      </BrowserRouter>
    )

    const text = getAllByRole('paragraph')
    expect(text[1].innerHTML).toContain("project management")
  })
})