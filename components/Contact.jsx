import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      );

      console.log("Email sent:", response);

      // You can display a success message to the user here if you'd like
    } catch (error) {
      console.error("Error sending email:", error);
      // You can display an error message to the user here if you'd like
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  return (
    <div className="flex flex-col items-center justify-center md:mt-0 rounded-xl border-2 border-[#FFFFFF] w-3/4 md:w-3/6 lg:w-2/6">
      <div className="text text-lg w-full pl-8 pt-4 uppercase">
        Get in Touch
      </div>
      <div className="text-5xl w-full pl-8 pt-2">Contact.</div>
      <div></div>
      <form
        id="contact-form"
        method="POST"
        className="w-full px-8 py-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col py-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button
          type="submit"
          className="flex border-2 justify-center bg-[#FFFFFF] text-[#1B1B1B] text-center rounded w-24 mt-2 py-1 hover:bg-[#1B1B1B] hover:text-[#FFFFFF] hover:border-color-[#FFFFFF] hover:border-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
