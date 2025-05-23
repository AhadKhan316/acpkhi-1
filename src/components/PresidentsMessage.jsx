import PresidentImage from "/src/assets/governing-body-new/ahmed-shah.png";

const PresidentsMessage = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            President’s Message
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* President Profile */}
        <div className="flex flex-col items-center mb-10">
          <img
            src={PresidentImage}
            alt="President Mohammad Ahmed Shah"
            className="w-44 h-44 rounded-full object-cover shadow-xl border-4 border-white mb-5"
          />
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            Mohammad Ahmed Shah <span className="font-normal text-gray-500">(HI, SI)</span>
          </h3>
          <p className="text-gray-600 text-center mt-1">
            President, Arts Council of Pakistan Karachi
          </p>
        </div>

        {/* Message Body */}
        <div className="text-lg leading-relaxed text-gray-700 text-center px-2">
          <p className="mb-6">
            At the Arts Council of Pakistan, our mission is to spotlight the depth and diversity of Pakistani arts, literature, and culture on a global stage. We're committed to creating a vibrant, inclusive space that inspires creativity, supports emerging talent, and builds meaningful connections—both across Pakistan and around the world.
          </p>
          <p className="text-red-600 font-semibold text-xl">
            Together, we're writing the next chapter of culture in Pakistan!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PresidentsMessage;
