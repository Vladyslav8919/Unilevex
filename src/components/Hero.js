import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-img.jpg';

const Hero = () => {
  return (
    <section className="flex items-center bg-[#fff] min-h-[90vh] max-h-[100vh]">
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
        <article className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-end">
          <img
            src={heroImg}
            className="h-auto w-3/4 bg-cover hidden lg:block"
            alt="Bedside table"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
