import './style.css';
import bgBatikImg from '../../assets/batik_2.jpg';
import bgCoverImg from '../../assets/gold_cover.jpg';
import familyPhotoImg from '../../assets/family.jpg';
import bgShadowImg from '../../assets/shadow_bg.png';

export function Content() {
    return (
        <section className='content'>
            <img src={bgBatikImg} className='content-bg-img'/>
            <img src={bgShadowImg} className='content-bg-img'/>

            <div className='content-cover-img' style={{ backgroundImage: `url(${bgCoverImg})`}}>
                <img src={familyPhotoImg} />
            </div>

            <p className='text-primary'>Dalam rangka mempererat tali silaturahmi di bulan yang penuh berkah, kami Kriston Yuwono sekeluarga mengundang seluruh keluarga besar Soemodiharjo untuk menghadiri acara Halal Bihalal yang akan diselenggarakan pada:</p>
            <p className='text-primary'>
                <b>
                    SELASA, 24 MARET 2026<br/>
                    10.00 WIB<br/>
                    Kediaman Bapak Kriston Yuwono
                </b>
            </p>

            <button type='button' className='content-direction-button'>
                LIHAT LOKASI
            </button>
        </section>
    )
}