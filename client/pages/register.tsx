import React, {useContext, useEffect, useState} from 'react'
import {message} from 'antd'
import Head from 'next/head'
import RegisterCard from '../src/areas/RegisterCard'
import styled from 'styled-components'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/Universal/OpenPage'
import { UserContext } from '../src/lib/UserContext'
import {resetSellingForm} from '../src/lib'
import {useRouter} from 'next/router'

const Register: React.FC = () => {
    const {api} = useContext(UserContext)
    const router = useRouter()
    const [isFromSeller, setIsFromSeller] = useState(false)

    useEffect(() => {
        if (router.query.fromselling !== undefined) {
            setIsFromSeller(true)
        }
    }, [router.query])


    const onFinish = async ({uniq_id, password, rep_password, first_name, last_name}) => {
        if (password !== rep_password) {
            message.error("Your new password is not the same as your repeated password.")
            return
        } else {
            try {
                await api.register({email: uniq_id,
                                    password, 
                                    first_name, 
                                    last_name
                                })
            } catch (err) {
                console.log(err)
                message.error("There was a problem making your account. If you had already created an account, please login. If you have not, please contact us for support.")
                return
            }
            OpenPage('/thankyou?email')
        }
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Register</title>
            </Head>
            <LoginBackground>
                <RegisterCard title={"Sign Up"} onFinish={onFinish} isFromSeller={isFromSeller} />
            </LoginBackground>
        </>
    );
};

export default Register;