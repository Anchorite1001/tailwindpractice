import React, { useState } from 'react';

const ImageSearch = ({ setSearchTerm }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(term)
    }

    return(
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input onChange={e => setTerm(e.target.value)} type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder='Search Image...'/>
                    <button onClick={(e) => onSubmit(e)}className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-gray py-1 px-2 rounded" type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;