import BannerImage from "../assets/banner-stack.png"

const Banner = () => {
  return (
    //banner section
    <section className={`max-w-[80%] mx-auto my-8 flex flex-col  items-center md:flex-row md:justify-between`}>


      <div className="flex flex-col items-center space-y-5 md:items-start md:space-y-8">
        <h1 className="text-center text-4xl font-bold md:text-start md:text-6xl">
          Build Your Ideal <br /> <span className="gradient-text">Development Stack</span>
        </h1>

        <p className="font-light text-center text-sm  md:text-start md:text-lg">
          Explore frontend, backend, database, and tooling options, <br />compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-5">
            <button className="btn gradient-bg font-light text-white px-4">Explore Technologies</button>

            <button className="btn font-light text-gray-600 px-10">Learn More</button>
        </div>
      </div>


      <div className="max-w-125">
        <img src={BannerImage} alt=""  className="object-contain w-full"/>
      </div>

    </section>
  );
};

export default Banner;
