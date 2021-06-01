import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

const RegisterForm = ({props}) => {
    const mess = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [reg, setReg] = useState({
        email: '',
        password: '',
        name: '',
        country: '',
        gender: '',
        age: ''
    })

    useEffect(() => {
        mess(error)
        clearError()
    }, [error, mess, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setReg({...reg, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...reg})
            mess(data.message)
        } catch (e) {
        }
    }

    return (
        <div className={'card register-form'}>

            <div className="row">
                <div className="col s4 offset-s4">
                    <div className="card indigo darken-4 mt-3">
                        <div className="card-content white-text">
                            <button
                                className={'btn red right'}
                                onClick={() => props.setVisible(!props.visible)}
                            >
                                <i className="material-icons">close</i>
                            </button>
                            <span className="card-title">Registration</span>
                            <div>

                                <div className="input-field">
                                    <input
                                        placeholder="Enter email"
                                        id="email"
                                        type="text"
                                        name="email"
                                        className="yellow-input white-text"
                                        value={reg.email}
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
                                        className="yellow-input white-text"
                                        value={reg.password}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="email">Пароль</label>
                                </div>

                                <div className="input-field">
                                    <input
                                        placeholder="Enter name"
                                        id="name"
                                        type="text"
                                        name="name"
                                        className="yellow-input white-text"
                                        value={reg.name}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="name">Никнейм</label>
                                </div>

                                <div className="input-field">
                                    <input
                                        placeholder="Enter country"
                                        id="country"
                                        type="text"
                                        name="country"
                                        className="yellow-input white-text"
                                        value={reg.country}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="country">Страна</label>
                                </div>

                                <div className="input-field">
                                    <input
                                        placeholder="Enter gender"
                                        id="gender"
                                        type="text"
                                        name="gender"
                                        className="yellow-input white-text"
                                        value={reg.gender}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="gender">Стать</label>
                                </div>

                                <div className="input-field">
                                    <input
                                        placeholder="Enter age"
                                        id="age"
                                        type="number"
                                        name="age"
                                        className="yellow-input white-text"
                                        value={reg.age}
                                        onChange={changeHandler}
                                    />
                                    <label htmlFor="age">Возраст</label>
                                </div>

                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn yellow darken-4 mr-10"
                                disabled={loading}
                                onClick={registerHandler}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm