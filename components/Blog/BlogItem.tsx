"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const RentalBox = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, priceDetails, note } = blog;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        {/* Image Section */}
        <div
          className="relative block aspect-[368/239] cursor-pointer"
          onClick={openModal}
        >
          <Image
            src={mainImage || "/default-image.jpg"}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <div className="px-4">
          {/* Title */}
          <h3 className="text-center mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black dark:text-white xl:text-itemtitle2">
            {title}
          </h3>

          {/* Rental Pricing Table */}
          <table className="w-full text-sm">
            <tbody>
              {priceDetails.map((detail, index) => (
                <tr key={index}>
                  <td className="p-2 border-b">{detail.duration}</td>
                  <td className="p-2 border-b">{detail.price}</td>
                  <td className="p-2 border-b">{detail.time}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="text-xs text-gray-600 pt-5">
                  <strong>{note}</strong>
                  <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Static Warning Message Above the Table */}
        <div className="bg-yellow-200 text-black p-1 rounded-md mt-2 text-center">
          Harga bisa berubah kapan saja, terutama saat <strong>High Season</strong> dan <strong>Peak Season</strong>.
        </div>
      </motion.div>

      {/* Modal for Image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-4xl w-full bg-white rounded-lg p-4 shadow-lg dark:bg-blacksection">
            <button
              className="absolute top-2 right-2 text-black dark:text-white"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="relative w-full h-[70vh]">
              <Image
                src={mainImage || "/default-image.jpg"}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RentalBox;
