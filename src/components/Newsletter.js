const Newsletter = () => {
  return (
    <section className="xl: py-[15rem] px-0">
      <div className="section-center">
        <h3 className="font-semibold text-4xl mb-8">
          Join our newsletter and get 20% off
        </h3>
        <div className="content  lg:grid lg:grid-cols-2 items-center gap-24 mt-8">
          <p className="lg:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ab
            neque voluptatum voluptate iste reiciendis ullam quae iure natus et.
          </p>
          <form
            action="https://formspree.io/f/xpzewggv"
            method="POST"
            className="w-[90vw] max-w-[500px] grid grid-cols-[1fr_auto] "
          >
            <input
              type="email"
              name="email"
              className="placeholder:uppercase border-b-2 border-gray-100 appearance-none  focus:outline-none focus:shadow-outline  focus:border-black"
              placeholder="Email"
            />
            <button
              type="submit"
              className="border-2 border-black px-4 py-2 ml-4 font-semibold "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
