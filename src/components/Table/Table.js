import React from "react";

const courses = [
  {
    id: 2268,
    name: "الامتثال البيئي في الصناعات السعودية",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 5,750.00",
  },
  {
    id: 2269,
    name: "إعداد التقارير البيئية: التوثيق والمراجعة",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 5,550.00",
  },
  {
    id: 2248,
    name: "تقنيات الحد من التلوث الصناعي في الهواء",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 5,100.00",
  },
  {
    id: 2256,
    name: "التقنيات الحديثة في التقييم البيئي: من الذكاء الاصطناعي إلى نمذجة البيانات",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 5,550.00",
  },
  {
    id: 2243,
    name: "التعامل مع النفايات الخطرة: السلامة والتخزين الآمن",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 5,350.00",
  },
  {
    id: 2249,
    name: "إدارة تلوث الهواء في المناطق الحضرية: حلول شاملة",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 5,000.00",
  },
  {
    id: 2251,
    name: "التقنيات الحديثة في مراقبة تلوث الهواء",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 5,700.00",
  },
  {
    id: 2071,
    name: "CompTIA Project+",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 6,900.00",
  },
  {
    id: 2138,
    name: "المدراء المعتمدون في مجال الخدمات اللوجستية والنقل والتوزيع",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 6,550.00",
  },
  {
    id: 228,
    name: "الأخصائي المعتمد في الإستراتيجيات وتخطيط الأعمال",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 6,900.00",
  },
  {
    id: 270,
    name: "الشهادة الدولية الاحترافية في الخدمات اللوجستية وعمليات النقل",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 6,750.00",
  },
  {
    id: 217,
    name: "Organizational Transformation Foundation (OTF)",
    location: "الرياض / السعودية",
    date: "2025-01-05 - 2025-01-09",
    cost: "SAR 6,850.00",
  },
];

export default function Table() {
  return (
    <>
      <div className="container mx-auto p-6 my-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-start mb-6">
          {" "}
          الدورات التدريبية
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="py-3 px-4 border text-center">#</th>
                <th className="py-3 px-4 border text-right">اسم البرنامج</th>
                <th className="py-3 px-4 border text-center">الموقع</th>
                <th className="py-3 px-4 border text-center">التاريخ</th>
                <th className="py-3 px-4 border text-center">التكلفة</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr
                  key={course.id}
                  className={`text-gray-700 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200 transition-all`}
                >
                  <td className="py-3 px-4 border text-center font-semibold">
                    {course.id}
                  </td>
                  <td className="py-3 px-4 border">{course.name}</td>
                  <td className="py-3 px-4 border text-center">
                    {course.location}
                  </td>
                  <td className="py-3 px-4 border text-center">
                    {course.date}
                  </td>
                  <td className="py-3 px-4 border text-center font-bold text-secondary">
                    {course.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <section className="py-10 statistics">
        <div className="flex justify-center">
          <p className="w-fit text-xl flex justify-center relative after:w-20 after:rounded-md after:h-[3px] after:block after:absolute after:-bottom-2 after:bg-[#d5ad85] text-white">
            أرقام ايفوري
          </p>
        </div>
        <section className="flex justify-center my-8  ">
          <div className="flex items-start justify-between w-3/4 max-[1000px]:w-full max-[1000px]:gap-6 scrolling">
            <div className="text-white flex flex-col items-center gap-2 justify-center">
              <div className="h-14 w-14 rounded-full bg-white"></div>
              <p className="text-[#d5ad85]">2400</p>
              <p className="text-nowrap">برنامج تدريبي</p>
            </div>
            <div className="text-white flex flex-col items-center gap-2 justify-center">
              <div className="h-14 w-14 rounded-full bg-white"></div>
              <p className="text-[#d5ad85]">6000</p>
              <p className="text-nowrap">ساعه تدريبية</p>
            </div>
            <div className="text-white flex flex-col items-center gap-2 justify-center">
              <div className="h-14 w-14 rounded-full bg-white"></div>
              <p className="text-[#d5ad85]">3000</p>
              <p className="text-nowrap">مدرب محترف</p>
            </div>
            <div className="text-white flex flex-col items-center gap-2 justify-center">
              <div className="h-14 w-14 rounded-full bg-white"></div>
              <p className="text-[#d5ad85]">30000</p>
              <p className="text-nowrap">مشارك</p>
            </div>
          </div>
        </section>
      </section>

      <section className="flex justify-center my-20 p-5 max-[1000px]:p-2 max-[1000px]:flex-col flex-wrap items-center gap-3">
        <div className="text-nowrap">
          <div className="flex justify-center">
            <p
              className="w-fit text-xl flex justify-center relative after:w-20 after:rounded-md after:h-[3px] after:block after:absolute after:-bottom-2 after:bg-[#d5ad85] text-black"
              
            >
              شركاء ايفوري
            </p>
          </div>
        </div>
        <section className=" flex justify-center gap-1 my-7 w-full">
          <div className="placeholder w-[15rem] h-24 rounded-md"></div>
          <div className="placeholder w-[15rem] h-24 rounded-md"></div>
          <div className="placeholder w-[15rem] h-24 rounded-md"></div>
          <div className="placeholder w-[15rem] h-24 rounded-md"></div>
          <div className="placeholder w-[15rem] h-24 rounded-md"></div>
          <div className="placeholder w-[15rem] h-24 rounded-md"></div>
        </section>
      </section>
    </>
  );
}
