import React from "react";
import { books } from "../constants";

const Reading = () => {
  const currentlyReading = books.filter((book) => book.status === "currentlyReading");
  const finishedReading = books.filter((book) => book.status === "finishedReading");

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Reading</span> List
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Reading has always been a passion of mine. Below is a list of books I’ve enjoyed reading recently and would highly recommend.
        </p>
      </div>

      <div className='py-10'>
        <h3 className='subhead-text'>Currently Reading</h3>

        <div className='mt-8 flex flex-col gap-8'>
          {currentlyReading.map((book, index) => (
            <div
              className='block-container w-full p-5 bg-white rounded-lg shadow-md'
              key={index}
            >
              <div className='flex gap-5'>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className='w-full h-auto object-cover rounded-lg'
                />
                <div>
                  <h4 className='text-lg font-semibold'>{book.title}</h4>
                  <p className='text-slate-500 text-sm'>by {book.author}</p>
                  <p className='mt-3 text-slate-600'>{book.description}</p>
                  <p className='mt-3 text-slate-600'>{book.gerne}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10'>
        <h3 className='subhead-text'>Finished Reading</h3>

        <div className='mt-8 grid gap-4 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3'>
          {finishedReading.map((book, index) => (
            <div
              className='block-container p-3 bg-white rounded-lg shadow-md'
              key={index}
            >
              <div className='flex flex-col gap-2'>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className='w-full h-32 object-cover rounded-lg'
                />
                <div>
                  <h4 className='text-sm font-semibold'>{book.title}</h4>
                  <p className='text-slate-500 text-xs'>by {book.author}</p>
                   <p className='mt-3 text-slate-600'>{book.gerne}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reading;
