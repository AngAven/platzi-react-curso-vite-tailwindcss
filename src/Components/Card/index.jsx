import React, {useState} from 'react';

const Card = ({
                  title,
                  price,
                  category,
                  image,
              }) => {
    const [errorImageLoad, setErrorImageLoad] = useState(false)

    const loadImageError = () => {
        setErrorImageLoad(true)
        console.log('error')
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'
                >{category}</span>
                <img
                    src={errorImageLoad ? '' : image}
                    alt=""
                    className={'w-full h-full object-cover rounded-lg'}
                    onError={loadImageError}
                />
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                >+
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-ligth'>{title}</span>
                <span className='text-lg font-ligth'>{price}</span>
            </p>
        </div>
    )
}

export {Card};