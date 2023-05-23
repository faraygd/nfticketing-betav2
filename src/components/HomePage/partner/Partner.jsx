export const Partner = () => {
  return (
    <section className="mt-32 md:mt-56" id="partner" data-aos="fade-up">
      <div className="container px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <h1 className="font-extrabold mx-auto text-center max-w-2xl text-4xl tracking-tight leading-none xl:text-6xl md:text-5xl text-white">
          Partners
        </h1>
        {/* Feature */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-12 mt-20">
          <div className="bg-gray-500 py-4 px-6 rounded-md flex justify-center" data-aos="fade-up">
            <img
              className="h-20 md:h-40 rounded"
              src="/images/microsoft_light.svg"
              alt="vendor"
            />
          </div>
          <div className="bg-gray-500 py-4 px-6 rounded-md flex justify-center" data-aos="fade-up">
            <img
              className="h-20 md:h-40 rounded"
              src="/images/meta_light.svg"
              alt="vendor"
            />
          </div>
          <div className="bg-gray-500 py-4 px-6 rounded-md flex justify-center" data-aos="fade-up">
            <img
              className="h-20 md:h-40 rounded"
              src="/images/salesforce.svg"
              alt="vendor"
            />
          </div>
          <div className="bg-gray-500 py-4 px-6 rounded-md flex justify-center" data-aos="fade-up">
            <img
              className="h-20 md:h-40 rounded"
              src="/images/twitch.svg"
              alt="vendor"
            />
          </div>
          <div className="bg-gray-500 py-4 px-6 rounded-md flex justify-center" data-aos="fade-up">
            <img
              className="h-20 md:h-40 rounded"
              src="/images/netflix.svg"
              alt="vendor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
