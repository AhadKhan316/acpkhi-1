import React from "react";
import { motion } from "framer-motion";
import Cards from "../components/Cards";

// Importing images
import execDirectorImg from "../assets/team/daniyal.png";
import director1 from "../assets/team/shakil-khan.png";
import director2 from "../assets/team/shakil-rizvi.png";
import director3 from "../assets/team/bashir-saddozai.png";
import director4 from "../assets/team/arman.png";
import img1 from "../assets/team/jahanzaib.png";
import img2 from "../assets/team/khalid-ahmed.png";
import img3 from "../assets/team/ahsan-bari.png";
import img4 from "../assets/team/syed-darain.png";
import img5 from "../assets/team/hurmat.png";
import img6 from "../assets/team/sharjeel.png";
import img7 from "../assets/team/mjunaid-bhai.png";
import img8 from "../assets/team/rohail.png";
import img9 from "../assets/team/sheela.png";
import img10 from "../assets/team/Raza.png";
import img11 from "../assets/team/manzoor.png";
import img12 from "../assets/team/khurrum-bhai.png";
import img13 from "../assets/team/muhammad-ali.png";
import img14 from "../assets/team/muhammad-zeeshan.png";
import img15 from "../assets/team/shahida.png";
import img16 from "../assets/team/asghar-ali.png";
import img17 from "../assets/team/imad-ur-rehman.png";
import img18 from "../assets/team/128353.png";
import img19 from "../assets/team/anees-fatima.png";
import img20 from "../assets/team/umesh.png";
import img21 from "../assets/team/azaib.png";
import img22 from "../assets/team/mustafajan.png";
import img23 from "../assets/team/asim.png";
import img24 from "../assets/team/hamna-khalid.png";

const TeamMembers = () => {
  const directors = [
    { id: 1, name: "Shakil Khan", description: "Director Administration", image: director1, buttonText: "Learn More" },
    { id: 2, name: "Shakil Haider Jafri", description: "Director Food & Beverages", image: director2, buttonText: "Learn More" },
    { id: 3, name: "M Bashir Khan", description: "Resident Director - District Central", image: director3, buttonText: "Learn More" },
    { id: 4, name: "Arman Rahim", description: "Director Academies", image: director4, buttonText: "Learn More" },
  ];

  const managers = [
    { id: 1, name: "Jahanzeb Ali Shah", description: "Head of International Collaboration", image: img1, buttonText: "Learn More" },
    { id: 2, name: "Khalid Ahmed", description: "Head of Theatre", image: img2, buttonText: "Learn More" },
    { id: 3, name: "Ahsan Bari", description: "Director Special Programs Music & HOD Music", image: img3, buttonText: "Learn More" },
    { id: 4, name: "Syed Ali Darain", description: "Head of Finance Department", image: img4, buttonText: "Learn More" },
    { id: 5, name: "Hurmat Majid", description: "Executive Correspondent & Content Strategist", image: img5, buttonText: "Learn More" },
    { id: 6, name: "M. Sharjeel Shaikh", description: "Head of Programming & Operations", image: img6, buttonText: "Learn More" },
    { id: 7, name: "Muhammad Junaid", description: "Head of Editing & Animation", image: img7, buttonText: "Learn More" },
    { id: 8, name: "Rohail Khan", description: "Manager - Social Media & Content", image: img8, buttonText: "Learn More" },
    { id: 9, name: "Shahla Mehmood", description: "Manager - Press/Media", image: img9, buttonText: "Learn More" },
    { id: 10, name: "Yousuf Raza", description: "Head of Design & Communication", image: img10, buttonText: "Learn More" },
    { id: 11, name: "Manzoor Hussain", description: "Manager - Projects & Maintenance", image: img11, buttonText: "Learn More" },
    { id: 12, name: "Khurram Shehzad", description: "Director of Cinematography", image: img12, buttonText: "Learn More" },
    { id: 13, name: "Muhammad Ali", description: "Head of Communication Design", image: img13, buttonText: "Learn More" },
    { id: 14, name: "Muhammad Zeeshan", description: "Head of Fine Arts & Textile Design", image: img14, buttonText: "Learn More" },
    { id: 15, name: "Shahida Israr", description: "Programmer Manager", image: img15, buttonText: "Learn More" },
    { id: 16, name: "Asghar Ali", description: "Manager - Procurement", image: img16, buttonText: "Learn More" },
    { id: 17, name: "Imad ur Rehman", description: "Head of Audio Production", image: img17, buttonText: "Learn More" },
    { id: 18, name: "Yawer Shahzad", description: "Manager - Implement & Vigilance", image: img18, buttonText: "Learn More" },
    { id: 19, name: "S. Anees Fatima", description: "Chief Org Library", image: img19, buttonText: "Learn More" },
    { id: 20, name: "Umesh Ladhani", description: "Deputy Director Arts & Craft", image: img20, buttonText: "Learn More" },
    { id: 21, name: "Alam Zaib Khan", description: "Deputy Director Performing Arts", image: img21, buttonText: "Learn More" },
    { id: 22, name: "Mustafa Jan", description: "Operation Manager Academies", image: img22, buttonText: "Learn More" },
    { id: 23, name: "Asim Naqvi", description: "Academic Manager", image: img23, buttonText: "Learn More" },
    { id: 24, name: "Hamna Khalid", description: "Member Liaison Officer", image: img24, buttonText: "Learn More" },
  ];

  return (
    <div className=" text-black py-6 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-4">
        {/* Executive Director Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          // variants={fadeIn}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/7 relative">
                <div className="aspect-square lg:aspect-auto lg:h-full">
                  <img
                    src={execDirectorImg}
                    alt="Executive Director"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-6 lg:w-3/5">
                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Executive Director
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                  M. Daniyal Umer
                </h2>

                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    Leading the Arts Council of Pakistan, Karachi (ACPKHI), as the world's youngest Executive Director is an honour. Our mission is to enrich global culture, art, and literature. Over the past decade, working with President Mohammad Ahmed Shah (HI)(SI), I've focused on empowering youth creativity.
                  </p>
                  <p>
                    We've built a passionate team, and as ACPKHI grows as a cultural hub, I aim to integrate modern technology into our initiatives. With continued dedication, we will elevate ACPKHI as a global center for artistic excellence.
                  </p>
                </div>

                {/* <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                    Contact
                  </button>
                  <button className="px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Full Profile
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </motion.section>



        {/* Directors Section */}
        <Cards title="Directors" items={directors} />

        {/* Managers Section */}
        <Cards title="HOD / Managers" items={managers} />
      </div>
    </div>
  );
};

export default TeamMembers;