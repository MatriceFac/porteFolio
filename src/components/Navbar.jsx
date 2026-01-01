// import { Container } from "lucide-react ";

import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-2">
      <a href="#" className="flex items-center font-bold text-3xl md:text-4xl">
        {/* <Container className="mr-2" /> */}
  
        <Container/>
        Matrice <span className="text-accent">DEVOPS</span>
      </a>

      <ul className="hidden md:flex items-center space-x-6  ">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>

        <li>
          <a href="#About" className="btn btn-sm btn-ghost">
            A propos
          </a>
        </li>
        <li>
          <a href="#Experience" className="btn btn-sm btn-ghost">
            Experience
          </a>
        </li>
        <li>
          <a href="#Projet" className="btn btn-sm btn-ghost">
            Projets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
