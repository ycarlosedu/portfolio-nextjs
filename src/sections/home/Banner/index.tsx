"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const bg =
  "bg-gradient-to-b from-slate-100 to-cyan-300 dark:from-slate-900 dark:to-cyan-300";

export default function Banner() {
  return (
    <section className="w-full min-h-screen max-h-screen relative flex flex-col items-center justify-center text-center transition-all bg-banner-gradient-light dark:bg-banner-gradient-dark">
      <div className="w-full h-full flex flex-col container items-center justify-center relative">
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="w-full max-w-[70%] max-h-[70%] self-start z-10"
        >
          <Image
            src="/images/banner-laptop.webp"
            alt="Imagem de um laptop com códigos."
            width={2500}
            height={2000}
            className="w-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute top-[40%] z-20 p-8 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100"
        >
          <h1 className="scroll-m-20 text-white dark:text-white text-3xl font-normal tracking-wider">
            Transformando ideias em
            <br />
            <strong className="text-5xl">experiências digitais</strong>
          </h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-screen absolute bottom-0 left-0 z-0"
      >
        <Image
          src={"/images/banner-mask.png"}
          alt="Imagem de uma forma geométrica aleatória."
          width={1920}
          height={666}
          className="w-full"
        />
      </motion.div>
    </section>
  );
}
