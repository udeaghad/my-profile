import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import Footer from '../components/Footer';


it('Should display the links', () => {
  
  render(    
    <BrowserRouter>
      <Provider store={store}>
       <Footer />
      </Provider>
    </BrowserRouter>
  )
  
  const text = screen.getByText("© 2022 Dozie Udeagha. All Rights Reserved"); 
  expect(text).toBeInTheDocument();
})