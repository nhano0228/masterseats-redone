import React, { Component, createContext } from "react";
import Router, {withRouter} from "next/router";
import {message} from 'antd'
import { NextPage, NextPageContext } from 'next';
import {User, DefaultApi} from '../../api'

interface ContextProps {
  currentUser?: User,
  api?: DefaultApi
  setToken: (token: string | null) => Promise<void>
}

export const UserContext = createContext<Partial<ContextProps>>({
    currentUser: null,
    setToken: null,
    api: null
});
class UserProvider extends Component {
    setToken = async (token: string | null) => {
        if (token === null) {
            this.setState({api: new DefaultApi(), currentToken: null, currentUser: null})
            return
        }
        try {
            const api = new DefaultApi({accessToken: token})
            const body = await api.getUser()
            this.setState({api, currentUser: body.data})
        } catch (err) {
            console.error(err)
        }
    }

    state = {
        currentUser: null,
        setToken: this.setToken,
        api: new DefaultApi()
    }

    render() {
        return (
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
        );
    }
}
export default UserProvider;