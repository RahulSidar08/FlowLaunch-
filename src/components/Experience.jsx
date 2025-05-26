import { experiences } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">
        Experience
      </h2>

      <ul className="space-y-6">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="border p-4 sm:p-6 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="mt-3 text-sm sm:text-base text-gray-700">
              {exp.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
