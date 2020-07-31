import React, {useContext, useEffect, CSSProperties} from 'react'
import {message} from 'antd'
import Head from 'next/head'
import RegisterCard from '../src/areas/RegisterCard'
import styled from 'styled-components'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/Universal/OpenPage'
import { UserContext } from '../src/lib/UserContext'

const Register: React.FC = () => {
    const {api} = useContext(UserContext)
    const onFinish = async ({uniq_id, password, rep_password, first_name, last_name, dob, phone, address, city, state, zipcode}) => {
        if (password !== rep_password) {
            message.error("Your new password is not the same as your repeated password.")
            return
        } else {
            try {
                console.log(phone)
                const phone_int = phone.replace(/-/g,"") as number
                await api.register({email: uniq_id,
                                    password, 
                                    first_name, 
                                    last_name, 
                                    dob, 
                                    venmo_phone: phone_int, 
                                    address, 
                                    city, 
                                    state, 
                                    zipcode,
                                    country: "US"
                                })
            } catch (err) {
                console.log(err)
                message.error("There was a problem making your account. If you had already created an account, please login. If you have not, please contact us for support.")
                return
            }
            OpenPage('/verify-your-email')
        }
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Register</title>
            </Head>
            <LoginBackground>
                <RegisterCard title={"Sign Up"} onFinish={onFinish} />
            </LoginBackground>
        </>
    );
};

export default Register;