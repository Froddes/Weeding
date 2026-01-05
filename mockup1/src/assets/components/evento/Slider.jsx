import React from 'react';
// Importamos los componentes de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Importamos los estilos base y de módulos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importamos los módulos que queremos usar
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

function Slider() {
  const fotos = [
    '/fotos/hacienda1.jpeg',
    '/fotos/hacienda2.jpeg',
    '/fotos/hacienda3.jpeg',
    '/fotos/hacienda4.jpeg'
  ];

  return (
    <div className="slider-container" style={{  width: '100%' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1} // Por defecto 1 en móvil
        navigation
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true} // Infinito
        breakpoints={{
          // Cuando la pantalla sea de escritorio (768px o más)
          768: {
            slidesPerView: 2, // Muestra 2 fotos a la vez
          },
          1024: {
            slidesPerView: 3, // Muestra 3 fotos a la vez
          }
        }}
        style={{
            "--swiper-navigation-color": "#c78665",
            "--swiper-pagination-color": "#c78665",
        }}
      >
        {fotos.map((src, index) => (
          <SwiperSlide key={index}>
            <div style={{  overflow: 'hidden', height: '275px' }}>
              <img 
                src={src} 
                alt={`Alcázar ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;