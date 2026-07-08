export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-28 px-8 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[8px] text-gray-500 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-black mb-6">
          LET'S TALK.
        </h2>

        <p className="text-gray-400 mb-10">
          Questions, collaborations or orders?
          Reach out anytime.
        </p>

        <a
          href="mailto:streetissue@yahoo.com"
          className="inline-block border border-white px-8 py-4 uppercase tracking-[0.25em] hover:bg-white hover:text-black transition duration-300"
        >
          Send an Email
        </a>

      </div>
    </section>
  );
}