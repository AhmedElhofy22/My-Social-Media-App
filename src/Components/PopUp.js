import React , {Fragment} from 'react'
import './PopUp.css'

const PopUp = (props) => {
  return (
    <Fragment className='popup-show'>
      <div className='backdrop' onClick={props.onClose}/>
      <dialog open className='popup'>{props.children}</dialog>
    </Fragment>
  )
}

export default PopUp
