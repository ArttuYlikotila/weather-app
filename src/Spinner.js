import React from 'react';

export default function Spinner() {
   return (
      <div className='text-center mt-4'>
         <div className='spinner-border' role='status' />
         <p className='mt-2'>Loading data...</p>
      </div>
   );
}