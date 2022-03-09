import React from 'react';
import Form from './Form';

const Page: React.FC = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center bg-slate-50 template-page'>
        <h1 className='mb-4 text-2xl font-bold text-stone-700'>Number Bases Convertion</h1>
        <Form/>
    </div>
  )
}

export default Page;