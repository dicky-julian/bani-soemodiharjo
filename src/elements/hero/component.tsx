import bgHeroImg from '../../assets/bg_hero.jpg'
import gateImg from '../../assets/gate.png'
import FlowerAnimation from '../../components/flower-animation'
import './style.css';

export function Hero() {
    return (
        <section className='hero'>
            <div className='hero-caption'>
            <h1 className='text-hind'>
                Undangan Halal Bihalal<br/>Keluarga Besar
            </h1>
            <h2 className='text-vibes text-primary'>Bani SoemoDiharjo</h2>

            <h3 className='text-hind text-primary'>Idul Fitri 1447 H</h3>
            <h3>24 Maret 2026</h3>
            </div>

            <img src={bgHeroImg} className='hero-bg-img' />
            <img src={gateImg} className='hero-gate-img' />

            <FlowerAnimation />

            <img  />
        </section>
    )
}