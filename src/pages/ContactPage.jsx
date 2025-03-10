import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const validateForm = () => {
    const newErrors = {};
    const { fullName, subject, email, body } = formData;

    newErrors.fullName =
      fullName.length < 3 ? "Full name must be at least 3 characters." : "";
    newErrors.subject =
      subject.length < 3 ? "Subject must be at least 3 characters." : "";
    newErrors.email = !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    )
      ? "Please enter a valid email address."
      : "";
    newErrors.body =
      body.length < 3 ? "Body must be at least 3 characters." : "";

    setErrors(newErrors);
    setIsValid(!Object.values(newErrors).some((err) => err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isValid) {
      console.log(formData);
      setFormData({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["Name", "Subject", "Email", "Body"].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block text-lg font-medium mb-2">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            {field === "Body" ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            )}
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
          disabled={!isValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
