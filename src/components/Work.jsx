import background1 from "../assets/Dashboard101.png";
import Lineimg from "../assets/Line.png";
import play from "../assets/playerbtn.png";

export default function HowWeWork() {
  const features = [
    {
      title: "Smart EPP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec tempor sem massa sed condiment...",
    },
    {
      title: "HRMS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec tempor sem massa sed condiment...",
    },
    {
      title: "ITSM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit donec tempor sem massa sed condiment...",
    },
  ];

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-4">
          How we <span className="text-blue-600 italic">work?</span>
        </h2>
        <p
          data-aos="fade-down"
          className="text-gray-500 leading-relaxed  text-xs max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor
          sem massa, sed condimentum elit dignissim ac. Nulla aliquam lorem eu
          justo ultrices semper quis sit amet ex. Aliquam cursus volutpat
          fermentum.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-16 grid grid-cols-1 overflow-hidden md:grid-cols-3 gap-8 px-6 max-w-4xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="text-left space-y-4">
            {/* Header icon and title */}
            <div data-aos="fade-right" className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
              <h4 className="font-semibold">{item.title}</h4>
              <img src={Lineimg} alt="" className="h-1 ml-2" />
            </div>

            <p data-aos="fade-left" className="text-gray-500 text-xs">
              {item.description}
            </p>

            {/* Image box with play button */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200">
              <img
                src={background1}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              {/* Play button */}
              <div
                data-aos="fade-down"
                className="absolute inset-0 flex flex-col items-center justify-center">
                <img src={play} alt="hey" className="w-auto h-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
