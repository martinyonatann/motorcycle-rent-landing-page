"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Fitur Mulai ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Judul Bagian Mulai --> */}
          <SectionHeader
            headerInfo={{
              title: "Keunggulan",
              subtitle: "Keunggulan Kami",
              description: `Layanan kami menawarkan motor berkualitas dengan paket sewa yang fleksibel. 
                            Nikmati perjalanan tanpa ribet dengan berbagai pilihan yang kami sediakan.`,
            }}
          />
          {/* <!-- Judul Bagian Selesai --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Item Fitur Mulai --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Item Fitur Selesai --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Fitur Selesai ===== --> */}
    </>
  );
};

export default Feature;
