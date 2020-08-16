import React, { useRef } from "react";
import "./contact.css";
import Header from "../../components/Header/index";
import API from "../../utils/API";


function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const contentRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        API.sendEmail({
            name: nameRef.current.value,
            email: emailRef.current.value,
            content: contentRef.current.value
        })
            .then(result => {

                console.log(result);
            })
            .catch(err => console.log(err));
        nameRef.current.value = "";
        emailRef.current.value = "";
        contentRef.current.value = "";
    };


    return (
        <div>
            <Header header={"Contact"} />
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input required ref={nameRef} id="first_name" type="text" className="validate" placeholder="Name"/>
                            {/* <label>Name</label> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        {/* <label>Email</label> */}
                            <input required ref={emailRef} id="email" type="email" className="validate" placeholder="email@gmail.com"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea required ref={contentRef} id="textarea1" className="materialize-textarea" placeholder="Enter message here"></textarea>
                            {/* <label>Textarea</label> */}
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact;