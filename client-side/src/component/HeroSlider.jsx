import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: 'Hire Experts Instantly',
    subtitle: 'From design to development—get tasks done with top freelancers.',
    buttonText: 'Get Started',
    bg: 'https://images.unsplash.com/photo-1664651205193-bfb6bfdd3b09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Find Work that Fits You',
    subtitle: 'Browse hundreds of real freelance jobs posted daily.',
    buttonText: 'Browse Tasks',
    bg: 'https://images.unsplash.com/photo-1580708794695-16151cc7e63f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Manage Projects Seamlessly',
    subtitle: 'Built-in tools for messaging, delivery, and payments.',
    buttonText: 'Learn More',
    bg: 'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function HeroSlider() {
  return (
    <div className="relative h-150 sm:h-[85vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl">{slide.subtitle}</p>
                <button className="btn btn-primary">{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
