import React from "react";
import { motion } from "framer-motion";
import LiquidGlassButton from "../ui/LiquidGlassButton";

export default function ServiceCard({ title, description, buttonText, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative rounded-3xl border border-white/10 backdrop-blur-2xl p-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(30, 58, 95, 0.50) 0%, rgba(10, 22, 40, 0.72) 100%)",
        boxShadow: "0 30px 70px -40px rgba(0,0,0,0.75)",
      }}
    >
      {/* glow */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(6,182,212,0.10) 45%, rgba(2,6,12,0) 70%)",
        }}
      />

      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/60 leading-relaxed mb-7">{description}</p>
        <LiquidGlassButton className="w-full">{buttonText}</LiquidGlassButton>
      </div>
    </motion.div>
  );
}
