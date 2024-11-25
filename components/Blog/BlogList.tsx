"use client";
import { Blog } from "@/types/blog";
import RentalBox from "./BlogItem";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  const warningMessage =
    "Harga dapat berubah sewaktu-waktu tanpa pemberitahuan, terutama saat HIGH SEASON dan PEAK SEASON. Pastikan untuk menanyakan harga terkini kepada kami.";

  return (
    <div className="space-y-8">
      {/* Display the warning message just once above the rental boxes */}
      <div className="bg-yellow-200 text-black p-4 rounded-md mb-6">
        <strong>Perhatian:</strong> {warningMessage}
      </div>

      {/* Loop through and display each RentalBox */}
      {blogs.map((blog) => (
        <RentalBox key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
