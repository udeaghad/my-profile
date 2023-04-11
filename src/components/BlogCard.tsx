import { FC } from 'react';
import Moment from 'react-moment';

export interface IBlogProps {
  id: string;
  feedDate: string;
  link: string;
  title: string;
  description: string;
  imgURL: string;
  shareURL: string;
  source: string;
}

const BlogCard: FC<IBlogProps> = (props) => {
  const { feedDate, link, title, description,imgURL, shareURL, source } = props
  return (
    <>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <Moment format='MMMM Do YYYY'>
            {feedDate}
          </Moment>
          <a
            href={link}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {title}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
            <a href={link}>
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400" role="paragraph">{description}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src={imgURL} alt="" className="h-10 w-10 rounded-full bg-gray-50" role='img' />
          <div className="text-sm leading-6">
            <p className="font-semibold">
              <a href={shareURL}>
                <span className="absolute inset-0" />
                {source}
              </a>
            </p>
            
          </div>
        </div>
      </article>
    </>
  )
}

export default BlogCard