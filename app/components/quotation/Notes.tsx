'use client'

import React from 'react' 

interface NotesProps {
    notes?: string
}

const Notes: React.FC<NotesProps> = ({
    notes
}) => {
  return (
    <>
        <div className='mb-5 px-2 pt-4'> 
            <p className='lg:w-full text-sm'> Your order will be delivered to the specified address within 5-7 business days.
             Please ensure that someone is available to receive the delivery.  
             Please note that all sales are final. We do not offer refunds or exchanges for any products/services once the purchase has been completed. 
             Please review your order carefully before making the payment. Pay to the bank account indicated below. </p>
        </div>
    </>
  )
}

export default Notes