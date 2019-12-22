import React, { useState } from 'react';
import cx from 'classnames';
import styles from './exercise-image.module.css';

const ExerciseImage = props => {
  const [activeSex, setActiveSex] = useState('female');
  return (
    <>
      <div>
        <img
          src={activeSex === 'male' ? props.exercise.male.image : props.exercise.female.image}
          alt="pull-up"
          style={{ width: 200, height: 200 }}
        />
      </div>
      <div style={{ width: 200, height: 45, marginTop: 20 }}>
        <center>
          <img
            src="https://image.flaticon.com/icons/png/512/32/32551.png"
            alt="male-gender-icon"
            className={cx(styles.genderIcon, styles.genderIconMale, {[styles.activeSex]: activeSex === 'male'})}
            onClick={() => setActiveSex('male')}
          />
          <img
            src="https://image.flaticon.com/icons/png/512/2088/2088808.png"
            alt="female-gender-icon"
            className={cx(styles.genderIcon, styles.genderIconFemale, {[styles.activeSex]: activeSex === 'female'})}
            onClick={() => setActiveSex('female')} // TODO ENUM
          />
        </center>
      </div>
    </>
  )
}

export default ExerciseImage
