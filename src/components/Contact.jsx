// import { useState } from "react";

// export default function Contact() {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <section className="py-20 bg-primary text-white text-center">
//       <h2 className="text-4xl font-bold">Start Your DMIT Journey Today</h2>

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           setShowPopup(true);
//         }}
//         className="mt-10 max-w-md mx-auto space-y-4"
//       >
//         <input placeholder="Name" className="w-full p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
//         <input placeholder="Email" className="w-full p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

//         <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition">
//           🚀 Register Now
//         </button>
//       </form>

//       {showPopup && (
//         <div className="mt-6 bg-white text-black p-4 rounded">
//           Please check your email for more information
//         </div>
//       )}
//     </section>
//   );
// }
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ksrqb6n",      // email serviece id
        "template_5fawzo8",     // template id
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        "LuWe7qDvIc7qENAKW"       // public key
      )
      .then(() => {
        setLoading(false);
        setShowPopup(true);
        setFormData({ name: "", email: "", phone: "" });
      })
      .catch((error) => {
        console.error("Email error:", error);
        setLoading(false);
      });
  };

  return (
    <section className="py-20 bg-primary text-white text-center">
      <h2 className="text-4xl font-bold">
        Register for Finger Mind DMIT
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-md mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
        >
          {loading ? "Sending..." : "Register Now"}
        </button>
      </form>

      {/* POPUP */}
      {showPopup && (
        <div className="mt-6 bg-white text-black p-4 rounded shadow">
          ✅ Registration successful! Check your email.
        </div>
      )}
    </section>
  );
}