import Link from "next/link";
export const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container grid grid-cols-1 xl:grid-cols-2 justify-between gap-4 px-4 pb-8 mx-auto mb-12 pt-20">
        <div className="" data-aos="fade-up">
          <div>
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight leading-10 xl:leading-tight md:text-5xl xl:text-6xl text-white"
            >
              Bring
              <br />
              Your Experience Ticketing
              <br />
              with Us
            </h1>
            <p className="mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Buy music tickets easily and quickly for you
              <br /> using cryptocurrency.
            </p>
          </div>
          <div className="flex mt-6">
            <Link
              href="/buyticket"
              className="py-4 px-8 text-white border font-bold border-white rounded"
            >
              Buy Ticket
            </Link>
          </div>
        </div>
        <div className="mb-6 flex order-first md:order-none justify-around" data-aos="fade-right">
          <img
            className="w-full xl:w-[410px] h-[350px]"
            src="/images/ticket-hero.png"
          />
        </div>
      </div>
    </section>
  );
};
