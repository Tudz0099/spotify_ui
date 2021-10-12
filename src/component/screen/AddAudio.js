import React, {useContext, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AudioContext } from '../context/AudioContext';

export default function AddAudio() {
    const userId = useParams();
    const history = useHistory();
    const { AddAudio } = useContext(AudioContext);

    // const [addAudioForm, setAddAudioForm] = useState({
    //     title: '',
    //     singer: '',
    //     description: '',
    //     category: ''      
    // })
    const [fileAudio, setFileAudio] = useState();
    const [title, setTitle] =  useState('');
    const [singer, setSinger] =  useState('');

    // const {title, singer , description, category} = addAudioForm;
    // const onChangeForm = (event) => {
    //     setAddAudioForm({
    //         ...addAudioForm, [event.target.name]: event.target.value
    //     })
    // }

    const changeTitle = event => {
        setTitle(event.target.value)
    }

    const changeSinger = event => {
        setSinger(event.target.value)
    }
    
    const onChange = event => {
        setFileAudio(event.target.files[0]);
    }

    const addAudio = async event => {
        event.preventDefault()

        const formData = new FormData();
        formData.append('music', fileAudio);
        formData.append('title', title);
        formData.append('singer', singer)

        try{
            await AddAudio(formData, userId, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }})
                .then((data) => {
                    console.log(data.audio._id)
                    toast.success(data.message)
                    setTimeout(() => {
                        history.push('/playlist/'+data.audio._id)
                    }, 1500);
                })
                .catch((err) => {
                    toast.error(err.message)
                })
            // setTitle({title: ''})
            // setSinger({singer: ''})
        } catch (err) {
            toast.error(err.message)
        } 
    }

    return (
        <div className="profile">
            <div>
                <h1>Song details</h1>
                <form className="form_change" onSubmit={addAudio}>
                    <div>
                        <label>Song file</label>
                        <input type="file" className="form_input" name="music" onChange={onChange} />
                    </div>
                    <div className="">
                        <label>Song title</label>
                        <input type="text" name="title" onChange={changeTitle} className="form_input"/>
                    </div>
                    <div className="">
                        <label>Singer</label>
                        <input type="text" name="singer" onChange={changeSinger} className="form_input"/>
                    </div>
                    <div className="">
                        <label>Description</label>
                        <input type="text" name="description" className="form_input"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <div className="box choose_add"  >
                            <label className="check_box">Classical
                                <input type="radio" checked="checked" name="category"  value="classical"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="check_box">Electronic
                                <input type="radio" checked="checked" name="category"  value="electronic"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="check_box">Rap
                                <input type="radio" checked="checked" name="category"  value="rap"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="check_box">Unknown
                                <input type="radio" checked="checked" name="category"  value="unknown"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn_sgnu">Đăng Ký</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}
