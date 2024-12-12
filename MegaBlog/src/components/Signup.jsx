import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const {register, handleSubmit} = useForm();

    const create = async(data) => {
        setError('')
        try {
            const data = await authService.createAccount(data)
            if (data) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                }
                navigate('/')
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <div className='flex items-center justify-center'>
        <div>

            <div className=''>
                <Logo/>
            </div>

            <h2 className=''>
            Sign Up to your Account!
            </h2>

            <p className=''>
                Already have an Account?<Link to='/login'>Sign In</Link>
            </p>
            {error && <p className=''>{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div>

                    <Input
                    label='Full Name: '
                    placeholder='Enter Your Name'
                    {...register('name',{
                        required: true
                    }
                    )}
                    />

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
                        Create Account
                    </Button>

                </div>
            </form>

        </div>
    </div>
  )
}

export default Signup
