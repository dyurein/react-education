import React from 'react'
import cls from './Music.module.css'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import styles from './Music.module.css'



const  Music = (props) => {
  return (
    <div>
      Music
        <DayPickerInput classNames={styles}/>
    </div>
  )
}

export default Music;
