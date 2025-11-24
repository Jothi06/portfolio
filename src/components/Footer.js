export default function Footer() {
  return (
    <footer className="relative py-4 text-center text-white overflow-hidden premium-animated-bg">

      {/* Soft Glow Orbs (matches hero + resume) */}
      <div className="absolute inset-0">
        <div className="w-[250px] h-[250px] bg-cyan-400/20 rounded-full blur-[120px] absolute -top-10 left-5 animate-float"></div>
        <div className="w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[120px] absolute bottom-0 right-5 animate-float"></div>
      </div>

      {/* Text */}
      <p className="relative z-10">
        © 2025 Jothilakshmi S
      </p>

    </footer>
  );
}
