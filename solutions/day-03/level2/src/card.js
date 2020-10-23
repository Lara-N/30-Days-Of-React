import React from 'react';
import myPicture from './images/MH.png';

const myInfoStyle = {
    width: '152px',
    display: 'flex',
    'flex-direction': 'column',
    overflow: 'hidden',
}

const pictureStyle = {
    'border-radius': '50%',
    width: '150px',
}

const myName = {
    width: '90%',
    height: '26px',
    margin: '10px 10px 0px 10px',
    display: 'grid',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'grid-template-columns': 'max-content max-content',
    'align-items': 'center',
}

const hfourStyle = {
    fontFamily: 'Fjalla One',
    fontSize: '18px',
    margin: 'auto',
}

const hfiveStyle = {
    fontFamily: 'sans-serif',
    'font-weight': '100',
    fontSize: '12px',
    margin: 'auto',
}

const singleSkillStyle = {
    fontFamily: 'Teko',
    backgroundColor: '#C39',
    color: '#FFF',
    'border-radius': '5px',
    padding: '1px 6px',
    margin: '0px 4px',
}

const verifiedStyle = {
    backgroundColor: '#C39',
    color: '#FFF',
    'border-radius': '50%',
    padding: '1px',
}

const cardStyles = {
    backgroundColor: '#F7F7F7',
    'margin-top': '30px',
    padding: '8px',
}

const userCardStyles = {
    backgroundColor: '#FFF',
    padding: '18px',
}

const userSkillsStyles = {
    width: '90%',
    'flex-direction': 'column',
    margin: '10px',
}

const allSkillsStyle = {
    display: 'flex',
    'margin-top': '10px',
}

const joinedDateStyle = {
    color: 'gray',
    fontFamily: 'sans-serif',
    fontSize: '9px',
    width: '109px',
    height: '26px',
    margin: '10px 10px 0px 10px',
    display: 'grid',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'grid-template-columns': 'max-content max-content',
    'align-items': 'center',
}

const myInfo = (
    <div style={myInfoStyle}>
        <img src={myPicture} alt='Melissa Huerta'style={pictureStyle}/>
        <div style={myName}>
            <h4 style={hfourStyle}>
                MELISSA HUERTA
            </h4>
            <ion-icon name="checkmark-outline" style={verifiedStyle}></ion-icon>
        </div>
        <div style={myName}>
            <h5 style={hfiveStyle}>Flutter Developer, Perú</h5>
        </div>
    </div>
);

const skills = ['HTML', 'CSS', 'JS', 'MySQL', 'Git', 'Flutter'];

const mySkillsFormatted = skills.map((e) => <p key={e} style={singleSkillStyle}>{e}</p>)

const joinedDate = (
    <div style={joinedDateStyle}>
        <ion-icon name="time-outline"></ion-icon>
        <p>Joined on Oct 22, 2020</p>
    </div>
)


const card = (
    <div  style={cardStyles}>
        <div style={userCardStyles}>
            {myInfo}
            <div style={userSkillsStyles}>
                <h4 style={hfourStyle}>SKILLS </h4>
                <div style={allSkillsStyle}>
                    {mySkillsFormatted}
                </div>
            </div>
            {joinedDate}
        </div>
    </div>
);

export default card;