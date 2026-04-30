import { motion } from "framer-motion";

import talentImg from "../assets/benefits/talent.png";
import careerImg from "../assets/benefits/career.png";
import parentingImg from "../assets/benefits/parenting.png";
import learningImg from "../assets/benefits/learning.png";

const benefits = [
  {
    title: "Early Talent Discovery",
    desc: "Identify a child’s natural abilities at an early stage to guide learning effectively.",
    img: talentImg,
  },
  {
    title: "Right Career Direction",
    desc: "Choose a career path aligned with strengths and intelligence distribution.",
    img: careerImg,
  },
  {
    title: "Better Parenting Decisions",
    desc: "Understand behavior patterns and improve communication with your child.",
    img: parentingImg,
  },
  {
    title: "Improved Learning Outcomes",
    desc: "Adapt study methods based on brain dominance and learning style.",
    img: learningImg,
  },
];

export default function Benefits() {
  return (
    <section className="py-28 bg-gray-50 px-6">

      <h2 className="text-4xl font-bold text-center text-blue-700">
        How DMIT Benefits You
      </h2>

      <div className="mt-20 space-y-16 max-w-6xl mx-auto">

        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* TEXT */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-1 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}