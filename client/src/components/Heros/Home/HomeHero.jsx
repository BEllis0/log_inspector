import React from 'react';
import styles from './HomeHero.module.scss';
import HeroImage from '../../../assets/Log_Inspector_Home_Hero.png';

const HomeHero = props => {
    return (
        <div className={styles.heroContainer} style={{ background: "url(" + `${HeroImage}` + ") no-repeat center center fixed", backgroundSize: 'cover' }}>
            <div className={styles.heroTextContainer}>
                <h1 className="heroTitle">An Open Source, Realtime Debugging Solution</h1>
                <br />
                <h3 className="subHeading">Log Inspector is a hub for monitoring errors in your application and supports the debugging process.</h3>
                <br />
                <div className="primaryCTA">Register for free</div>
            </div>
        </div>
    )
};

export default HomeHero;