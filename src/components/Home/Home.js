import React from "react";

export default function Home() {
  return (
    <>
      <nav class="flex items-center justify-between p-4">
        <div class="placeholder h-10 w-20 rounded-md"></div>
        <div class="flex items-center gap-2 max-[1000px]:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-earth"
          >
            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
            <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
            <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </div>
      </nav>

      <div className="intro mx-auto p-20">
        <nav className="  ">
          <h2>ايفوري</h2>
          <h2>
            تسعي ايفوري للتدريب و الاستشارات لتحقيق مستوي عالي من التميز في
            برامجها التدريبيه
          </h2>
          <h3>
            نهدف من خلال خدماتنا الاحترافيه الفعاله الى الوصول بعملائنا نحو
            زياده الانتاجيه و رفع الكفاءه و ترشيد التكلفه التشغيليه
          </h3>
          <button className="flex items-center my-6 gap-2 py-2 px-4 border-white/65 border rounded-lg text-white cursor-pointer">
            المزيد من التفاصيل
          </button>
        </nav>
      </div>
    </>
  );
}
