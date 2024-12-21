import video1 from "../../assets/homepage_video.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
      </div>


      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
         <strong> <span className="bg-gradient-to-r from-blue-500 to-red-400 text-transparent bg-clip-text">
            Kardia
          </span></strong>
          <span className="bg-white text-transparent bg-clip-text">
            {" "}
            Your Personalized Heart Assistant
          </span>
        </h1>
        <p className="mt-10 text-lg text-neutral-200 max-w-4xl mx-auto">
          <strong>
            This AI solution helps monitor heart and ECG health in real time
            using data from existing devices. It detects problems early,
            reduces the need for regular hospital visits, and improves health
            outcomes by giving timely alerts.
          </strong>
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
