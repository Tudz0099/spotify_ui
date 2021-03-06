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
                <h1 className="t-center">????ng k?? mi???n ph?? ????? b???t ?????u nghe.</h1>
                <button className="t-center btn_fbm">????ng k?? b???ng Facebook</button>
                <div className="divider">
                    <strong>HO???C</strong>
                </div>
                <form onSubmit={register}>
                    <div className="content">
                        <div className="form">
                            <label>Email c???a b???n l?? g?? ?</label>
                            <input type="text" name="email" required value={email} onChange={onChangeRegisterForm} placeholder="Nh???p email c???a b???n." className="form_input"/>
                            <p className= "p_phone">D??ng s??? ??i???n tho???i.</p>
                        </div>
                        <div className="form">
                            <label>X??c nh???n email c???a b???n</label>
                            <input type="text" name="check_email" value={check_email} onChange={onChangeRegisterForm} placeholder="Nh???p l???i email c???a b???n." className="form_input"/>
                        </div>
                        <div className="form">
                            <label>T???o m???t kh???u</label>
                            <input type="password" name="password" required value={password} onChange={onChangeRegisterForm} placeholder="T???o m???t kh???u." className="form_input"/>
                        </div>
                        <div className="form">
                            <label>B???n t??n l?? g??</label>
                            <input type="text" name="fullName" required value={fullName} onChange={onChangeRegisterForm} placeholder="Nh???p t??n h??? s??." className="form_input"/>
                            <p>T??n n??y s??? xu???t hi???n trong h??? s?? c???a b???n .</p>
                        </div>
                    <div className = "check">
                        <h4>B???n sinh ng??y n??o ?</h4>
                            <input name="dob" type="date" id="birthday" name="birthday"/>
                        <h4>Gi???i t??nh c???a b???n l?? g??</h4>
                        <div className="box">
                                <label className="check_box">Nam
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="check_box">N???
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="check_box">Kh??ng ph??n bi???t gi???i t??nh
                                    <input type="radio" checked="checked" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                        </div>
                        <div className="check_box1">
                            <label>
                                <input type="checkbox" checked="checked"/>
                                T??i kh??ng mu???n nh???n tin nh???n ti???p th??? t??? Spotify
                            </label>
                            <label>
                                <input type="checkbox"/>
                                Chia s??? d??? li???u ????ng k?? c???a t??i v???i c??c nh?? cung c???p n???i dung c???a Spotify cho m???c ????ch ti???p th???.
                            </label>
                        </div>
                    </div>
                    </div>
                    <button type="submit" className="btn_sgnu">????ng K??</button>
                    <ToastContainer />
                   </form>
                   <span>
                       B???n ???? c?? t??i kho???n?
                       <Link to='/login'><a> ????ng nh???p</a></Link>
                   </span>
            </div>
        </div>
    )
}
