import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace these with your NEW credentials
    const serviceId = "service_k146ikl"; // GET FROM STEP 1
    const templateId = "template_47kths3"; // GET FROM STEP 2
    const publicKey = "x1PLSC3O5KysxnUCO";

    console.log("📧 Sending email with:", { serviceId, templateId, publicKey });

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        (result) => {
          console.log("✅ SUCCESS!", result);
          alert("🎉 Message sent successfully!");
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log("❌ FAILED!", error);
          console.log("Error details:", error);
          
          // More specific error messages
          if (error.text.includes("template ID")) {
            alert(`❌ Template not found. Please check:\n1. Template ID is correct\n2. Template is saved\n3. Template is linked to the service`);
          } else if (error.text.includes("service ID")) {
            alert(`❌ Service not found. Please check:\n1. Service ID is correct\n2. Email service is connected\n3. Service is active`);
          } else {
            alert(`❌ Failed to send: ${error.text}`);
          }
          
          setIsLoading(false);
        }
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
        <input 
          type="text" 
          name="user_name" 
          placeholder="Your Name" 
          required 
          className="p-3 rounded-md border dark:bg-gray-800"
        />
        <input 
          type="email" 
          name="user_email" 
          placeholder="Your Email" 
          required 
          className="p-3 rounded-md border dark:bg-gray-800"
        />
        <textarea 
          name="message" 
          rows="5" 
          placeholder="Your Message" 
          required 
          className="p-3 rounded-md border dark:bg-gray-800"
        ></textarea>
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "⏳ Sending..." : "📤 Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;