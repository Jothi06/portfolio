import AboutImg from '../assets/about.png';

export default function About() {
  const config = {
    line1:
      'Hi, I’m Jothi Lakshmi, a passionate Frontend Developer and 3D Artist who loves creating clean, responsive, and visually engaging digital experiences. I enjoy transforming ideas into interactive interfaces that are not only functional but also aesthetically refined.',
    line2:
      'I specialize in HTML, CSS, JavaScript, Tailwind CSS, and React.js, building modern web applications with a focus on usability, performance, and design clarity.',
    line3:
      'With a strong background in 3D product modeling using Blender, Substance Painter, and Photoshop, I bring a unique visual perspective to my development work. My design sensibility helps me craft interfaces that balance creativity with a smooth user experience.',
  };

  return (
    <section
      id="about"
      className="
        flex flex-col md:flex-row px-5 py-10
        bg-gradient-to-br from-[#0B1220] via-[#0A4C64] to-[#2EE4D9]/40
        backdrop-blur-xl
        relative overflow-hidden
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-teal-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="py-5 md:w-1/2 animate-fadeIn">
        <img src={AboutImg} className="drop-shadow-2xl rounded-2xl" />
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div
          className="
            flex flex-col justify-center text-white 
            p-6 rounded-2xl bg-white/10 backdrop-blur-lg
            border border-white/20 shadow-xl 
            transition-all duration-500 hover:border-cyan-300/40 hover:shadow-cyan-300/30
          "
        >
          <h1
            className="
              text-4xl font-bold mb-5 w-[170px]
              border-b-4 border-teal-300 drop-shadow-md
            "
          >
            About Me
          </h1>

          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}
