import React, { useRef } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import auth from "../../../firebase.init"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate()

    //Next 2 Line is for Redirect from where are you come from
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <Loading></Loading>
    }


    if (user) {
        // navigate(from, { replace: true })
    }

    if (error) {
        return (
            <div>
                <p className="text-danger">Error: Something went wrong. Please try again..</p>
            </div>
        )
    }
    if (googleUser) {
        navigate(from, { replace: true })
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post("https://booksaw.vercel.app/login", { email })
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        navigate(from, { replace: true })
    }
    return (

        <MDBContainer fluid className="p-3 my-5 h-custom">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    </div>
                    <div className='btn-group-vertical'>
                        <button onClick={() => signInWithGoogle()} className="btn btn-warning m-2 w-100">Sign in with Google</button>
                        <button className="btn btn-primary m-2 w-100">Sign in with Facebook</button>
                        <button className="btn btn-danger m-2 w-100">Sign in with Github</button>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <MDBInput ref={emailRef} wrapperClass='mb-4' label='Email address' id='input-email' type='email' size="lg" />
                        <MDBInput ref={passwordRef} wrapperClass='mb-4' label='Password' id='input-password' type='password' size="lg" />


                        <div className="d-flex justify-content-between mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
                        </div>
                    </form>

                </MDBCol>

            </MDBRow>


        </MDBContainer>
    );
};

export default Login;