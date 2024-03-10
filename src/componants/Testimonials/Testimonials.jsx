import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>TESTIMONIALS!</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!  
          </p>
          <img
            src="https://i.pinimg.com/originals/8f/67/4c/8f674c5708c2c65387c7b09fa06d321b.jpg"
            alt=""
          />
          <h4>BAKI HANMA</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!  
          </p>
          <img
            src="https://i.pinimg.com/originals/a5/91/e0/a591e0e24f64a7bce0e8c16dd3417100.jpg"
            alt=""
          />
          <h4>YUJIRO HANMA</h4>
          <p className={styles.bio}>Full Stack Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          </p>
          <img
            src="https://i.pinimg.com/564x/38/7e/6d/387e6d133851dd609a9527a3e0a03c6c.jpg"
            alt=""
          />
          <h4>JACK HANMA</h4>
          <p className={styles.bio}>Back End Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          </p>
          <img
            src="https://i.pinimg.com/originals/91/02/cb/9102cb5b069007cf98f74569a02e452b.png"
            alt=""
          />
          <h4>HANAYAMA KAORU</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          </p>
          <img
            src="https://i.pinimg.com/originals/68/35/a3/6835a32d90308fada616d78f61739ca4.jpg"
            alt=""
          />
          <h4>OLIVA BISCUIT</h4>
          <p className={styles.bio}>Back End Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;