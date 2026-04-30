import { motion } from "framer-motion";
import { Brain, GraduationCap, Users, Briefcase } from "lucide-react";

export default function Support() {
  const data = [
    {
      icon: <Brain size={28} />,
      title: "Understand Learning Style",
      desc: "Identify whether your child is visual, auditory, or kinesthetic learner to improve academic performance.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Academic Clarity",
      desc: "Choose the right subjects, reduce study stress, and improve focus with personalized learning strategies.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Career Guidance",
      desc: "Discover the most suitable career path based on natural abilities and intelligence distribution.",
    },
    {
      icon: <Users size={28} />,
      title: "Better Parenting & Relationships",
      desc: "Understand behavior patterns and improve communication between parents, children, and individuals.",
    },
  ];

  return (
    <section className="py-24 bg-white text-center px-6">
      
      <h2 className="text-4xl font-bold text-blue-600">
        How DMIT Supports You
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-gray-600">
        DMIT is not just a test — it provides actionable insights that help individuals,
        parents, and students make smarter decisions in education, career, and life.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white hover:scale-105 transition"
          >
            <div className="text-blue-600 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}