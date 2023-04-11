import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import History from '../components/History';

describe("History Component", () => {
  it("Should display heading", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <History />
        </Provider>
      </BrowserRouter>
    )

    const heading = screen.getByText("Professional History")
    expect(heading).toBeInTheDocument()
  })

  it("Should display job role", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <History />
        </Provider>
      </BrowserRouter>
    )

    const jobRole = screen.getByText("Full Stack Developer")
    expect(jobRole).toBeInTheDocument()
  })

  it("Should display a company", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <History />
        </Provider>
      </BrowserRouter>
    )

    const company = screen.getByText("System Trackers Technology")
    expect(company).toBeInTheDocument()
  })

  it("Should display a date", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <History />
        </Provider>
      </BrowserRouter>
    )

    const date = screen.getByText("May 2022 - Nov 2022")
    expect(date).toBeInTheDocument()
  })

    it("Should display company logo", () => {
    render(    
      <BrowserRouter>
        <Provider store={store}>
         <History />
        </Provider>
      </BrowserRouter>
    )

    const image = screen.getAllByRole("img")
    expect(image).toHaveLength(4)
  })
})