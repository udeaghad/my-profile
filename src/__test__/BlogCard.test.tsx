import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store';
import BlogCard from '../components/BlogCard';

describe('BlogCard Component', () => {
  const props = {
    id: '123',
    feedDate: '11223555',
    link: 'https://news-link...',
    title: 'Blog News',
    description: 'the description here...',
    imgURL: 'https://image url',
    shareURL: ',https://shared url',
    source: 'news company',
  }
  
  it('Should display the heading', () => {
    const { id, feedDate, link, title, description,imgURL, shareURL, source } = props
    const { getByRole } = render(    
      <BrowserRouter>
        <Provider store={store}>
        <BlogCard 
          id={id}
          feedDate={feedDate}
          link={link}
          title={title}
          description={description}
          imgURL={imgURL}
          shareURL={shareURL}
          source={source} 
        />
        </Provider>
      </BrowserRouter>
    )
    
    const heading = getByRole('heading')    
    expect(heading.innerHTML).toContain("Blog News")
  })

  it('Should display the description', () => {
    const { id, feedDate, link, title, description,imgURL, shareURL, source } = props
    const { getByRole } = render(    
      <BrowserRouter>
        <Provider store={store}>
        <BlogCard 
          id={id}
          feedDate={feedDate}
          link={link}
          title={title}
          description={description}
          imgURL={imgURL}
          shareURL={shareURL}
          source={source} 
        />
        </Provider>
      </BrowserRouter>
    )
    
    const paragraph = getByRole('paragraph')    
    expect(paragraph.innerHTML).toContain("the description here...")
  })
  it('Should display the image', () => {
    const { id, feedDate, link, title, description,imgURL, shareURL, source } = props
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <BlogCard 
          id={id}
          feedDate={feedDate}
          link={link}
          title={title}
          description={description}
          imgURL={imgURL}
          shareURL={shareURL}
          source={source} 
        />
        </Provider>
      </BrowserRouter>
    )
    
    const imageURL = screen.getByRole('img'); 
    expect(imageURL).toBeInTheDocument();
    expect(imageURL).toHaveAttribute('src', imgURL)
  })

  it('Should display the links', () => {
    const { id, feedDate, link, title, description,imgURL, shareURL, source } = props
    render(    
      <BrowserRouter>
        <Provider store={store}>
        <BlogCard 
          id={id}
          feedDate={feedDate}
          link={link}
          title={title}
          description={description}
          imgURL={imgURL}
          shareURL={shareURL}
          source={source} 
        />
        </Provider>
      </BrowserRouter>
    )
    
    const linkeElement = screen.getAllByRole('link'); 
    expect(linkeElement[0]).toHaveAttribute('href', link)
  })
})