import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { id: 1, skill: "CSS", des: "One year in CSS" },
    { id: 2, skill: "JavaScript", des: "One year in JavaScript" },
    { id: 3, skill: "React & TailwindCSS", des: "One year in both" },
  ];

  return (
    <section className="mt-[150px]">
      <div className="container">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // 👈 دي بتخليها تشتغل مرة واحدة
        >
          <h1 className="text-3xl font-bold text-white mb-8">Skills</h1>

          <div className="flex justify-around flex-wrap gap-6">
            {skills.map((item, index) => (
              <motion.div
                key={item.id}
                className="w-[250px] bg-slate-100 p-4 text-center rounded shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold mb-2">{item.skill}</h2>
                <p className="mb-3">{item.des}</p>
                <button className="bg-blue-500 text-white px-4 py-1 rounded">
                  Send
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
