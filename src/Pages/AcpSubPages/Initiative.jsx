import { Link } from 'react-router-dom';

const initiatives = [
  {
    id: 1,
    name: 'WCF',
    logo: 'https://source.unsplash.com/random/100x100?sig=1',
    description: 'World Collaboration Forum: Fostering global partnerships and innovation.',
  },
  {
    id: 2,
    name: 'AUC',
    logo: 'https://source.unsplash.com/random/100x100?sig=2',
    description: 'Alliance for Unity and Change: Promoting social and environmental progress.',
  },
  {
    id: 3,
    name: 'PYF',
    logo: 'https://source.unsplash.com/random/100x100?sig=3',
    description: 'Pioneer Youth Forum: Empowering the next generation of leaders.',
  },
  {
    id: 4,
    name: 'PTF',
    logo: 'https://source.unsplash.com/random/100x100?sig=4',
    description: 'Progressive Technology Fund: Supporting cutting-edge tech solutions.',
  },
  {
    id: 5,
    name: 'WC',
    logo: 'https://source.unsplash.com/random/100x100?sig=5',
    description: 'Wellness Collective: Advancing health and well-being worldwide.',
  },
];

function InitiativeCard({ name, logo, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      <img src={logo} alt={`${name} logo`} className="w-24 h-24 mb-4 rounded-full" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Initiatives() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Initiatives</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <InitiativeCard
              key={initiative.id}
              name={initiative.name}
              logo={initiative.logo}
              description={initiative.description}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Initiatives;