import React from 'react';
import Form from './Form';

const Page: React.FC = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center bg-slate-50 template-page'>
        <h1 className='mb-4 text-2xl font-bold text-stone-700'>Number Base Conversion</h1>
        <Form/>
        <p className="text-center text-gray-500 text-sm">
          &copy;2022 Marina Santana. GitHub: marina-santana.
        </p>
    </div>
  )
}

export default Page;