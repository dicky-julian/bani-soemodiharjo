import bgBatikImg from '../../assets/batik_1.png';
import bgHeaderImg from '../../assets/gold_cover.jpg';
import bgFooterImg from '../../assets/batik_2.jpg';
import bgCoverImg from '../../assets/gold_cover.jpg';
import bgShadowImg from '../../assets/shadow_bg.png';
import FlowerAnimation from '../../components/flower-animation';
import './style.css';

export function Location() {
    return (
        <section className="location" style={{ backgroundImage: `url(${bgBatikImg})` }}>
            <img src={bgShadowImg} className='location-bg-img'/>

            <div className='location-cover-img' style={{ backgroundImage: `url(${bgCoverImg})`}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3950.603265665746!2d112.63033499999999!3d-8.039774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDInMjMuMiJTIDExMsKwMzcnNDkuMiJF!5e0!3m2!1sen!2sid!4v1774244504797!5m2!1sen!2sid" style={{ width: '100%', height: '100%', border: 0 }} allowFullScreen={true} loading="lazy" />
            </div>

            <p className='text-primary'>
                Perum Sarimadu 2, Blok E⁴ no. 5,<br/>
                RT 12, RW 10, Desa Kendapayak,<br/>
                Kec. Pakisaji, Kab. Malang
            </p>

            <a href="https://maps.app.goo.gl/8Dm2z2aAb3YFsNox8" target='_blank' className='location-direction-button'>
                <button type='button'>
                    LIHAT PETA
                </button>
            </a>

            <FlowerAnimation />

            <img src={bgFooterImg} className='location-bg-footer-img' />
            <img src={bgHeaderImg} className='location-bg-footer-cover-img' />
        </section>
    )
}