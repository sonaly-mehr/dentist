import React, { Fragment } from 'react'
import img from '../../assets/images/fa-girl.png'
import supportImg from '../../assets/images/footer.png'
import styles from './styles.module.css'


const Contact = () => {
  return (
     <Fragment>
        <div className={styles.contact_section}>
            <div className="container">
                <div className={styles.contact_area}> 
                    <div className={styles.contact_list}>
                        <ul className='d-flex align-items-center justify-content-around'>
                            <li className='d-none d-lg-block'><p>GET <span>free</span> ASSISTANCE</p></li>
                            <li className='d-none d-lg-block'>
                              <p style={{ color:"#fff" }}> helpdesk@marlinmedicalassistance.com</p>
                            </li>
                            <li className='d-none d-lg-block'>
                                <a href="tel:+91 87500 42481"> +91- 8984 900 900</a>
                            </li>
                            <li className='d-block d-lg-none'><a href="#">ENQUIRE NOW</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </Fragment>
  )
}

export default Contact
