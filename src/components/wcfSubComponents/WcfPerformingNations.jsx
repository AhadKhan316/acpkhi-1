import PropTypes from "prop-types";

const nations = [
  { code: "PK", name: "Pakistan" },
  { code: "ES", name: "Spain" },
  { code: "US", name: "USA" },
  { code: "GB", name: "UK" },
  { code: "RU", name: "Russia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "PS", name: "Palestine" },
  { code: "BE", name: "Belgium" },
  { code: "UA", name: "Ukraine" },
  { code: "TR", name: "Turkiye" },
  { code: "IT", name: "Italy" },
  { code: "EG", name: "Egypt" },
  { code: "CH", name: "Switzerland" },
  { code: "AE", name: "UAE" },
  { code: "UG", name: "Uganda" },
  { code: "ZW", name: "Zimbabwe" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BD", name: "Bangladesh" },
  { code: "BY", name: "Belarus" },
  { code: "BR", name: "Brazil" },
  { code: "BI", name: "Burundi" },
  { code: "CG", name: "Congo" },
  { code: "JP", name: "Japan" },
  { code: "XK", name: "Kosovo" },
  { code: "NP", name: "Nepal" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "QA", name: "Qatar" },
  { code: "RW", name: "Rwanda" },
  { code: "ZA", name: "South Africa" },
  { code: "KR", name: "South Korea" },
  { code: "LK", name: "Sri Lanka" },


{ code: "NG", name: "Nigeria" },       // Correct code for Nigeria
{ code: "MY", name: "Malaysia" },     // Correct code for Malaysia
{ code: "ID", name: "Indonesia" },    // Correct code for Indonesia
{ code: "KW", name: "Kuwait" },       // Correct code for Kuwait
{ code: "NL", name: "Natherland" },   // Assuming "Natherland" is a typo for Netherlands
{ code: "ER", name: "Eritia" },       // Assuming "Eritia" is a typo for Eritrea
{ code: "PL", name: "Poloand" },      // Assuming "Poloand" is a typo for Poland
{ code: "AR", name: "Argentia" },     // Assuming "Argentia" is a typo for Argentina
{ code: "CZ", name: "Czech Republic" }, // Correct code for Czech Republic
{ code: "MA", name: "Morocco" },      // Correct code for Morocco
{ code: "PT", name: "Portugal" },     // Correct code for Portugal
{ code: "JO", name: "Jorden" },       // Assuming "Jorden" is a typo for Jordan
{ code: "HU", name: "Hungry" },       // Assuming "Hungry" is a typo for Hungary
{ code: "BG", name: "Bulgaria" },     // Correct code for Bulgaria
{ code: "SE", name: "Sweden" },       // Correct code for Sweden
{ code: "DK", name: "Denmark" },      // Correct code for Denmark
{ code: "RO", name: "Romania" },      // Correct code for Romania
{ code: "GR", name: "Gracce" },       // Assuming "Gracce" is a typo for Greece
{ code: "UZ", name: "Uzbekistan" },   // Correct code for Uzbekistan
{ code: "CA", name: "Canada" }        // Already correct
];

// Flags that need special width handling
const WIDE_FLAGS = ['NP', 'NO', 'CH', 'BT', 'NP'];
const TALL_FLAGS = ['BE', 'BI', 'CG'];

function WcfPerformances() {
  return (
    <section className="bg-white px-2" id="performingNations">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-6">Global Participants</h2>
          {/* <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div> */}
          <p className="text-lg md:text-xl text-black mx-auto">
          The festival has brought together artists from various nations across the globe and this number continues to grow
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {nations.map((nation) => {
            const isWide = WIDE_FLAGS.includes(nation.code);
            const isTall = TALL_FLAGS.includes(nation.code);

            return (
              <div
                key={nation.code}
                className="relative group"
              >
                <div className="w-16 h-12 md:w-20 md:h-14 bg-gray-50 rounded-sm shadow-sm overflow-hidden border border-gray-200 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-110 hover:z-10">
                  <img
                    src={`https://flagcdn.com/w160/${nation.code.toLowerCase()}.png`}
                    alt={nation.name}
                    className={`max-w-[90%] max-h-[90%] object-contain ${isWide ? 'w-[70%] h-auto' :
                      isTall ? 'w-auto h-[80%]' :
                        'w-auto h-auto'
                      }`}
                    loading="lazy"
                  />
                </div>

                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {nation.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

WcfPerformances.propTypes = {
  nations: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default WcfPerformances;