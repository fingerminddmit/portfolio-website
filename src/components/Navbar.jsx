import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      {/* LOGO + BRAND */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Finger Mind DMIT"
          // className="h-10 w-auto"
          className="h-10 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        />

        <div className="leading-tight">
          {/* <h1 className="text-xl md:text-2xl font-bold text-blue-700 tracking-tight">
            Finger Mind <span className="text-blue-500">DMIT</span>
          </h1> */}
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Finger Mind DMIT
          </h1>
        </div>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:scale-105 transition">
        Book Test
      </button>
    </nav>
  );
}

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">

//       {/* BRAND */}
//       <h1 className="text-xl md:text-2xl font-bold text-blue-700 tracking-tight">
//         Finger Mind <span className="text-blue-500">DMIT</span>
//       </h1>

//       <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:scale-105 transition">
//         Book Test
//       </button>
//     </nav>
//   );
// }
