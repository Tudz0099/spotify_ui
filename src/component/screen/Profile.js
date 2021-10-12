import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import Images from '../share/Img';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from '../context/constants';
import {AuthContext} from '../context/AuthContext'


export default function Profile() { 
    const userId = useParams();
     const {authState: {user: {fullName, avatar, email, phone,}}, UpdateProfile, UpdateAvatar} = useContext(AuthContext);

     const [updateForm, setUpdateForm] = useState({
        avatar: `${apiUrl}${avatar}`,
        newEmail: '',
        newPhone: '',
        newName: '',
    })

    const {newEmail, newPhone , newName} = updateForm;
    const onChangeForm = (event) => {
        setUpdateForm({
            ...updateForm, [event.target.name]: event.target.value
        })
    }

    function validateEmail() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(newEmail);
    }

     let matches = newName.match(/\d+/g);

    const update = async event => {
        event.preventDefault()

        if (!newName && !newEmail && !newPhone) {
            toast.warning("You don't change anything");
            return;
        }
        if (newEmail.length !== 0) {
            if(!validateEmail(newEmail)) {
                toast.error("Unknown email address");
                return;
            }else{
                toast.info("Valid new email !")
            }
        }   

        if (newName.length !== 0) {
            if (matches != null) {
                toast.warning("Your name should not be a number");
                return;
            }

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
            const updateData = await UpdateProfile(updateForm, userId)
            toast.success(updateData.message)
            setUpdateForm({newPhone: '', newName: '', newEmail: ''})
        } catch (err) {
            toast.error(err.message)
        } 
    }

    const handleFileUpload = async (event) => {
        const formData = new FormData();
        formData.append("avatar", event.target.files[0]);
        try {
          const res = await UpdateAvatar(formData, userId, {
            headers: {
              "Content-Type": "multipart/avatar",
            },
          });
          toast.success(res.message)
        } catch (err) {
            toast.error(err.message)
        }
      };
        

    return (
        <div className="profile">   
            <div>             
                <div className = "avatar_profile">
                    <img src= {{avatar} ? `${apiUrl}${avatar}` : Images.AVT_NONE} alt={fullName}  sizes="(min-width: 1280px) 232px, 192px"/>
                </div>
                <h1> Tổng quan về tài khoản </h1>
                <form className="form_change" onSubmit={update}>
                    <div>
                        <input type="file"  onChange={handleFileUpload}/>
                    </div>
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
   