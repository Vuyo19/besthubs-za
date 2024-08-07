'use client'

import React, { useState } from 'react'
import Container from '../components/Container'
import { FaPhoneAlt } from "react-icons/fa";
import { contacts } from '@/utils/contact';
import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form"; 
import { Input } from '../components/inputs/input';
import TextArea from '../components/inputs/TextArea';
import Button from '../components/Button';

const ContactUs = () => { 

  const {register, handleSubmit, setValue, watch, reset, formState: {errors}} = useForm<FieldValues>({ 
    defaultValues: {
        name: '', 
        email: '',
        subject: '', 
        message: ''
    }
  }); 
  const [isLoading, setIsLoading] = useState(false);   

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    console.log(data); // Add functionality later.       
  }

  return (
    <Container> 
        <div>
            <div className="w-1/2 flex flex-col items-center justify-center text-center gap-2 mx-auto mt-5 mb-10">
                <h1 className="font-bold text-primary text-5xl">Get In Touch</h1>
                <p className="font-normal text-lg">
                    Whether you’re seeking the richest flavors or the most stylish accessories, our dedicated team is here to help.
                    Reach out to us today and let us assist you in finding exactly what you need to make every moment extraordinary.
                </p>
            </div>

            <div className='flex flex-col gap-5 md:gap-5 md:flex-row w-full'> 
                
                {/* Contact Information */}
                <div className='border text-white bg-primary rounded-xl px-10 py-10'> 
                        <h2 className='font-bold text-lg'> Contact Information </h2> 
                        <p className='font-light text-sm'> Have questions or need recommendations? Our shisha experts are just a call or click away </p> 

                        <div className='flex flex-col gap-8 mt-10'> 
                            {contacts.map((contact) => (
                                <div key={contact.id} className='flex flex-row gap-8'> 
                                    {contact.icon}
                                    {contact.label}
                                </div>
                            ))}
                        </div>
        
                </div> 
                
                {/* Sending a Message */}
                <div className='bg-white md:w-1/2 border flex flex-col gap-'> 
                    <Input 
                        id="name"
                        label="Name"
                        disabled={isLoading}
                        register={register}
                        errors = {errors}
                        required
                    />   

                    <Input 
                        id="email"
                        label="email"
                        disabled={isLoading}
                        register={register}
                        errors = {errors}
                        required
                    />   

                    <Input 
                        id="subject"
                        label="subject"
                        disabled={isLoading}
                        register={register}
                        errors = {errors}
                        required
                    />   

                    <TextArea 
                        id="message"
                        label="message"
                        disabled={isLoading}
                        register={register}
                        errors = {errors}
                        required
                    />   

                    <Button label={isLoading ? 'Loading...' : 'Send Message'}
                        onClick={handleSubmit(onSubmit)} />


                </div>
            </div>
        </div>
    </Container>
  )
}

export default ContactUs