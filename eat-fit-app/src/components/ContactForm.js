import {React , useState} from "react";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with form submission
      console.log("Form submitted:", formData);
      // You can add your logic for form submission here
    } else {
      // Form is not valid, display error messages
      console.log("Form validation failed");
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gradient-to-br from-customPink to-blue">
      <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 w-full max-w-4xl p-8 sm:p-12 overflow-hidden rounded-xl shadow-lg text-white font-brandon from-blue to-customPink">
        <div className="flex flex-col space-y-4 justify-between font-brandon">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
            <p className="pt-2 text-white text-sm">
              Curefoods India Pvt. Ltd.
              <br />
              No. 72/4, Roopena Agrahara, Hosur Road, Madiwala Post, Bangalore,
              Karnataka, 560068 IN
            </p>
          </div>
          <div>
            <p className="pt-2 text-white text-sm">
              For general enquiries, please reach out to us at{" "}
              <a className="underline" href="mailto:hello@eatfit.in">
                hello@eatfit.in
              </a>
            </p>
            <br />
            <p className="pt-2 text-white text-sm">
              If you wish to join a company as unique as you, please reach out
              to us at{" "}
              <a className="underline" href="mailto:careers@eatfit.in">
                careers@eatfit.in
              </a>
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center ">
              <ion-icon name="call" className="text-xl"></ion-icon>
              <span>9879844941849</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="mail" className="text-xl"></ion-icon>
              <span>
                <a
                  className="underline"
                  href="mailto:hello@eatfit.in"
                >
                  hello@eatfit.in
                </a>
              </span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="location" className="text-xl"></ion-icon>
              <span>Bangalore, Karnataka</span>
            </div>
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="text-white">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="text-white">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" className="text-white">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#" className="text-white">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>

       <div className="">
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-sm text-blue">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue mt-2 ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-blue">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue mt-2 ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-blue">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className={`ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue mt-2 ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm">{formErrors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-block self-end bg-blue text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
