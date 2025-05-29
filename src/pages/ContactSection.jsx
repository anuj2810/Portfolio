
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";
import { FaXTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
  ) {
    newErrors.email = "Enter a valid email address.";
  }
    if (!formData.phone.trim()) {
    newErrors.phone = "Phone is required.";
      } else if (!/^\d{10,}$/.test(formData.phone.trim())) {
        newErrors.phone = "Phone must be at least 10 digits and numeric only.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };



const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  const SERVICE_ID = "service_5rl2bvm";
  const TEMPLATE_ID = "template_p4noifp";
  const USER_ID = "b6bO7mc0ULzSXU5ei";

  // 1. Send Email
  emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
    .then(() => {
      toast.success("✅ Message sent successfully!");

      // 2. Send WhatsApp Message instead of SMS
      if (formData.phone.trim() !== "") {
        fetch("http://localhost:5000/send-whatsapp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: formData.phone, // Format must be like: +91XXXXXXXXXX
            message: `Hi ${formData.name}, thank you for contacting me! I’ll get back to you shortly.`,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.success) {
              toast.warning("⚠️ WhatsApp not sent: " + data.error);
            }
          })
          .catch((err) => {
            console.error("WhatsApp error:", err);
            toast.error("❌ Failed to send WhatsApp message.");
          });
      }

      // 3. Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    })
    .catch(() => {
      toast.error("❌ Failed to send message. Try again later.");
    });
};



  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="relative py-24 px-6 bg-gradient-to-br from-gray-100 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Want to discuss something exciting? Just drop a message!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <ContactItem icon={<Phone />} text="+91- 9554019387" />
              <ContactItem icon={<FaWhatsapp />} text="WhatsApp Chat" link="https://wa.me/+919554019387" />
              <ContactItem icon={<Mail />} text="aryan07vns@gmail.com" link="mailto:aryan07vns@gmail.com" />
              <ContactItem icon={<FaLinkedin />} text="Connect with me on LinkedIn " link="https://linkedin.com/in/imanuj-arya/" />
              <ContactItem icon={<Github />} text="GitHub Profile" link="https://github.com/anuj2810" />
              <ContactItem icon={<FaXTwitter />} text="Connect with me on X" link="https://x.com/aryan07vns" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {["name", "email", "phone", "message"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 capitalize">
                  {field} {["name", "email","phone", "message"].includes(field) && "*"}
                </label>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
                  />
                ) : (
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600"
                  />
                )}
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" />
    </motion.section>
  );
}

function ContactItem({ icon, text, link }) {
  return (
    <div className="flex items-center space-x-3 hover:text-indigo-600 transition-all duration-200">
      <div className="w-5 h-5">{icon}</div>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" >
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

