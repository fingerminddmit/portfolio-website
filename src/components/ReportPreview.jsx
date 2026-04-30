import { motion } from "framer-motion";

export default function ReportPreview() {
  return (
    <section className="py-20 bg-gray-50 px-6">

      <h2 className="text-4xl font-bold text-center text-blue-600">
        Your DMIT Report Preview
      </h2>

      <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT - GRAPH */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h3 className="font-semibold mb-4">Multiple Intelligence</h3>

          <div className="space-y-3">
            {[
              { label: "Logical", value: 80 },
              { label: "Creative", value: 65 },
              { label: "Analytical", value: 90 },
              { label: "Social", value: 70 },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-sm">{item.label}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - PROFILE */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow"
        >
          <h3 className="font-semibold mb-4">Personality Insights</h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Strong analytical thinking</li>
            <li>✔ Visual learner</li>
            <li>✔ High focus ability</li>
            <li>✔ Creative problem solving</li>
          </ul>

          <div className="mt-6 p-4 bg-blue-50 rounded">
            <p className="font-semibold">Recommended Career</p>
            <p>Engineering / Design / Data Science</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}