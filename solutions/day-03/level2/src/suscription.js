import React from 'react';

const buttonStyle = {
    padding: '0.8rem 1.5rem',
    border: 'none',
    'border-radius': '10px',
    backgroundColor: '#5e60ce',
    color: 'white',
    'margin-top': '10px',
}

const suscriptionStyle = {
    backgroundColor: '#F7F7F7',
    'margin-top': '30px',
    padding: '15px',
}

const textStyle = {
    fontFamily: 'fantasy',
    fontSize: 11,
    'font-weigth': '100',
    'text-align': 'center',
}

const titleStyle = {
    fontFamily: 'Fjalla One',
    fontSize: 24,
}

const suscriptionBox = {
    backgroundColor: '#64dfdf',
    'border-radius': '15px',
    padding: '18px',
    display: 'grid',
    'grid-template-columns': '1fr',
    'justify-items': 'center',
}

const inputStyle = {
    border: 'none',
    width: '150px',
    height: '30px',
    margin: '4px',
    'border-radius': '8px',
    fontFamily: 'Poppins',
    fontSize: 12,
    'padding-left': '10px',
}

const text = (
    <div style={textStyle}>
        <h2 style={titleStyle}>SUSCRIBE</h2>
        <h4>Sign up with your e-mail address to receive news and updates.</h4>
    </div>
)

const inputs = (
    <div>
        <input style={inputStyle} placeholder="First name"/>
        <input style={inputStyle} placeholder="Last name"/>
        <input style={inputStyle} placeholder="email"/>
    </div>
)

const button = (
    <button style={buttonStyle}>Suscribe</button>
)

const suscription = (
    <div style ={suscriptionStyle}>
        <div style = {suscriptionBox}>
            {text}
            {inputs}
            {button}
        </div>
    </div>
);

export default suscription;


/**
 * 
 * const card = (
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

 */
/**
 * 
 * 
 * import React from 'react';
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
    width: '100%',
}

const userCardStyles = {
    backgroundColor: '#FFF',
    padding: '18px',
    width: '100%',
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
        </div>
    </div>
);

export default card;
 */