const Contact = () => {
  return (
    <section id="ContactSection" className="contact bg-[#112e42] py-[10rem] px-[9%] min-h-screen flex flex-col items-center">
      <h2 className="heading text-white text-3xl mb-12">
        Contact <span className="text-[#00abf0]">Me</span>
      </h2>
      {/* Your contact form or content goes here */}
      <form className="contact-form flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-white text-[#112e42] border border-[#00abf0]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-white text-[#112e42] border border-[#00abf0]"
        />
        <textarea
          placeholder="Your Message"
          className="p-4 rounded-lg bg-white text-[#112e42] border border-[#00abf0]"
        />
        <button className="p-4 rounded-lg bg-[#00abf0] text-white font-semibold hover:bg-[#008bb2]">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
