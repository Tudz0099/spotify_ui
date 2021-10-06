import React, {useContext, useState} from 'react';
import Images from '../share/Img';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';

export default function Register() {
    const {RegisterUser} = useContext(AuthContext);

    const [RegisterForm, setRegisterForm] = useState({
        email: '',
        check_email:'',
        password: '',
        fullName: ''
    })

    const {email, check_email, password, fullName} = RegisterForm;


    const onChangeRegisterForm = event => 
        setRegisterForm({
            ...RegisterForm, [event.target.name]: event.target.value
        })

        function validateEmail() {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        let matches = fullName.match(/\d+/g);


    const register = async event => {
        event.preventDefault()

        if(!validateEmail(email)) {
            toast.error("Unknown email address");
            return;
        }

        if (password.length < 6) {
            toast.error("Password is too short");
            return;
        }

        if (email !== check_email) {
            toast.warning("Confirm email does not match");
            return;
        }

        if (fullName.length < 2) {
            toast.warning("You should use your real name");
            return;
        }

        if (matches != null) {
            toast.warning("Your name should not be a number");
        }
    
            try{
                const registerData = await RegisterUser(RegisterForm)
                if(!registerData){
                    toast.error("Email already exists !")
                }
            } catch (error) {
                toast.error(error.message)
            }   
        }

    return (
        <div className="register">
            <div className="header">
                <img 
                    src ={Images.LOGO_BLACK}
                    alt = ""
                />
            </div>
            <div className="container">
                <h1 className="t-center">Đăng ký miễn phí để bắt đầu nghe.</h1>
                <button className="t-center btn_fbm">Đăng ký bằng Facebook</button>
                <div className="divider">
                    <strong>HOẶC</strong>
                </div>
                <form onSubmit={register}>
                    <div className="content">
                        <div className="form">
                            <label>Email của bạn là gì ?</label>
                            <input type="text" name="email" required value={email} onChange={onChangeRegisterForm} placeholder="Nhập email của bạn." className="form_input"/>
                            <p className= "p_phone">Dùng số điện thoại.</p>
                        </div>
                        <div className="form">
                            <label>Xác nhận email của bạn</label>
                            <input type="text" name="check_email" value={check_email} onChange={onChangeRegisterForm} placeholder="Nhập lại email của bạn." className="form_input"/>
                        </div>
                        <div className="form">
                            <label>Tạo mật khẩu</label>
                            <input type="password" name="password" required value={password} onChange={onChangeRegisterForm} placeholder="Tạo mật khẩu." className="form_input"/>
                        </div>
                        <div className="form">
                            <label>Bạn tên là gì</label>
                            <input type="text" name="fullName" required value={fullName} onChange={onChangeRegisterForm} placeholder="Nhập tên hồ sơ." className="form_input"/>
                            <p>Tên này sẽ xuất hiện trong hồ sơ của bạn .</p>
                        </div>
                    <div className = "check">
                        <h4>Bạn sinh ngày nào ?</h4>
                            <input name="dob" type="date" id="birthday" name="birthday"/>
                        <h4>Giới tính của bạn là gì</h4>
                        <div className="box">
                                <label className="check_box">Nam
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="check_box">Nữ
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="check_box">Không phân biệt giới tính
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                        </div>
                        <div className="check_box1">
                            <label>
                                <input type="checkbox" checked="checked"/>
                                Tôi không muốn nhận tin nhắn tiếp thị từ Spotify
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Chia sẻ dữ liệu đăng ký của tôi với các nhà cung cấp nội dung của Spotify cho mục đích tiếp thị.
                            </label>
                        </div>
                    </div>
                    </div>
                    <button type="submit" className="btn_sgnu">Đăng Ký</button>
                    <ToastContainer />
                   </form>
                   <span>
                       Bạn đã có tài khoản?
                       <Link to='/login'><a> Đăng nhập</a></Link>
                   </span>
            </div>
        </div>
    )
}
