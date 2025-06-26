const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen m-4 p-4">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 m-2 w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 m-2 w-full"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 m-2 w-full h-32"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 m-2">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
