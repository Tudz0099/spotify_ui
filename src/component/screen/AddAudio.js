import React from 'react'

export default function AddAudio() {
    return (
        <div className="profile">
            <div>
                <h1>Song details</h1>
                <form className="form_change">
                    <div>
                        <label>Song file</label>
                        <input type="file" className="form_input" />
                    </div>
                    <div className="">
                        <label>Song title</label>
                        <input type="text" name="songName" className="form_input"/>
                    </div>
                    <div className="">
                        <label>Singer</label>
                        <input type="text" name="singer" className="form_input"/>
                    </div>
                    <div className="">
                        <label>Description</label>
                        <input type="text" name="description" className="form_input"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <div className="box choose_add">
                            <label className="check_box">Classical
                                <input type="radio" checked="checked" name="radio" value="classical"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="check_box">Electronic
                                <input type="radio" checked="checked" name="radio" value="electronic"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="check_box">Rap
                                <input type="radio" checked="checked" name="radio" value="rap"/>
                                <span className="checkmark"></span>
                            </label>
                            <label className="check_box">Unknown
                                <input type="radio" checked="checked" name="radio" value="unknown"/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn_sgnu">Đăng Ký</button>
                </form>
            </div>
        </div>
    )
}
