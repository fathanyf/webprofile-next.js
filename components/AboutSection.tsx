import React from 'react'

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "JQuery" },
  { skill: "Tailwind CSS" },
  { skill: "PHP" },
  { skill: "MySQL" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-48">
          <h1 className="text-center font-bold text-4xl">Tentang Saya</h1>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          {/* 31.25 */}
          <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
            <div className="md:w-1/2">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Pengalaman Kerja</h1>
              <p>
                <span className="font-bold">{"PT Data Services Indonesia"}</span>  Februari 2023 - Sekarang <br />Staf IT, Web Developer.
                <br />
                <span className="font-bold">{"PT Sarinah"}</span>  September 2022 - Januari 2023 <br /> Divisi Digital Bisnis, Sarinah Club Officer and Acquisition Intern.
                <br />
                <span className="font-bold">{"Ndaleme Mbahkung Homestay Malang"}</span> Januari - April 2022 <br />Staf Homestay.
              </p>
              <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Pendidikan</h1>
            <p>
            <span className="font-bold">UPN "Veteran" Jakarta</span>   2017 - 2021 <br />S1 Hubungan Internasional.
            <br />
            <span className="font-bold">SMA Negeri 79 Jakarta</span>  2014 - 2017 <br /> SMA jurusan IPS.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Pengalaman Khursus</h1>
            <p>
            <span className="font-bold">Binar Academy</span>   Desember 2021 - Juni 2022 <br />Full Stack Web-Developer Bootcamp.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Sertifikat Keahlian</h1>
            <p>
            <span className="font-bold">Full Stack Web-Developer Bootcamp</span> - Binar Academy <br /> Juni 2022 <br />Berlaku Seumur Hidup.
            <br />
            <span className="font-bold">TOEFL ITP</span> ETS TOEFL<br /> Juli 2022 <br />Berlaku Juli 2022 - Juli 2024.
            <br />
            <span className="font-bold">HSK Mandarin Test Level 1</span> Center for Language Education and Cooperation<br /> September 2022 <br />Berlaku September 2022 - September 2024.
            </p>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection
