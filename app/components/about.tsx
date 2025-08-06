import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ABOUT <span className="text-gray-400">AF-MOK</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              At AF-MOK PERFORMANCE, we're passionate about helping you get the
              most out of your vehicle. Our team of experts specializes in
              providing high-quality performance products, software solutions,
              and services for cars and LCV.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We offer a comprehensive range of solutions tailored to your
              vehicle's specific needs, including economy software, performance
              software, DPF solutions, ADBLUE solutions, and EGR solutions.
              Whether you're looking to boost your vehicle's power, improve its
              fuel efficiency, or reduce emissions, we've got you covered.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With our user-friendly interfaces, exceptional customer service,
              and customizable options, you can trust us to deliver the results
              you need. Contact us today to learn more!
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-gray-400">Vehicles Tuned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Contact Us
            </Button>
          </div>
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src="/1.png" // Make sure the image is in your public folder
              alt="AF-MOK Performance Workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
