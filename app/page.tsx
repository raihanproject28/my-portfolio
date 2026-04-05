"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const data = [
    {
      title: "Desain Poster",
      img: "/project1.png",
    },
    {
      title: "Editing Video",
      img: "/project2.png",
    },
    {
      title: "Logo Design",
      img: "/project3.png",
    },
  ];

  return (
    <main className="bg-[#f5f5f5] min-h-screen py-20 px-6">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Portfolio Saya
      </motion.h1>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >

            {/* IMAGE */}
            <div className="h-52 bg-gray-200">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/400x250")
                }
              />
            </div>

            {/* TEXT */}
            <div className="p-4 text-center font-semibold">
              {item.title}
            </div>
          </motion.div>
        ))}

      </div>
    </main>
  );
}