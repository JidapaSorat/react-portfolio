import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h1 className={styles.port_title}>MY PORTFOLIO!</h1>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://preview.redd.it/kbmb3vk4ovz61.png?width=1080&crop=smart&auto=webp&s=5d06c51de86c4aad82517652263f6f8da65d20cb" alt="" />
            <p>PROJECT TITLE: Work!Work!Work!</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://preview.redd.it/7e0vw8s4ovz61.png?width=1456&format=png&auto=webp&s=094b5bd9a86960c662763529cc3161aff09075c3" alt="" />
            <p>PROJECT TITLE: Work!Work!Work!</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://preview.redd.it/2z0yoww4ovz61.png?width=1456&format=png&auto=webp&s=7e8ef1109d88c5afec50993f9fb5a4bd69767298" alt="" />
            <p>PROJECT TITLE: Work!Work!Work!</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://preview.redd.it/g1o6bz05ovz61.png?width=720&format=png&auto=webp&s=985d32b8685b5ce777fe9f6f2895fc19a9941826" alt="" />
            <p>PROJECT TITLE: Work!Work!Work!</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://preview.redd.it/rfi4w4tdhva81.jpg?width=734&format=pjpg&auto=webp&s=f52b768bee3876f12d70701bccf75615960bb997" alt="" />
            <p>PROJECT TITLE: Work!Work!Work!</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://comicvine.gamespot.com/a/uploads/scale_medium/11132/111325630/6016623-6264664355-MR-35.jpg" alt="" />
            <p>PROJECT TITLE: Work!Work!Work!</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;