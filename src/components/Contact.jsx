import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("your_service_id", "your_template_id", form.current, {
        publicKey: "your_public_key",
      })
      .then(
        () => alert("Message sent successfully!"),
        (error) => alert("Failed to send message: " + error.text)
      );
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input type="text" name="user_name" placeholder="Your Name" required className="p-3 rounded-md border dark:bg-gray-800"/>
        <input type="email" name="user_email" placeholder="Your Email" required className="p-3 rounded-md border dark:bg-gray-800"/>
        <textarea name="message" rows="5" placeholder="Your Message" required className="p-3 rounded-md border dark:bg-gray-800"></textarea>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
