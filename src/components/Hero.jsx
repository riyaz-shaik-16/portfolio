import Terminal from "./Terminal";

const Hero = () => {

  return (
    <section className="mt-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-background text-foreground gap-10">
      {/* Left Side */}
      <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold">
          Hey, I’m <span className="text-violet-600">Riyaz</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          I don’t build for show. I build to breathe. Sometimes what I make
          breaks. But I fix it. That’s how I learn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-violet-600 text-white px-6 py-2 rounded-xl shadow hover:bg-violet-700 transition text-sm"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="border border-violet-600 text-violet-600 px-6 py-2 rounded-xl hover:bg-violet-50 transition text-sm"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Right Side */}
      <Terminal/>
    </section>
  );
};

export default Hero;
