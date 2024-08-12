import React from 'react' 
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import AuthenticationContainer from '../components/AuthenticationContainer';

const Login = async () => {  

  const currentUser = await getCurrentUser(); 

  return (
    <Container> 
          <AuthenticationContainer auth={'Login'}> 
                <LoginForm currentUser={currentUser} /> 
          </AuthenticationContainer>
    </Container>
  )
}

export default Login; 