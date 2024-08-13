'use client'

import React from 'react'
import Footer from '../components/quotation/Footer'
import Notes from '../components/quotation/Notes'
import Table from '../components/quotation/Table'
import Header from '../components/quotation/Header'
import MainDetails from '../components/quotation/MainDetails'
import ClientDetails from '../components/quotation/ClientDetails'
import Dates from '../components/quotation/Dates'
import { useState, useRef } from 'react'  
import { FieldValues, useForm } from 'react-hook-form';
import { Input } from '../components/inputs/input'
import ReactToPrint from "react-to-print"; 

const Quotation = () => { 

 const [showInvoice, setShowInvoice] = useState(false)

 const [notes, setNotes] = useState("");  

 const {register, handleSubmit, watch, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
      clientName: '', // Set the default value here
      clientEmail: '', 
      clientAddress: '',
      invoiceNumber: 'FNR900POPL', 
      invoiceDate: '11 Auguest 2024',
      dueDate: '26 August 2024'
    }
  }); 

 const clientName = watch('clientName')
 const clientEmail = watch('clientEmail')
 const clientAddress = watch('clientAddress')
 const invoiceNumber = watch('invoiceNumber')
 const invoiceDate = watch('invoiceDate')
 const dueDate = watch('dueDate')  

 const componentRef = useRef(null); 

  return (
    <div className='m-5 p-5 mt-[100px] md:max-w-xl md:mx-auto xl:max-w-4xl lg:max-w-2xl lg:mx-auto rounded shadow-lg'>
      
      {showInvoice ? (
          <>  
            <ReactToPrint trigger={() => <button 
              className='bg-amazon-green text-white px-2 py-2 
             rounded-sm shadow border border-amazon-green hover:bg-transparent 
             hover:text-amazon-green transition-all duration-300'> Print / Download </button>} 
            content={() => componentRef.current} /> 

            <div ref={componentRef}> 
              <Header />  

              <MainDetails />     

              <ClientDetails clientName={clientName} clientEmail={clientEmail} 
                  clientAddress={clientAddress} 
              />

              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}  />        

              <Table />

              <Notes />

              <Footer /> 

              <button onClick={() => setShowInvoice(false)} className='mt-5 bg-amazon-green py-2 px-8 rounded shadow border-2 text-white
                  hover:bg-white hover:text-amazon-green hover:border-amazon-green  
                  transition-all duration-300'> Edit Information </button>
            </div>
          </> 
      ) : ( 
        <>  
            {/* client name , client address, invoice nummber, invoice invoice, 
            due date, notes,  */}
            <div className='flex flex-col justify-center'> 
                <form className='flex flex-col gap-2'>  

                    <Input label="Name" type="text" id="clientName" register={register} errors={errors}    />  

                    <Input label="Email"  type="text" id="clientEmail" register={register} errors={errors}   /> 
                   
                    <Input label="Address" type="text" id="clientAddress" register={register} errors={errors} />   

                    <Input label="Invoice Number" type="text" id="invoiceNumber" register={register} errors={errors} />  

                    <Input label="Invoice Date" type="date" id="invoiceDate"  register={register} errors={errors} />   

                    <Input label='Due Date' type="date" id="dueDate" register={register} errors={errors} />   

                    <button onClick={() => setShowInvoice(true)} className='bg-amazon-green py-2 px-8 rounded shadow border-2 text-white
                    hover:bg-white hover:text-amazon-green hover:border-amazon-green  
                    transition-all duration-300'> Preview Invoice </button>
                </form> 
                    
            </div>

        </> 
       
      )}
    
    </div>
  )
}

export default Quotation