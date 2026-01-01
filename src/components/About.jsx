import Title from "./Title";
import img from "../assets/img1.jpg";
import {
  DatabaseBackup,
  DiamondPlus,
  LucideSeparatorVertical,
} from "lucide-react";

// 2. comportement

const data = [
  {
    id: 1,
    titre: "data-sciences",
    desc: "l'ia est a jours",
    icon: <DatabaseBackup />,
  },
  { id: 2, titre: "dev React", desc: "dev front-end", icon: <DiamondPlus /> },
  {
    id: 3,
    titre: "dev Laravel",
    desc: "dev backend",
    icon: <LucideSeparatorVertical />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title titre="A propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div>
          <img
            src={img}
            alt=""
            className="border-xl rounded-2xl hidden md:block  object-cover w-96 h-96"
          />
        </div>
        <div className="md:ml-4 space-y-4 ">
          {data.map((item) => (
            <div key={item.id} className=" flex flex-col items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
              <div className="md:ml-2 md:mb-0 ">{item.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{item.titre}</h2>
                <p className="text-sm text-gray-600  flex-col md:flex-row items-center bg-base-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
