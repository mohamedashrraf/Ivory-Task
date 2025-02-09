import React from "react";

export default function Home() {
  return (
    <>
      <div className="intro mx-auto p-20 mt-10">
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
          <button className="flex items-center my-6 gap-2 py-2 px-4 border-white/65 border rounded-lg text-white cursor-pointer">المزيد من التفاصيل</button>
          
        </nav>
      </div>
    </>
  );
}
