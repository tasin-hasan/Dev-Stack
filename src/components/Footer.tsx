import Logo from "../assets/logo-text.png";
import { GoDotFill } from "react-icons/go";
const Footer = () => {
  return (
    // Footer section
    <section className="max-w-[80%] mx-auto">
      <div className=" grid  my-3  grid-cols-5 md:gap-12">


        <div className="col-span-5 flex flex-col items-center text-center gap-6 md:col-span-2 md:items-start md:text-start">
          <img src={Logo} alt="" className="w-37.5" />

          <p className="text-gray-400">
            Curated tools, technologies, and resources for developers building
            modern software
          </p>

          <ul className="flex gap-7 text-gray-400 items-center">
            <li>GitHub</li>
            <GoDotFill className="text-gray-500 md:hidden" />
            <li>Twitter</li>
            <GoDotFill className="text-gray-500 md:hidden" />
            <li>Linkedin</li>
          </ul>
        </div>


        <div className="hidden md:block md:col-span-1">
          <h3 className="text-lg font-semibold">PRODUCT</h3>
          <p className="text-gray-400">Home</p>
          <p className="text-gray-400">Technologies</p>
          <p className="text-gray-400">Projects</p>
        </div>



        <div className="hidden md:block md:col-span-1">
          <h3 className="text-lg font-semibold">COMPANY</h3>
          <p className="text-gray-400">About</p>
          <p className="text-gray-400">Contact</p>
          <p className="text-gray-400">Careers</p>
        </div>



        <div className="hidden md:block md:col-span-1">
          <h3 className="text-lg font-semibold">LEGAL</h3>
          <p className="text-gray-400">Privacy Policy</p>
          <p className="text-gray-400">Terms of Service</p>
        </div>


      </div>

      <div className="divider my-5 opacity-50"></div>

      <div className="flex justify-between mb-7"> 
         {/* from daisy UI  */}
        <p className="text-gray-400">
            ©  {new Date().getFullYear()} DevStack All rights reserved
        </p>

        <div className="text-gray-400 flex gap-7">
            <p>Privacy</p>
            <p>Terms</p>
        </div>
      </div>

    </section>
  );
};

export default Footer;
