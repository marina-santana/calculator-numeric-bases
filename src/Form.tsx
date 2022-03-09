
import React from 'react';
import { useState } from 'react';
import { NumericBases } from './typings/global';
import { handleChangeBinary, handleChangeDecimal, handleChangeHexadecimal, handleChangeOctal } from './utils/conversion';

const Form: React.FC = () => {
    const [numericTypes, setNumeriTypes] = useState<NumericBases>({
    binary: '0',
    decimal: '0',
    octal: '0',
    hexadecimal: '0'
  });

  return (
    <div className="w-full max-w-sm ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex mb-4">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Binary:
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" 
              type="text" 
              value={numericTypes.binary}
              onChange={event => handleChangeBinary(event.target.value, setNumeriTypes)}
              />
          </div>
        </div>
        <div className="flex md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Decimal:
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" 
              type="text" 
              value={numericTypes.decimal}
              onChange={event => handleChangeDecimal(event.target.value, setNumeriTypes)}
              />
          </div>
        </div>
        <div className="flex md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Octal:
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" 
              type="text" 
              value={numericTypes.octal}
              onChange={event => handleChangeOctal(event.target.value, setNumeriTypes)}
              />
          </div>
        </div>
        <div className="flex md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Hexadecimal:
            </label>
          </div>
          <div className="md:w-2/3">
            <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" 
              type="text" 
              value={numericTypes.hexadecimal}
              onChange={event => handleChangeHexadecimal(event.target.value, setNumeriTypes)}
              />
          </div>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 Marina Santana. GitHub: marina-santana.
      </p>
    </div>
  );
}

export default Form;
