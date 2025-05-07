import React from "react";
import PyfDelegateCard from "../pyfReusableComponents/pyfDelegateCard";

import PyfDelegateCard1 from "/src/assets/pyf-assets/pyf-delegate1.jpg";
import PyfDelegateCard2 from "/src/assets/pyf-assets/pyf-delegate2.jpg";
import PyfDelegateCard3 from "/src/assets/pyf-assets/pyf-delegate3.jpg";
import PyfDelegateCard4 from "/src/assets/pyf-assets/pyf-delegate4.jpg";
import PyfDelegateCard5 from "/src/assets/pyf-assets/pyf-delegate5.jpg";
import PyfDelegateCard6 from "/src/assets/pyf-assets/pyf-delegate6.jpg";

// Delegate data
const delegates = [
  { name: "Afaq Adnan", image: PyfDelegateCard1 },
  { name: "Ali Azmat", image: PyfDelegateCard2 },
  { name: "Asim Azhar", image: PyfDelegateCard3 },
  { name: "Arman Rahim", image: PyfDelegateCard4 },
  { name: "Kashmir Band", image: PyfDelegateCard5 },
  { name: "Natasha Baig", image: PyfDelegateCard6 },
];

const PyfCard = () => {
  return <PyfDelegateCard delegates={delegates} title="Delegates" />;
};

export default PyfCard;