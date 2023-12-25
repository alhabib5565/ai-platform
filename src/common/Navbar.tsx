const Navbar = () => {
  return (
    <div className="px-6 py-4 border-b-2 shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">Awesome AI Platform</h3>
      </div>
      <div className="flex gap-4 items-center">
        <a
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          href="#"
        >
          Favorites
        </a>
        <a
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          href="#"
        >
          Resources
        </a>
        <a
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          href="#"
        >
          Latest AI News
        </a>
        <a
          className="p-2 text-gray-700 font-semibold hover:text-gray-900 hover:hover:bg-slate-200 rounded-lg"
          href="#"
        >
          Join Discord
        </a>

        <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Navbar;
