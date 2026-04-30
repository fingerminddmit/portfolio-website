import { Brain, Target, User } from "lucide-react";

export default function Features() {
  const data = [
    { icon: <Brain />, title: "Intelligence Mapping" },
    { icon: <Target />, title: "Career Guidance" },
    { icon: <User />, title: "Personality Insights" },
    // { icon: <Brain />, title: "Inborn Talent Identification" },
    // { icon: <Target />, title: "Learning Style Analysis" },
    // { icon: <User />, title: "Brain Lobes Activation Report" },
    // { icon: <Target />, title: "Career Guidance & Counselling" },
    // { icon: <Brain />, title: "Multiple Intelligence Mapping" },
    // { icon: <User />, title: "Personality & Behavior Insights" },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-secondary">
        What You Get
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-premium hover:scale-105 transition"
          >
            <div className="text-primary mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}