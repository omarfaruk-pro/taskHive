import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const freelancers = [
  {
    name: 'Aria Lopez',
    skill: 'UI/UX Designer',
    bio: 'Designs sleek, user-friendly interfaces for mobile and web apps.',
    rating: 4.9,
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Leo Martins',
    skill: 'Full Stack Developer',
    bio: 'Builds robust applications with React, Node, and PostgreSQL.',
    rating: 4.8,
    image: 'https://i.pravatar.cc/150?img=59',
  },
  {
    name: 'Sana Patel',
    skill: 'Copywriter',
    bio: 'Crafts compelling content that converts and engages readers.',
    rating: 5.0,
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'David Zhang',
    skill: 'SEO Expert',
    bio: 'Optimizes sites for search engines and skyrockets organic traffic.',
    rating: 3.7,
    image: 'https://i.pravatar.cc/150?img=12',
  },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">🌟 Top Freelancers on TaskHive</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {freelancers.map((freelancer, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all h-full flex flex-col items-center text-center">
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-primary object-cover"
              />
              <h3 className="text-xl font-semibold">{freelancer.name}</h3>
              <p className="text-primary font-medium">{freelancer.skill}</p>
              <p className="text-sm text-gray-500 mt-2">{freelancer.bio}</p>
              <div className="mt-4 text-yellow-400 text-lg flex justify-center gap-2 items-center">
                <div>
                  {'★'.repeat(Math.floor(freelancer.rating))} 
                </div>
                <span className="text-sm text-gray-600">({freelancer.rating})</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
