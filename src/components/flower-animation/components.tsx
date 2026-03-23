import wayangImg from '../../assets/wayang.png'
import flower1 from '../../assets/flower_1.png'
import flower2 from '../../assets/flower_2.png'
import flower3 from '../../assets/flower_3.png'
import flower4 from '../../assets/flower_4.png'
import flower6 from '../../assets/flower_6.png'
import flower7 from '../../assets/flower_7.png'
import flower8 from '../../assets/flower_8.png'
import './style.css';

export function FlowerAnimation() {
    return (
        <>
            <div className='flower-imgs'>
            <img src={flower8} className='flower-img-0 animation-flowerleft' />
            <img src={flower1} className='flower-img-1 animation-flowerleft' />
            <img src={flower1} className='flower-img-1 animation-flowerleft' />
            <img src={flower7} className='flower-img-2 animation-flowerleft' />
            <img src={flower2} className='flower-img-3 animation-flowerleft' />
            <img src={flower2} className='flower-img-4 animation-flowerleft' />
            <img src={flower3} className='flower-img-5 animation-flowerleft' />
            <img src={flower6} className='flower-img-6 animation-flowerleft' />
            <img src={flower4} className='flower-img-7 animation-flowerleft' />
            </div>

            <div className='wayang-imgs'>
            <img src={wayangImg}  />
            <img src={wayangImg} />
            </div>
        </>
    )
}