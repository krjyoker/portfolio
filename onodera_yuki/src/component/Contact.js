import React from 'react';
import Card from './Card';
import BorderYellow from './BorderYellow';
import './Contact.css';

class Contact extends React.Component {
    render(){
        return(
            <div className="wrapper">
                <BorderYellow />
                <div className="about__main">
                    <h1 className="about__title">FOLLOW ME</h1>
                    <div className="about__container">
                        <ul className="footer-share">
                            <li className="contact__list" />
                            <li className="contact__list" />
                            <li className="contact__list" />
                            <li className="contact__list" />
                        </ul>
                    </div>
                </div>
                <div className="about__main">
                    <h1 className="about__main">e-mail</h1>
                    <div className="contact__mail">
                        hkr011w.jyoker@gmail.com
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;