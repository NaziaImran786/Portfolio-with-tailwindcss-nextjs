import React from "react";
import github from "../../../public/github.png";
import linkedin from "../../../public/linkedin.png";
import Link from "next/link";
import Image from "next/image";

const Emailsection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-20 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -let-4 transform -translate-x-1/2"></div>
      <div className="z-100">
        <h5 className="text-4xl font-bold text-white my-4">Let's Contact</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm currently looking for opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/NaziaImran786">
            <Image src={github} alt="github" width={40} height={40} />
          </Link>

          <Link href="https://www.linkedin.com/in/naziaimran786">
            <Image src={linkedin} alt="linkedin" width={40} height={40} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="abc@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Just saying Hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk acout..."
            />
          </div>
          <button className="bg-purple-500 hover:purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Emailsection;
