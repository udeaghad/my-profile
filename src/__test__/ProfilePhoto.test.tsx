import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import ProfilePhoto from '../components/ProfilePhoto';

describe("ProfilePhoto Component", () => {
  it("Should display image", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <ProfilePhoto />
        </Provider>
      </BrowserRouter>
    )

    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", "Dozie-profile-pix.jpg")
    expect(image).toHaveAttribute("alt", "profile-pix")

  })
})