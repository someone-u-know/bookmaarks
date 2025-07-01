'use client';

export default function Footer() {
  return (
    <footer className="bg-[#FF6B4D] text-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        {/* Left - Brand */}
        <div className="text-2xl font-bold">
          Bookmaarks
        </div>

        {/* Right - Links */}
        <div className="space-x-2 text-sm font-medium">
          <a href="#">Our Team</a>| {" "}
          <a href="#">Products</a>| {" "}
          <a href="#">Vision</a>| {" "}
          <a href="#">Want to be a Partner ?</a>
        </div>
      </div>


      <div className="text-center mt-16">
          <p className="text-sm font-medium">
            Any Suggestions? Feedback? Drop it here
          </p>
          <a href="/" className="text-sm font-semibold">
            hkapalavai@gmail.com
          </a>
        </div>
    </footer>
  );
}
