import { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 )
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1 )
  }
  
  return (
    <div className='container'>
      <div className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((data, index) => (
          <div key={data.id} className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
                <img src={data.image} alt='image' className='image' />
              )
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider