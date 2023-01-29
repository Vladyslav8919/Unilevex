import { Link } from 'react-router-dom';
import heroImg1 from '../assets/hero-img-1.jpg';

const Hero = () => {
  return (
    <section className="flex items-center bg-gradient-to-br from-[#FEEFE0] to-[#f9f6f1]  min-h-[90vh] max-h-[100vh]">
      <div className="section-center grid max-w-screen-xl px-4 py-8 mx-auto justify-center lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <article className="mr-auto place-self-center lg:col-span-7 text-center  md:text-center lg:text-left">
          <p className="max-w-2xl mb-6  md:mb-8 md:text-lg">Interior Needs</p>
          <h1 className="max-w-2xl mb-4 leading-normal text-4xl font-bold tracking-wide  md:text-4xl md:leading-relaxed  xl:text-4xl xl:leading-relaxed">
            Various new collections <br /> of furniture to decorate <br /> the
            corner of your house.
          </h1>

          <Link
            to="/products"
            className="w-[150px] px-2 py-2 mt-2 text-center text-[#fff] bg-black hover:bg-gray-900  ease-in-out duration-300 inline-flex items-center justify-center px-5 py-3 text-base font-normal text-center   text-white "
          >
            Shop now
          </Link>
        </article>
        <article className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end before:block before:absolute before:inset-6 before:bg-gradient-to-br from-[#f0e8d9] to-[#f9f6f1] relative inline-block">
          <img
            src={heroImg1}
            className=" relative h-auto w-5/6 bg-cover hidden lg:block before"
            alt="Bedside table"
          />
          {/* <img
            src={heroImg2}
            className="h-auto w-3/4 bg-cover hidden lg:block"
            alt="Bedside table"
          /> */}
        </article>
      </div>
    </section>
  );
};

export default Hero;
