import { FaTheaterMasks, FaImage, FaMusic, FaChalkboardTeacher, FaUsers, FaPaintBrush } from 'react-icons/fa';
import { MdCelebration } from 'react-icons/md';

const ShowcaseSection = () => {
  const showcases = [
    { id: 1, title: 'Theatre', desc: 'Experience captivating live performances and dramatic arts.', icon: FaTheaterMasks, size: 'large' },
    { id: 2, title: 'Dance', desc: 'Enjoy mesmerizing dance shows and cultural movements.', icon: MdCelebration, size: 'large' },
    { id: 3, title: 'Music', desc: 'Immerse in the rhythm with live music events.', icon: FaMusic, size: 'large' },
    { id: 4, title: 'Visual Arts', desc: 'Immerse in the rhythm with live music events.', icon: FaPaintBrush, size: 'large' },
    { id: 5, title: 'Performances', desc: 'Explore stunning art and cultural displays.', icon: FaImage, size: 'medium' },
    { id: 6, title: 'Masterclasses', desc: 'Participate in interactive skill-building sessions.', icon: FaChalkboardTeacher, size: 'medium' },
    { id: 7, title: 'Panel Discussions', desc: 'Join events fostering community and collaboration.', icon: FaUsers, size: 'small' },
    { id: 8, title: 'Community Outreach', desc: 'Join events fostering community and collaboration.', icon: FaUsers, size: 'small' },
  ];

  return (
    <section className="bg-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Our Offerings</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {showcases.map((showcase) => (
          <div
            key={showcase.id}
            className={`p-6 rounded-lg shadow-md ${showcase.size === 'large' ? 'col-span-1' : showcase.size === 'medium' ? 'col-span-1 md:col-span-1' : 'col-span-1 md:col-span-1'
              } ${showcase.size === 'large' ? 'h-48' : showcase.size === 'medium' ? 'h-48' : 'h-48'}`}
          >
            <div className="flex justify-center mb-4">
              <showcase.icon className="text-4xl text-red-700" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{showcase.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{showcase.desc}</p>
          </div>
        ))}
      </div>
      {/* <button className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
        View All
      </button> */}
    </section>
  );
};

export default ShowcaseSection;