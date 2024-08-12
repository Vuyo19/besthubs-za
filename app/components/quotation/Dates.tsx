'use client'

import React from 'react' 

interface DatesProps {
    invoiceNumber: string, 
    invoiceDate: string,
    dueDate: string
}

const Dates: React.FC<DatesProps> = ({
    invoiceNumber, 
    invoiceDate,
    dueDate
}) => {
  return (
    <>
         <article className='my-5 flex items-end justify-end'> 
            <ul> 
                <li> <span className='font-bold'> Invoice number:  </span> {invoiceNumber}  </li>
                <li> <span className='font-bold'> Invoice date </span> {invoiceDate} </li>
                <li> <span className='font-bold'> Due Date: </span> {dueDate}  </li>
            </ul>
        </article>  
    </>
  )
}

export default Dates