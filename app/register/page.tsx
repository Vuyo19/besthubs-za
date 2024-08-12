import React from 'react'
import Container from '../components/Container';
import FormWrap from '../components/FormWrap';
import RegisterForm from './RegisterForm'; 
import { getCurrentUser } from '@/actions/getCurrentUser';
import AuthenticationContainer from '../components/AuthenticationContainer';

const Register = async () => { 
 
  const currentUser = await getCurrentUser(); 

  return (
    <Container>
        <AuthenticationContainer auth={'Sign Up'}>
            <RegisterForm currentUser={currentUser} /> 
        </AuthenticationContainer>
    </Container>
  ); 
  
}

export default Register; 