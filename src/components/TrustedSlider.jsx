import logo1 from "../assets/images/clints-01.png";
import logo2 from "../assets/images/clints-02.png";
import logo3 from "../assets/images/clints-03.png";
import logo4 from "../assets/images/clints-04.png";
import logo5 from "../assets/images/clints-05.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

function TrustedSlider() {
  return (
    <div className="bg-white py-10 overflow-hidden">
      <h3
        data-aos="flip-left"
        className="text-center text-lg font-medium mb-8 overflow-hidden font-Satoshi">
        Enterprises that trust us
      </h3>
      <div className="relative w-full">
        <div className="flex w-max animate-marquee space-x-12">
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`brand-logo-${index}`}
              className="h-6  w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default TrustedSlider;
