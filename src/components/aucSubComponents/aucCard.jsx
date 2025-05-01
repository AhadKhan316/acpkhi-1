import React from "react";
import AucDelegateCard from "../aucReusableComponents/aucDelegatesCard";

import AucDelegateCard1 from "/src/assets/auc-assets/auc-delegate-card1.jpeg"
import AucDelegateCard2 from "/src/assets/auc-assets/auc-delegate-card2.jpeg"
import AucDelegateCard3 from "/src/assets/auc-assets/auc-delegate-card3.jpeg"
import AucDelegateCard4 from "/src/assets/auc-assets/auc-delegate-card4.jpeg"
import AucDelegateCard5 from "/src/assets/auc-assets/auc-delegate-card5.jpeg"

// Delegate data
const delegates = [
  {
    name: "Adnan Siddiqui",
    // title: "Urdu Literature Expert",
    image: AucDelegateCard1,
    // bio: "Renowned scholar with over 20 years of research in Urdu poetry.",
  },
  {
    name: "Iftikhar Arif",
    // title: "Linguistics Scholar",
    image: AucDelegateCard2,
    // bio: "Expert in Urdu linguistics and its evolution in modern times.",
  },
  {
    name: "Humayun Saeed",
    // title: "Poet & Writer",
    image: AucDelegateCard3,
    // bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
  {
    name: "Sohail Waraich",
    // title: "Poet & Writer",
    image: AucDelegateCard4,
    // bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
  {
    name: "Hameeda Shaheen",
    // title: "Poet & Writer",
    image: AucDelegateCard5,
    // bio: "Award-winning poet known for contemporary Urdu ghazals.",
  },
];

const AucCard = () => {
  return <AucDelegateCard delegates={delegates} title="Delegates" />;
};

export default AucCard;