import React, {useEffect, useState, useContext} from 'react'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import {AuthContext} from "../context/AuthContext";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const [visible, setVisible] = useState(false)

    const visibleHandler = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    // const registerHandler = async () => {
    //     try {
    //         const data = await request('/api/auth/register', 'POST', {...form})
    //         message(data.message)
    //     } catch (e) {}
    // }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
        }
    }

    return (
        <>
            {visible ? <RegisterForm props={{
                visible, setVisible
            }}/> : null}
            <div className="row">
                <div className="col s4 offset-s4">
                    <h1 className={'center'}>Mess</h1>
                    <div className="card blue darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Authorization</span>
                            <div>

                                <div className="input-field">
                                    <input
                                        placeholder="Enter email"
                                        id="email"
                                        type="text"
                                        name="email"
                                        className="yellow-input"
                                        value={form.email}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>

                                <div className="input-field">
                                    <input
                                        placeholder="Enter пароль"
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="yellow-input"
                                        value={form.password}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="email">Пароль</label>
                                </div>

                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn yellow darken-4 mr-10"
                                disabled={loading}
                                onClick={loginHandler}
                            >
                                Log In
                            </button>
                            <button
                                className="btn grey lighten-1 black-text"
                                onClick={visibleHandler}
                                disabled={loading}
                            >
                                Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPage