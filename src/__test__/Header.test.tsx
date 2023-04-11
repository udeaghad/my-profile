import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import Header from '../components/Header';

describe("Header Component", () => {
  it("Should display Profile on the nav bar", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <Header />
        </Provider>
      </BrowserRouter>
    )

    const navlink = screen.getAllByRole('link')
    expect(navlink[0].innerHTML).toBe("Profile")
  })

  it("Should display Projects on the nav bar", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <Header />
        </Provider>
      </BrowserRouter>
    )

    const navlink = screen.getAllByRole('link')
    expect(navlink[1].innerHTML).toBe("Projects")
  })

  it("Should display 'Crypto Blog' on the nav bar", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <Header />
        </Provider>
      </BrowserRouter>
    )

    const navlink = screen.getAllByRole('link')
    expect(navlink[2].innerHTML).toBe("Crypto Blog")
  })

  it("Should display image on the nav bar", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <Header />
        </Provider>
      </BrowserRouter>
    )

    const navBarImage = screen.getByRole('img')
    expect(navBarImage).toHaveAttribute('src', 'Dozie-profile-pix.jpg')
  })

  
})