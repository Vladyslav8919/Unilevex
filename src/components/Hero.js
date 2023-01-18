import heroImg from '../images/hero-img.png';

const Hero = () => {
  return (
    <div className="bg-[#feefe0] h-[95vh]">
      <section className="container items-center px-4 pb-12 mx-auto mt-0 flex md:px-40 h-full">
        <div className="flex-grow space-y-4 sm:text-center lg:text-left">
          <p className="max-w-xl leading-relaxed text-[#23292E] sm:mx-auto lg:ml-0">
            Interior Needs
          </p>
          <h1 className="text-4xl font-bold text-[#23292E]">
            Various new collections of furniture to decorate the corner of your
            house.
          </h1>
          <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start ">
            <a
              href="#shop"
              className="block px-6 py-2 text-center text-[#feefe0] bg-[#23292E] "
            >
              Shop now
            </a>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            className="w-full ml-auto mr-0 lg:ml-auto mt-6 lg:w-4/5 hidden lg:block"
            alt="Bedside table"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
