
// import React from 'react'

import BookSingleCard from "./BookSingleCard"


const BooksCard = ({ books }) => {
    
    // const item = {
    //     _id: 12321312,
    //     title: 'asdf',
    //     author: 'asdf',
    //     publishYear: 1232
    // }

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <BookSingleCard key={ item._id } book={ item } />
             ))}
        </div>
    )
}

export default BooksCard