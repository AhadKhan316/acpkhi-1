import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const WcfReusableSlider = ({ slides }) => {
  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000, // Auto-slide every 5 seconds
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="flex flex-col md:flex-row gap-4 px-4">
                {slide.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img.src}
                    alt={img.alt}
                    className="w-full md:w-1/2 h-auto object-cover"
                  />
                ))}
              </div>
              <p className="mt-4 text-gray-600 text-center px-4">{slide.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute top-0 right-10 flex gap-2 z-10">
        <button
          className="swiper-button-prev bg-black text-white p-2 text-lg"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          className="swiper-button-next bg-black text-white p-2 text-lg"
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default WcfReusableSlider;