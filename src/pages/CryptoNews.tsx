import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHook';
import { getCurrencies } from '../features/crypto/cryptoSlice';
import Moment from 'react-moment';

const CryptoNews = () => {

  const dispatch = useAppDispatch()

  useEffect(() =>{
    dispatch(getCurrencies())
  }, [dispatch]);

  const { currencyNews } = useAppSelector(state => state )


  return(
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Crypto Blog</h2>
          <p className="mt-2 text-lg leading-8">
            Do you follow the news about fintech and cryptos? You can get the latest information about fintech 
            and cryptocurrencies here. I am interested in fintech and cryptos and give the latest news about them 
            for an enthusiast to learn more about the happenings in the industry.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {currencyNews.data?.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <Moment format='MMMM Do YYYY'>
                  {post.feedDate}
                </Moment>
                <a
                  href={post.link}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.link}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.imgURL} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.shareURL}>
                      <span className="absolute inset-0" />
                      {post.source}
                    </a>
                  </p>
                  
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CryptoNews;