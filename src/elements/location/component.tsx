import bgBatikImg from '../../assets/batik_1.png';
import bgCoverImg from '../../assets/gold_cover.jpg';
import familyPhotoImg from '../../assets/family.jpg';
import bgShadowImg from '../../assets/shadow_bg.png';
import './style.css';

export function Location() {
    return (
        <section className="location" style={{ backgroundImage: `url(${bgBatikImg})` }}>
            <img src={bgShadowImg} className='location-bg-img'/>

            <div className='location-cover-img' style={{ backgroundImage: `url(${bgCoverImg})`}}>
                <img src={familyPhotoImg} />
            </div>

            <p className='text-primary'>
                <b>
                    Perum Sarimadu 2, Blok E⁴ no. 5,<br/>
                    RT 12, RW 10, Desa Kendapayak,<br/>
                    Kec. Pakisaji, Kab. Malang
                </b>
            </p>

            <button type='button' className='content-direction-button'>
                LIHAT PETA
            </button>
        </section>
    )
}