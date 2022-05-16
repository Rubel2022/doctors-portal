import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  let signInError;
  if (loading || gLoading) {
    return <Loading />
  }



  if (error || gError) {
    signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
  }
  if (user || gUser) {
    console.log(user, gUser)
  }
  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className='text-center text-2xl font-bold'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
                {...register("email",
                  {
                    required: {
                      value: true,
                      message: "Email is Required"
                    },
                    pattern: /[a-z0-9]+[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'

                  }
                )}
              />
              <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>


            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: "Password is Required"
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer'
                    }
                  }
                )}
              />
              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


              </label>
            </div>
            {signInError}
            <input className='btn text-white w-full max-w-xs"' type="submit" value="Login" />
          </form>
          <p><small>New to Doctors Portal? <Link className='text-primary' to="/signup"> Create New Account</Link></small> </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primary"
          >Continue with google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;