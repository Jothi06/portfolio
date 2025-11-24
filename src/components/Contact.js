export default function Contact() {
  const config = {
    email: "s.jothinaveen@gmail.com",
    phone: "6379659115",
  };

  return (
    <section
      id="contact"
      className="
        relative flex flex-col items-center px-5 py-32 text-white
        bg-gradient-to-br from-[#0B1220] via-[#0A4C64] to-[#2EE4D9]/40
        backdrop-blur-xl overflow-hidden
      "
    >
      {/* Glow circles (same as About/Resume) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-teal-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Contact Card */}
      <div
        className="
          relative z-10 w-full max-w-lg flex flex-col items-center
          p-8 rounded-2xl bg-white/10 backdrop-blur-lg
          border border-white/20 shadow-xl animate-fadeIn
          transition-all duration-500 hover:border-cyan-300/40 hover:shadow-cyan-300/30
        "
      >
        <h1 className="text-4xl font-bold mb-5 border-b-4 border-teal-300 w-[150px] pb-1 text-center drop-shadow-md">
          Contact
        </h1>

        <p className="pb-5 text-gray-300 text-center">
          If you want to discuss more in detail, feel free to contact me anytime.
        </p>

        {/* Email */}
        <p className="py-2 text-lg">
          <span className="font-bold text-[#2EE4D9]">Email:</span>
          <span className="ml-2">{config.email}</span>
        </p>

        {/* Phone */}
        <p className="py-2 text-lg">
          <span className="font-bold text-[#2EE4D9]">Phone:</span>
          <span className="ml-2">{config.phone}</span>
        </p>
      </div>
    </section>
  );
}
