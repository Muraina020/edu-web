import React from "react";
import styles from "./footer.module.css";
import Call from "../../assets/call.png";
import Mail from "../../assets/mail.png";
import LocationIcon from "../../assets/locationIcon.png";
import Image from "next/image";
// import Footer from "./FormFooter"
import FormFooter from "./FormFooter";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contactLeft}>
          <h3 className={styles.contactTitle}>CONTACT US</h3>
          <ul className={styles.contactLeftTxt}>
            <li>
              {" "}
              <Image
                src={LocationIcon}
                alt="location"
                className={styles.footerImg}
              />
              Location: Kigali City, Nyarugenge District, KN78 st 
            </li>
            <li>
              {" "}
              <Image src={Call} alt="email" className={styles.footerImg} />
              Phone: +250787552411
            </li>
            <li>
              {" "}
              <Image src={Mail} alt="call" className={styles.footerImg} />
              Email: niwenshutiadeline96@gmail.com
            </li>
          </ul>
        </div>
        <div className={styles.contactRight}>
          <FormFooter/>
        </div>
      </div>
      <small className={styles.footerCopyright}>
        Copyright ©2024, Derynegreenhouse.com. All rights reserved
      </small>
    </footer>
  );
};

export default Footer;
