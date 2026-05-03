"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail } from "../actions/sendEmail";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-light text-neutral-400 mb-4">
        Let&apos;s build something
      </h2>
      <p className="text-sm text-neutral-500 mb-12">
        I reply within 24 hours. No pressure, no pitch.
      </p>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="trigger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-full max-w-md py-4 px-6 rounded-xl border border-neutral-200 bg-white text-left text-neutral-400 hover:border-neutral-300 hover:text-neutral-600 transition-colors"
            >
              What are you looking to build?
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto space-y-4 overflow-hidden"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
            />

            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${
                status === "sent"
                  ? "bg-green-50 text-green-600 border border-green-200"
                  : status === "error"
                  ? "bg-red-50 text-red-600 border border-red-200"
                  : "bg-neutral-800 text-white hover:bg-neutral-700"
              }`}
            >
              {status === "idle" && "Send it my way"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Sent — I'll reply soon"}
              {status === "error" && errorMsg}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
}