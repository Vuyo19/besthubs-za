'use client'  

import { useEffect, useState } from "react"
import Heading from "../components/Heading"
import { Input } from "../components/inputs/input"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Button from "../components/Button"
import Link from "next/link"; 
import { FaGoogle } from "react-icons/fa"; 
import { signIn } from 'next-auth/react'; 
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"; 
import { SafeUser } from "@/types" 

interface LoginFormProps {
    currentUser: SafeUser | null; 
}

const LoginForm: React.FC<LoginFormProps>= ({ currentUser }) => {
  
  const [isLoading, setIsLoading] = useState(false);  
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        email: '', 
        password: '', 
    }
  });   

  const router = useRouter();  
  
  useEffect(() => {
    if(currentUser) {
      router.push('/cart')
      router.refresh(); 
    }
  }, [])
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true); 
    signIn('credentials', {
      ...data, 
      redirect: false
    }).then((callback) => {
      setIsLoading(false);  

      if(callback?.ok) { 
        router.push('/cart'); 
        router.refresh() 
        toast.success('Logged In')
      } 

      if(callback?.error) {
        toast.error(callback.error)
      }

    })
  } 

  
  if(currentUser) {
    return <p className="text-center"> Logged In. Redirecting... </p> 
  }

  return (
    <div className="flex flex-col gap-5"> 

        <Button outline label="Continue with Google" 
            onClick={() => {signIn('google')}} /> 

        <Input 
            id="email"
            label="Email"
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
        />  

        <Input 
            id="password"
            label="Password"
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
            type="password"
        /> 

        <Button
            label={isLoading ? "Loading" : "Login"}  
            onClick={handleSubmit(onSubmit)} 
        /> 

        <p className="text-sm"> Do not have an account? <Link className="
            underline" href='/register'> 
                Sign Up
        </Link> </p>  
     

    </div>
  )
}

export default LoginForm