import { motion } from "framer-motion";
import Fingerprint3D from "./Fingerprint3D";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* LEFT CONTENT */}
        <div>
          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight"
          >
            Discover Your Child’s{" "}
            <span className="text-blue-600">Inborn Talent</span>
          </motion.h1> */}

          <motion.h1 className="text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
            Finger Mind DMIT <br />
            <span className="text-blue-600">
              Unlock Your Child’s True Potential
            </span>
          </motion.h1>

          <p className="text-blue-600 font-medium mt-2">
            Decode Intelligence. Design the Future.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-gray-600 text-base"
          >
            Scientific DMIT analysis to identify intelligence, learning style,
            and career potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 flex gap-4"
          >
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition">
              Book Test
            </button>

            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* RIGHT 3D */}
        <div className="h-[250px] md:h-[320px]">
          <Fingerprint3D />
        </div>
      </div>
    </section>
  );
}
