'use client'
import React from 'react' 

interface ClientDetailsProps {
    clientName: string, 
    clientEmail: string, 
    clientAddress: string
}

const ClientDetails: React.FC<ClientDetailsProps> = ({
    clientName, 
    clientEmail, 
    clientAddress
}) => {
  return (
    <>
        <div className='mt-5'> 
            <h2 className='text-xl uppercase'> {clientName} </h2> 
            <p> {clientEmail} </p>
            <p> {clientAddress} </p>
        </div> 
    </>
  )
}

export default ClientDetails