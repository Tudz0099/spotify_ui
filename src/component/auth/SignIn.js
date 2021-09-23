import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import Images from '../share/Img';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';


export default function SignIn() {
    const {loginUser} = useContext(AuthContext);
    
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const {email, password} = loginForm;

    const onChangeLoginForm = event => 
        setLoginForm({
            ...loginForm, [event.target.name]: event.target.value
        })

    function validateEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const login = async event => {
        event.preventDefault()

        if(!validateEmail(email)) {
            toast.warning("Unknown email address")
        }
        if(password.length < 6) {
            toast.warning("Password is too short")
        }
        try{
            const loginData = await loginUser(loginForm)
            if(loginData.user){
                toast.success("Logged in successfully")
            }
        } catch (error) {
            toast.error("Incorrect account information")
        }
    }
      
    return (
        <div className="login" >
            <div className="header">
                <img 
                    src ={Images.LOGO_BLACK}
                    alt = ""
                />
            </div>
            <div className="content">
                <div className = "content_title">
                    <h1>Để tiếp tục, hãy đăng nhập vào Spotify.</h1>
                </div>
                <div className="btn_group">
                    <div className="btn_fb">
                        <div>
                            <img 
                                src ={Images.ICON_FB}
                                alt = ""
                            />
                            TIẾP TỤC VỚI FACEBOOK
                        </div>
                    </div>
                    <div className="btn_apple">
                        <div>
                            <img 
                                src ={Images.ICON_APPLE}
                                alt = ""
                            />
                            TIẾP TỤC VỚI APPLE
                        </div>
                    </div>
                    <div className="btn_google">
                        <div>
                            <img 
                                src ={Images.ICON_GOOGLE}
                                alt = ""
                            />
                            TIẾP TỤC VỚI GOOGLE
                        </div>
                    </div>
                    <div className="btn_phone">
                        <div>
                            TIẾP TỤC VỚI SỐ ĐIỆN THOẠI
                        </div>
                    </div>
                </div>  
                <div className="divider">
                    <strong>HOẶC</strong>
                </div>
                <form onSubmit={login}>
                    <div className="form">
                        <label>Địa chỉ email hoặc tên người dùng</label>
                        <input type="text" name="email" required value={email} onChange={onChangeLoginForm} placeholder="Địa chỉ email hoặc tên người dùng" className="form_input"/>
                    </div>
                    <div className="form">
                        <label>Mật Khẩu</label>
                        <input type="password" name="password" value={password} required onChange={onChangeLoginForm} placeholder="Mật khẩu" className="form_input"/>
                    </div>
                    <p className="form">
                        <a>Quên mật khẩu của bạn ?</a>
                    </p>
                    <div className="submit">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>
                                Hãy nhớ tôi
                            </label>
                        </div>
                        <div className="btn_sm" type="submit">
                            <button type='submit' > ĐĂNG NHẬP </button>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
                    <div className="divider iv">
                        <div className="btn_signup">
                            <h2>Bạn chưa có tài khoản ?</h2>
                            <Link to='/register'><button className="bn" type="submit">ĐĂNG KÝ SPOTIFY</button></Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}
