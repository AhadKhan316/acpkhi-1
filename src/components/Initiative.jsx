// import React from 'react';
import WCFLogo from '/src/assets/wcf-assets/Logo-wcf-black.png';
import PLFLogo from '/src/assets/plf-assets/plf-logo.png';
import AUCLogo from '/src/assets/auc-assets/logo copy.png';

const Initiative = () => {
  const showcases = [
    {
      id: 1,
      title: 'World Culture Festival Karachi',
      desc: 'The World Culture Festival is a vibrant celebration of global creativity, uniting art creators to share their cultures and co-create art. Featuring music, theatre, dance, and visual arts, it offers a dynamic platform for artistic exchange and cultural dialogue from around the world.',
      logo: WCFLogo,
      link: '/festival/wcf'
    },
    {
      id: 2,
      title: 'Pakistan Literature Festival',
      desc: 'The Pakistan Literature Festival is a first-of-its-kind mega event in the country. The festival celebrates and honors our culture, languages, literature, and art on a national scale.',
      logo: PLFLogo,
      link: '/festival/plf'
    },
    {
      id: 3,
      title: 'Aalmi Urdu Conference',
      desc: 'The Aalmi Urdu Conference is Arts Council of Pakistan, Karachi\'s flagship literary event. The literary gathering celebrates the rich heritage of Pakistan\'s languages and various literary traditions.',
      logo: AUCLogo,
      link: '/festival/auc'
    },
  ];

  return (
    <section className="py-10 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-800">Our Initiatives/Brands</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {showcases.map((showcase) => (
            <a
              key={showcase.id}
              href={showcase.link}
              className="flex flex-col p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition hover:transform hover:-translate-y-1 min-h-[400px] no-underline text-inherit cursor-pointer"
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = showcase.link;
                }
              }}
            >
              <div className="flex justify-center mb-6 h-32">
                <img
                  src={showcase.logo}
                  alt={showcase.title}
                  className="h-full w-full object-contain max-h-32 max-w-[200px]"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{showcase.title}</h3>
              <p className="text-gray-600 mb-4 text-lg md:text-base flex-grow line-clamp-4">{showcase.desc}</p>
            </a>
          ))}
        </div>

        <button className="mt-12 px-8 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition text-sm md:text-base font-medium">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Initiative;