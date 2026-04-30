import { motion } from "framer-motion";
import { Brain, FileText, Sparkles } from "lucide-react";

export default function ScienceReport() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-blue-700">
          Science + Your Personalized Report
        </h2>

        <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
          DMIT combines neuroscience and fingerprint analysis to generate a
          powerful, personalized report that helps you make better life decisions.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* LEFT - SCIENCE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-premium border border-white/40 transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10">
              <div className="text-blue-600 mb-4">
                <Brain size={32} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">
                Science Behind DMIT
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Fingerprints are formed before birth and are directly linked to brain development.
                Each unique pattern reflects neural distribution and intelligence potential.
              </p>

              <p className="mt-3 text-gray-600">
                This scientific approach helps decode personality, strengths, and learning behavior.
              </p>
            </div>
          </motion.div>

          {/* RIGHT - REPORT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-premium border border-white/40 transition"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10">
              <div className="text-blue-600 mb-4">
                <FileText size={32} />
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">
                What You Will Receive
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">
                <li>✔ 40+ Page Detailed DMIT Report</li>
                <li>✔ Multiple Intelligence Analysis</li>
                <li>✔ Learning Style Identification</li>
                <li>✔ Career Recommendations</li>
                <li>✔ SWOT Analysis</li>
                <li>✔ Expert Counselling Session</li>
              </ul>

              <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                <Sparkles size={18} />
                Personalized & Actionable Insights
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}