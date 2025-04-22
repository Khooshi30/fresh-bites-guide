
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd handle the form submission to a backend here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    // Reset submitted status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      <section className="bg-nutri-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-nutri-green-dark mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-700">
              Have questions, feedback, or just want to say hello? We'd love to hear from you!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Contact Info Section */}
              <div className="md:col-span-2 bg-nutri-green p-8 text-white">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="mb-8">
                  We're here to help! Reach out to us through any of these channels, and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="opacity-90">hello@nutrinest.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="opacity-90">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Our Location</h3>
                      <p className="opacity-90">
                        123 Nutrition Avenue <br />
                        Healthy City, CA 90210
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white/20 hover:bg-white/30 transition w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 hover:bg-white/30 transition w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 hover:bg-white/30 transition w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div className="md:col-span-3 p-8">
                <h2 className="text-2xl font-semibold text-nutri-green-dark mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                    <h3 className="font-medium text-green-800 mb-1">Message Sent!</h3>
                    <p>
                      Thank you for reaching out! We've received your message and will get back to
                      you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="johndoe@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry or feedback..."
                        className="w-full"
                        rows={6}
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        className="h-4 w-4 text-nutri-green focus:ring-nutri-green border-gray-300 rounded"
                      />
                      <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                        Subscribe to our weekly recipe newsletter
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="bg-nutri-green hover:bg-nutri-green-dark text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-nutri-green-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700">
                Find answers to some of the most common questions we receive.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">
                Still have questions? Don't hesitate to reach out!
              </p>
              <Button
                className="bg-nutri-green hover:bg-nutri-green-dark text-white"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-nutri-green-dark">{question}</h3>
        <svg
          className={`w-5 h-5 text-nutri-green transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`px-5 py-3 bg-gray-50 border-t border-gray-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "Do I need to create an account to access the recipes?",
    answer:
      "No, all our recipes are freely accessible without creating an account. However, creating an account allows you to save your favorite recipes, leave comments, and get personalized recommendations.",
  },
  {
    question: "Are your recipes suitable for specific dietary restrictions?",
    answer:
      "Yes, we offer a wide range of recipes that cater to various dietary needs including vegetarian, vegan, gluten-free, dairy-free, and more. You can use our recipe filters to find options that match your specific requirements.",
  },
  {
    question: "How often do you add new recipes?",
    answer:
      "We add new recipes on a weekly basis, typically every Monday and Thursday. Subscribe to our newsletter to be notified when new recipes are published!",
  },
  {
    question: "Can I submit my own recipe to be featured on NutriNest?",
    answer:
      "Absolutely! We love featuring community recipes. Please use our contact form and select 'Recipe Submission' as the subject. Include your recipe details, a photo if available, and any personal story behind the recipe.",
  },
  {
    question: "Are nutritional values provided for all recipes?",
    answer:
      "Yes, all our recipes include a comprehensive nutrition breakdown, including calories, macronutrients (protein, carbs, fats), and key vitamins and minerals. These values are approximate and calculated using standard ingredients.",
  },
];

export default ContactPage;
