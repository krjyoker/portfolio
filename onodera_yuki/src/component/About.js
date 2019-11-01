import React from 'react';
import Card from './Card';
import BorderYellow from './BorderYellow';
import './About.css';

class About extends React.Component {
    render(){
        return(
            <dev className="wrapper">
                <BorderYellow />
                <div className="about__main">
                    <h1 className="about__title">ONODERA YUKI</h1>
                    <div className="about__container">
                        <div className="about__container__head">CAREER</div>
                        <div className="about__container__description">
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <th>小野寺佑輝</th>
                                </tr>
                                <tr>
                                    <td>Company</td>
                                    <th>ERAS株式会社</th>
                                </tr>
                                <tr>
                                    <td>Birthday</td>
                                    <th>1995/3/8</th>
                                </tr>
                            </table>
                            <div className="about__container__lists">
                                <li className="about__container__list">2016/3</li>
                                <li className="about__container__list">2016/4</li>
                                <li className="about__container__list">2018/11</li>
                                <li className="about__container__list">2019/4</li>
                                <li className="about__container__list">2019/4~</li>
                            </div>
                        </div>
                    </div>
                    <div className="about__container">
                        <div className="about__container__head skill">SKILL</div>
                        <div className="cards">
                            <Card img={html} title="HTML/CSS" lead="HTML5/CSS3"/>
                            <Card img={rails} title="JavaScript" lead="JavaScript"/>
                            <Card img={react} title="React" lead="React"/>
                        </div>
                    </div>
                </div>
            </dev>
        )
    }
}

export default About;