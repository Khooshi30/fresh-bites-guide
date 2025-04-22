
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Carrot } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-nutri-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-nutri-green-dark mb-6">
              Our Mission at NutriNest
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're on a mission to make nutritious eating accessible, delicious, and sustainable for everyone.
            </p>
            <div className="flex justify-center">
              <img
                src="/logo.png"
                alt="NutriNest Logo"
                className="h-32 md:h-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-nutri-green-dark mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                NutriNest began with a simple belief: eating healthy should be enjoyable, not a chore. Founded in 2023 by a team of nutritionists, chefs, and food enthusiasts, we set out to create a hub for people seeking delicious recipes that don't compromise on nutrition.
              </p>
              <p className="text-gray-700 mb-4">
                We noticed that many people struggle to maintain healthy eating habits because they associate nutritious food with bland, uninspiring meals. Our mission became clear: to prove that healthy eating can be a delightful culinary experience.
              </p>
              <p className="text-gray-700">
                Today, NutriNest serves thousands of health-conscious individuals looking to transform their relationship with food. We believe that when armed with the right recipes, knowledge, and inspiration, anyone can create wholesome, mouth-watering meals that nourish both body and soul.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="https://images.unsplash.com/photo-1615397587950-3cbb55f95b39?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3"
                alt="Team cooking together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-nutri-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nutri-green-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              At NutriNest, everything we do is guided by these fundamental principles that shape our content and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nutri-green-dark mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The passionate individuals behind NutriNest who make it all possible with their expertise and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-nutri-green-light/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3"
                alt="Fresh vegetables and fruits"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-nutri-green-dark mb-6">
                Our Approach to Nutrition
              </h2>
              <p className="text-gray-700 mb-4">
                We believe in a balanced, sustainable approach to healthy eating. Instead of following strict diets or cutting out entire food groups, we advocate for mindful eating that focuses on whole, nutrient-dense foods.
              </p>
              <p className="text-gray-700 mb-4">
                Every recipe and nutrition tip on NutriNest is carefully crafted with these principles in mind:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-nutri-green mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Emphasizing whole, minimally processed ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nutri-green mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Balancing macronutrients for sustained energy and satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nutri-green mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Incorporating a rainbow of fruits and vegetables for diverse nutrients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nutri-green mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Creating recipes that are accessible for all skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nutri-green mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Prioritizing flavor alongside nutrition for meals you'll actually enjoy</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We're committed to helping you develop a positive relationship with food while nourishing your body with the nutrients it needs to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nutri-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Connect with like-minded individuals passionate about healthy eating and wellness. Subscribe to our newsletter for weekly recipes, nutrition tips, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md text-gray-800 flex-grow"
            />
            <Button className="bg-white text-nutri-green hover:bg-nutri-cream">
              Subscribe
            </Button>
          </div>
          <div className="mt-8">
            <p className="font-medium mb-4">Or follow us on social media:</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-nutri-cream transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-nutri-cream transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-nutri-cream transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-nutri-cream transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nutri-green-dark mb-4">
              What Our Community Says
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Read about how NutriNest has helped people transform their approach to healthy eating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-nutri-cream py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-nutri-green-dark mb-6">
            Ready to Start Your Healthy Eating Journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-nutri-green hover:bg-nutri-green-dark text-white" asChild>
              <Link to="/recipes">Explore Our Recipes</Link>
            </Button>
            <Button variant="outline" className="border-nutri-green text-nutri-green hover:bg-nutri-green/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutri-green-light/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-nutri-green-dark mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const values = [
  {
    icon: <Leaf className="h-8 w-8 text-nutri-green" />,
    title: "Whole Food Focus",
    description:
      "We prioritize recipes centered around whole, minimally processed ingredients that nourish your body.",
  },
  {
    icon: <Heart className="h-8 w-8 text-nutri-green" />,
    title: "Balance & Sustainability",
    description:
      "We believe in sustainable eating habits that you can maintain for life, not quick fixes or extreme diets.",
  },
  {
    icon: <Carrot className="h-8 w-8 text-nutri-green" />,
    title: "Flavor First",
    description:
      "Nutritious food should never be boring. We're committed to creating recipes that delight your taste buds.",
  },
];

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <div className="text-center">
      <div className="mb-4 relative w-48 h-48 mx-auto">
        <img
          src={image}
          alt={name}
          className="rounded-full object-cover w-full h-full border-4 border-nutri-green-light/20"
        />
      </div>
      <h3 className="text-lg font-semibold text-nutri-green-dark">{name}</h3>
      <p className="text-nutri-green mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

const team = [
  {
    name: "Emma Johnson",
    role: "Founder & Nutritionist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
    bio: "With over 10 years experience as a registered nutritionist, Emma founded NutriNest to make nutritional expertise accessible to everyone.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head Chef",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
    bio: "Michael brings his culinary expertise from top restaurants to create delicious, approachable recipes that don't compromise on flavor.",
  },
  {
    name: "Sarah Chen",
    role: "Nutrition Researcher",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=2961&ixlib=rb-4.0.3",
    bio: "With a PhD in Nutritional Science, Sarah ensures all our content is backed by the latest research and scientific evidence.",
  },
  {
    name: "James Wilson",
    role: "Content Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
    bio: "James oversees our content strategy, ensuring our articles and recipes are engaging, accessible, and practical for everyday use.",
  },
];

type TestimonialProps = {
  quote: string;
  name: string;
  location: string;
  image: string;
};

const TestimonialCard = ({ quote, name, location, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
      <div className="mb-4">
        <svg
          className="h-8 w-8 text-nutri-green-light/70"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-medium text-nutri-green-dark">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "NutriNest transformed how I approach cooking. The recipes are so flavorful that I don't even miss my old eating habits, and I've lost 15 pounds in the process!",
    name: "Rebecca Taylor",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
  },
  {
    quote:
      "As a busy parent, I needed simple, nutritious recipes my whole family would enjoy. NutriNest has been a lifesaver! My kids now eagerly ask for their veggie-packed meals.",
    name: "David Martinez",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=2662&ixlib=rb-4.0.3",
  },
  {
    quote:
      "The nutrition articles have educated me so much about how food affects my health. I've incorporated small changes from NutriNest and my energy levels have never been better!",
    name: "Aisha Johnson",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=2889&ixlib=rb-4.0.3",
  },
];

export default AboutPage;
