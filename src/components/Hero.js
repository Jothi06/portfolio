import HeroImg from '../assets/jothi.jpeg';
import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

  const config = {
    Subtitle: 'Frontend Developer • 3D Artist',
    social: {
      twitter: '',
      linkedln: 'linkedin.com/in/jothi-lakshmi-b58443219',
      whatsapp: ''
    }
  };

  return (
     <section className="flex flex-col md:flex-row px-5 py-32 aurora-bg items-center">




      {/* LEFT CONTENT */}
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-6xl font-hero-font leading-snug">
          Hi,<br /> I'm <span className="text-[#2EE4D9]">Jothi Lakshmi</span>
        </h1>

        <p className="text-2xl text-gray-300 mt-3">{config.Subtitle}</p>

        <div className="flex py-10 text-gray-300">
          <a href={config.social.twitter} className="pr-5 hover:text-white"><AiOutlineTwitter size={40} /></a>
          <a href={config.social.linkedln} className="pr-5 hover:text-white"><AiOutlineLinkedin size={40} /></a>
          <a href={config.social.whatsapp} className="hover:text-white"><AiOutlineWhatsApp size={40} /></a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/3 pr-5 flex justify-center">
        <img
          className="w-48 h-48 rounded-full object-cover shadow-[0_0_40px_rgba(46,228,217,0.6)] animate-float"
          src={HeroImg}
          alt="profile"
        />
      </div>

    </section>
  );
}
