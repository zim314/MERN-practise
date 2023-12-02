import React, { useState, useEffect } from 'react';
import { register } from '../../API/auth';

const RegisterComponent = () => {
    const initialForm = {
        username: '',
        password: '',
        email: '',
        role: 'student',
    };

    const [userInfo, setUserInfo] = useState(initialForm);
    const [message, setMessage] = useState('');

    const changeUserInfo = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setUserInfo((pre) => ({
            ...pre,
            [event.target.name]: event.target.value,
        }));
    };

    const submitUserInfo = async () => {
        if (userInfo.username === '') return;
        if (userInfo.password === '') return;
        if (userInfo.email === '') return;

        const res = await register(userInfo);
        setMessage(res.message);
        setUserInfo(initialForm);
    };

    return (
        <div style={{ padding: '3rem' }} className="col-md-12">
            <div>
                {message && <div className="alert alert-danger">{message}</div>}
                <div>
                    <label htmlFor="username">用戶名稱:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={changeUserInfo}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="email">電子信箱：</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={changeUserInfo}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">密碼：</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="長度至少超過6個英文或數字"
                        onChange={changeUserInfo}
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">身份：</label>
                    <select
                        className="form-control"
                        name="role"
                        onChange={changeUserInfo}
                        defaultValue="student"
                    >
                        <option value="student">學生</option>
                        <option value="instructor">導師</option>
                    </select>
                </div>
                <br />
                <button onClick={submitUserInfo} className="btn btn-primary">
                    <span>註冊會員</span>
                </button>
            </div>
        </div>
    );
};

export default RegisterComponent;
