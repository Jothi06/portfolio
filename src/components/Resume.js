import { useState } from 'react';
import ResumeImg from "../assets/resume.jpg";
import ResumePDF from "../assets/Jothi_Lakshmi.pdf"; // Your PDF file

// Icons
const DownloadIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const EyeIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

export default function Resume() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <section
      id="resume"
      className="
        relative px-5 py-20 md:py-32 
        bg-gradient-to-br from-[#0B1220] via-[#0A4C64] to-[#2EE4D9]/40
        backdrop-blur-xl overflow-hidden
      "
    >
      {/* Glow Effects (same as About section) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-teal-400/20 rounded-full blur-3xl bottom-10 right-20 animate-pulse"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Resume Image */}
        <div className="md:w-1/2 flex justify-center animate-fadeIn">
          <img
            src={ResumeImg}
            className="
              w-[300px] md:w-[350px] rounded-2xl drop-shadow-2xl
              border border-white/20 bg-white/10 backdrop-blur-2xl
              transition-all duration-500 hover:border-cyan-300/40 hover:shadow-cyan-300/30
            "
            alt="resume"
          />
        </div>

        {/* Resume Text Box */}
        <div
          className="
            md:w-1/2 text-white flex flex-col items-start md:items-start
            p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20
            shadow-xl animate-fadeIn
            transition-all duration-500 hover:border-cyan-300/40 hover:shadow-cyan-300/30
          "
        >
          <h1 className="text-4xl font-bold mb-5 border-b-4 border-teal-300 w-fit drop-shadow-md">
            Resume
          </h1>

          <p className="text-lg mb-5 opacity-90">
            Check out my resume to learn more about my experience and skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <a
              href={ResumePDF}
              download="Jothi_Lakshmi_S_Resume.pdf"
              className="
                flex items-center justify-center gap-2
                bg-primary px-6 py-3 rounded-xl font-bold text-white
                hover:bg-purple-600 hover:scale-105 transition-all shadow-lg shadow-purple-500/40
              "
            >
              <DownloadIcon className="h-5 w-5" />
              Download
            </a>

            <button
              onClick={() => setShowPDF(!showPDF)}
              className="
                flex items-center justify-center gap-2
                bg-teal-500 px-6 py-3 rounded-xl font-bold text-white
                hover:bg-teal-600 hover:scale-105 transition-all shadow-lg shadow-teal-500/40
              "
            >
              <EyeIcon className="h-5 w-5" />
              {showPDF ? 'Hide' : 'View'}
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer Section */}
      {showPDF && (
        <div className="relative z-10 mt-16 max-w-5xl mx-auto animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={ResumePDF}
                className="w-full h-[600px] md:h-[800px]"
                title="Resume PDF"
              />
            </div>
            <p className="text-white/70 text-sm text-center mt-4">
              If the PDF doesn't display properly, please use the download button above
            </p>
          </div>
        </div>
      )}
    </section>
  );
}