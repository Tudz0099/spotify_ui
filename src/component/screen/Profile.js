import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from '../context/constants';
import {AuthContext} from '../context/AuthContext'


export default function Profile() { 
     const {authState: {user: {fullName, avatar, email, phone,}}, UpdateProfile} = useContext(AuthContext);
     const userId = useParams();

     const [updateForm, setUpdateForm] = useState({
        newEmail: '',
        newPhone: '',
        newName: '',
        userId
    })

    const {newEmail, newPhone , newName} = updateForm;
    const onChangeForm = (event) => {
        setUpdateForm({
            ...updateForm, [event.target.name]: event.target.value
        })
    }

    function validateEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const update = async event => {
        event.preventDefault()

        if (!newName && !newEmail && !newPhone) {
            toast.warning("You don't change anything");
            return;
        }

        if(!validateEmail(newEmail)) {
            toast.error("Unknown email address");
            return;
        }else{
            toast.info("Valid new email !")
        }

        if (newName.length !== 0) {
            if(newName.length < 2) {
                toast.warning("You should use your real name");
                return;
            } else if (newName.length > 20){
                toast.warning("Your name is too long")
                return;
            }else{
                toast.info("Valid new name !")
            }
        }

        if (newPhone.length !== 0) {
            if (newPhone.length < 10 || newPhone.length > 12) {
                toast.warning("Invalid phone number")
                return
            }else{
                toast.info("Valid new phone !")
            }    
        }

        try{
            const updateData = await UpdateProfile(updateForm)
            if(updateData.data){
                toast.success("Update successful !")
            }else{
                toast.error("Update error !")
            }
        } catch (error) {
            toast.error(error.message)
        } 
    }

    return (
        <div className="profile">   
            <div>             
                <div className = "avatar_profile">
                    <img src= {apiUrl + avatar} alt={fullName}  sizes="(min-width: 1280px) 232px, 192px"/>
                    <input type="file" />
                </div>
                <h1> Tổng quan về tài khoản </h1>
                <form className="form_change" onSubmit={update}>
                    <div className="">
                        <label>Tên người dùng</label>
                        <input type="text" name="newName" value={newName} onChange={onChangeForm} placeholder={fullName || 'No information'}  className="form_input"/>
                    </div>
                    <div className="">
                        <label>Email</label>
                        <input type="text" name="newEmail" value={newEmail} onChange={onChangeForm} placeholder={email || 'No information'}  className="form_input"/>
                    </div>
                    <div className="">
                        <label>phone</label>
                        <input type="number" name="newPhone" value={newPhone} onChange={onChangeForm} placeholder={phone || 'No information'} className="form_input"/>
                    </div>
                    <div className="btn_change">
                        <button type="submit">
                            Chỉnh sửa hồ sơ
                        </button>
                        <ToastContainer />
                    </div>
                </form>     
            </div>                
        </div>
    )
}
   