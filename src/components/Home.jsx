import { Mail } from "lucide-react";
import img from '../assets/img1.jpg';

const Home = () => {
  return(
    <div className=" flex flex-col-reverse md:flex-row items-center justify-center md:my-23 my-10" id="Home">
      <div className="font-bold text-center md:text-left text-2xl md:text-4xl">
        Bonjour, <br /> Je suis <span className="text-accent font-bold text-2xl">Matrice</span> <br/>
        
        <p>Developpeur Datascientist </p>
        <p>Developpeur web backend-end </p>
        <p>Developpeur web front-end </p>
       
         <a href="#" className="btn btn-accent mt-4 font-bold w-full ">
          <Mail/>
          Contactez-moi
        </a>

      </div>
      <div className="md:ml-10">
        <img src={img} alt=""  className="border-8 border-accent  object-cover w-96 h-96" style={{borderRadius:"30% 70% 70% 30% / 70% 62% 55% 33%"}}/>
      </div>
    </div>
  );
};

export default Home;
