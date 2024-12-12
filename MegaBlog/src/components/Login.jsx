import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Logo, Input} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { set, useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState('');

    const login = async(data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate('/') //Link mei click karna padta h, Navigate mei direct ho jata h
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='w-full flex items-center justify-center'>
      <div className=''>
        <div className=''>
            <Logo/>
        </div>
        <h2 className=''>
            Sign in to your Account!
        </h2>
        <p className=''>
            Don't have an Account?<Link to='/signup'>Sign Up</Link>
        </p>
        {error && <p className=''>{error}</p>}
        <form onSubmit={handleSubmit(login)}>
            <div>

                <Input 
                label='Email: '
                placeholder='Enter your email'
                type='email'
                {...register('email', {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Email must be valid'
                    }
                })}
                />

                <Input 
                label='Password: '
                placeholder='Enter your Password'
                type='password'
                {...register('password', {
                    required: true,
                })}
                />

                <Button
                type='submit'
                className='w-full'
                >
                    Sign In
                </Button>

            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
