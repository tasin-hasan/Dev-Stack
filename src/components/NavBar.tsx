import Logo from "../assets/logo-text.png";
import Hamberger from "../assets/hamburger.png"
import { useState } from "react";
const NavBar = () => {
    const [navBarbtn, setNavBarBtn] = useState<"signin" | "signup">("signup");

    const handleNavBtn = (btnType:"signin" | "signup")=> {
        setNavBarBtn(btnType);
    }
    

    return (
        <nav className="py-5 border-b border-gray-200 bg-white sticky top-0 z-50">
            <section className="flex justify-between items-center max-w-[80%] mx-auto">
                <div>
                    <img src={Logo} alt="" className="hidden md:block md:w-30" />

                    <img src={Hamberger}  alt="" className="block md:hidden"/>                    
                </div>

                <ul className="hidden md:flex gap-5">
                    <li className="text-[#f53199] font-semibold"><a href="#">Home</a></li>
                    <li className="font-light"><a href="#">Technologies</a></li>
                    <li className="font-light"><a href="#">Projects</a></li>
                    <li className="font-light"><a href="#">About</a></li>
                    <li className="font-light"><a href="#">Contact</a></li>
                </ul>

                <div className="flex gap-5 items-center ">
                    <button className={`btn ${navBarbtn === "signin"? "btn-secondary": ""}`} onClick={()=>handleNavBtn("signin")}>Sign In</button>

                    <button className={`btn ${navBarbtn === "signup"? "btn-secondary": ""}`} onClick={()=>handleNavBtn("signup")}>Sign Up</button>
                </div>

            </section>
        </nav>
    );
};

export default NavBar;