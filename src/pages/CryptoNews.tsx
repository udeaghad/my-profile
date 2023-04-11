import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHook';
import { getCurrencies } from '../features/crypto/cryptoSlice';
import BlogCard from '../components/BlogCard';

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
          {currencyNews.data?.map((post) => {
            const { id, feedDate, link, title, description,imgURL, shareURL, source } = post
            return (
              <BlogCard 
                key={id}
                id={id}
                feedDate={feedDate}
                link={link}
                title={title}
                description={description}
                imgURL={imgURL}
                shareURL={shareURL}
                source={source} 
              />
            )

          })}
        </div>
      </div>
    </div>
  )
}

export default CryptoNews;