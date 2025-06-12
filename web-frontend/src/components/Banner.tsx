

const Banner = () => {
  return (
    <div className="bg-emerald-900 text-white py-20 px-6 md:px-12 rounded-3xl shadow-xl text-center md:text-left">
      <div className="max-w-4xl mx-auto">
        <h6 className="text-sm uppercase tracking-widest text-white/70 mb-3">
          Welcome To Cabbage Shop!
        </h6>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <em className="not-italic text-white/90">Browse</em> Our Products Here
        </h2>
        <a
          href="/browse"
          className="inline-block bg-white text-green font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Browse Now
        </a>
      </div>
    </div>
  );
};

export default Banner;


