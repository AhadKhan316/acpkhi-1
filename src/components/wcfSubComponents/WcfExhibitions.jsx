import ExhibitionGrid from "../wcfReusableComponents/WcfLandingPageExhibitionCard";

import exhbition1 from "/src/assets/wcf-assets/wcf-exhibition/wcf-exhibition1.jpg";
import exhbition2 from "/src/assets/wcf-assets/wcf-exhibition/wcf-exhibition2.jpg";

// Exhibition Data
const exhibitions = [
  {
    title: "Sindh Artists Exhibition",
    image: exhbition1,
  },
  {
    title: "Art Exhibition Masters' & Contemporary Art",
    image: exhbition2,
  },
  {
    title: "Candy Forest",
    image: exhbition1,
  },
  {
    title: "Candy Forest",
    image: exhbition2,
  },
  {
    title: "Candy Forest",
    image: exhbition1,
  },
  {
    title: "Candy Forest",
    image: exhbition2,
  },
];

function WcfExhibitions() {
  return (
    <ExhibitionGrid
      exhibitions={exhibitions}
      title="Exhibitions"
      gridCols={{ base: 1, sm: 2, lg: 3 }}
      imageAspectRatio="1/1"
      maxImageHeight="570px"
      useHexClip={false}
    />
  );
}

export default WcfExhibitions;