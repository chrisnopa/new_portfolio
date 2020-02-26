import React, { Component } from 'react'
import { navigateTo } from "gatsby-link"

import compStyles from "./contact.module.css"

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
 }

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textAreaHeight: '48px',
        };
      }
    
    handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
        })
    })
        .then(() => navigateTo(form.getAttribute("action")))
        .catch(error => alert(error));
    }

    handleTextarea = e => {
        this.setState({
            textAreaHeight: `${e.target.scrollHeight+1}px`,
            [e.target.name]: e.target.value
        })
    }

    render() {
    
    return (
        <div className={compStyles.cont}>
            {/* <h3>Contactez_moi</h3>
            <a href='mailto:contact@chrispanon.me' className={compStyles.email}>contact@chrispanon.me</a> */}
            <form
                className={compStyles.formwrap}
                name="contact"
                method="post"
                action="/success/"
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
            <div className={compStyles.form}>
            <h3>Envoyez moi un message</h3>
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" onChange={this.handleChange}/>
                <div className={compStyles.formfields}>
                <div className={compStyles.formrow} >
                    <div className={compStyles.double}>
                    <input type="email" name="email" id="email" placeholder="Adresse email" onChange={this.handleChange}/>
                    <input type="tel" name="phone" id="phone" placeholder="Numéro de téléphone" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className={compStyles.formrow} >
                    <label htmlFor="message">Objet de votre message</label>
                    <textarea 
                        name="message"
                        id="message"
                        maxLength="480"
                        onChange={this.handleTextarea}
                        style={{
                            height: this.state.textAreaHeight,
                        }}
                    />
                </div>
                </div>
                <div className={compStyles.submit}>
                    <button>Envoyer</button>
                </div>
            </div>
            </form>
        </div>
    );
    }
}

export default Contact;