import React, { useState, useEffect } from "react";
import AccountPerks from "./AccountPerks";

interface AuthenticationContainerProps { 
    auth: string
    children: React.ReactElement
} 

const AuthenticationContainer: React.FC<AuthenticationContainerProps> = ({
    auth, children
}) => {
  return (
    <div>
        <section> 
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center min-h-screen mx-auto mb-20 relative">  
                <div className="px-10 lg:px-20 sm:px-10 p-4"> 
                    <div className="flex items-center justify-center mt-40 lg:mt-20 sm:mt-40 col-span-full"> 
                        {auth === "Login" ? 
                            (
                                <h1 className="w-full pb-4 font-medium text-center capitalize border-b-2 border-amazon-green text-amazon-green"> 
                                    Sign In
                                </h1>
                            ) : (
                                <h1 className="w-full pb-4 font-medium text-center capitalize border-b-2 border-amazon-green text-amazon-green"> 
                                    Sign Up
                                </h1>
                            )
                        }
                    </div> 

                    <div className="relative pt-12 h-[30rem]"> 
                        {children}
                    </div>
                </div> 

                <div> 
                    <div> 
                        <AccountPerks /> 
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default AuthenticationContainer