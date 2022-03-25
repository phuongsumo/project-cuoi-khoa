import { useState } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { Col } from 'react-bootstrap';
import styles from './VideoYoutube.module.css';
import founderImg from './founder.png';
import subImg1 from './sub_img1.jpg';
import subImg2 from './sub_img2.jpg';
import PlayVideo from './PlayVideo/PlayVideo'

const VideoYoutube = () => {
    const [videoId, setVideoId] = useState<string>('');
    const [showVideo, setShowVideo] = useState<boolean>(false);

    const handleClick = (id: string) => {
        setShowVideo(true);
        setVideoId(id)
    }

    return (
        <>
            <div className={styles.founder_video}>
                <img src={founderImg} alt="founder" className={styles.video_img} />
                <p className={styles.founder_description}>
                    con đường khởi nghiệp của người sáng lập thương hiệu trà sữa việt nam - tocotoco
                </p>
                <span className={styles.play_icon} onClick={() => handleClick('8eHi2B2tQBs')}>
                    <BsPlayCircle />
                </span>
            </div>
            <div className={styles.sub_video}>
                <Col md={4} xs={6}>
                    <div className={styles.img_wrap}>
                        <img src={subImg1} alt="sub img" className={styles.video_img} />
                        <span className={styles.sub_play_icon} onClick={() => handleClick('63jXIH-MmLw')}>
                            <BsPlayCircle />
                        </span>
                    </div>
                </Col>
                <Col md={8} xs={6}>
                    <p className={styles.sub_video_description}>
                        ToCoToCo đạt top 10 thương hiệu Châu Á Thái Bình Dương 2021
                    </p>
                </Col>
            </div>
            <div className={styles.sub_video}>
                <Col md={4} xs={6}>
                    <div className={styles.img_wrap}>
                        <img src={subImg2} alt="sub img" className={styles.video_img} />
                        <span className={styles.sub_play_icon} onClick={() => handleClick('z5qGFD1_YGA')}>
                            <BsPlayCircle />
                        </span>
                    </div>
                </Col>
                <Col md={8} xs={6}>
                    <p className={styles.sub_video_description}>
                        ToCoToCo thay đổi quan niệm về nguyên liệu cho ngành trà sữa việt
                    </p>
                </Col>
            </div>
            {showVideo && <PlayVideo id={videoId} setShow={setShowVideo} />}
        </>
    )
}

export default VideoYoutube