import React, { useRef, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import Loading from '../../Shared/Loading/Loading';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    if(user){
        navigate("/shop")
    }
    if (googleError) {
        return (
            <div>
                <p className="text-danger">Error: {googleError.message}</p>
            </div>
        );
    }
    if (googleLoading) {
        return <Loading></Loading>
    }
    if (googleUser) {
        return (
            <div>
                <p>Welcome: {googleUser?.user?.displayName}</p>
            </div>
        );
    }

 
    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div>
            <h1 className="please-register">Please Register</h1>
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>
                        <form onSubmit={handleSubmit}>
                            <MDBInput ref={nameRef} wrapperClass='mb-4' label='Full Name' id='name' type='text' size="lg" />
                            <MDBInput ref={emailRef} wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" />
                            <MDBInput ref={passwordRef} wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" />

                            <div className="d-flex justify-content-between mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            </div>

                            <div className='text-center text-md-start mt-4 pt-2'>
                                <MDBBtn className="mb-0 px-5" size='lg'>Register</MDBBtn>
                                <p className="small fw-bold mt-2 pt-1 mb-2">Already Registered? <Link to="/login" className="link-danger">Login</Link></p>
                            </div>
                        </form>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-center">
                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                        </div>
                        <div className='btn-group-vertical'>
                            {/* <button onClick={() => signInWithGoogle()} className="btn btn-warning m-2 w-100">Sign in with Google</button> */}
                            <button className="btn btn-primary m-2 w-100">Sign in with Facebook</button>
                            <button className="btn btn-danger m-2 w-100">Sign in with Github</button>
                        </div>
                    </MDBCol>

                </MDBRow>


            </MDBContainer>
        </div>
    );
};

export default Register;