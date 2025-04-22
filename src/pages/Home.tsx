
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Carrot } from "lucide-react";
import Layout from "@/components/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-nutri-cream to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nutri-green-dark mb-4">
                Eat Fresh.
                <br />
                <span className="text-nutri-green">Live Better.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                Discover delicious, nutritious recipes that make healthy eating simple, satisfying, and sustainable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-nutri-green hover:bg-nutri-green-dark text-white px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/recipes">
                    Explore Recipes <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-nutri-green text-nutri-green hover:bg-nutri-green-light/10 px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/nutrition-tips">Nutrition Tips</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3"
                alt="Colorful healthy food bowl"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-nutri-green-dark mb-4">
              Featured Recipes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular, seasonal, and nutritionist-approved recipes to inspire your next meal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-nutri-green hover:bg-nutri-green-dark text-white px-8"
              asChild
            >
              <Link to="/recipes">
                View All Recipes <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose NutriNest */}
      <section className="py-16 bg-nutri-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-nutri-green-dark mb-4">
              Why Choose NutriNest?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to making healthy eating accessible, delicious, and sustainable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-nutri-green" />}
              title="Fresh Ingredients"
              description="Our recipes prioritize whole, seasonal ingredients for maximum nutrition and flavor."
            />
            <FeatureCard
              icon={<Heart className="h-10 w-10 text-nutri-green" />}
              title="Health-Focused"
              description="Each recipe is designed with your wellbeing in mind, balancing taste and nutrition."
            />
            <FeatureCard
              icon={<Carrot className="h-10 w-10 text-nutri-green" />}
              title="Simple Preparation"
              description="Even complex dishes are broken down into simple, manageable steps anyone can follow."
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-nutri-green bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-nutri-green-dark mb-4">
              Get Weekly Recipe Inspiration
            </h2>
            <p className="text-gray-600 mb-6">
              Join our community and receive fresh, seasonal recipes and nutrition tips every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nutri-green"
              />
              <Button className="bg-nutri-green hover:bg-nutri-green-dark text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

type Recipe = {
  id: number;
  title: string;
  image: string;
  time: string;
  difficulty: string;
  category: string;
  slug: string;
};

const featuredRecipes: Recipe[] = [
  {
    id: 1,
    title: "Rainbow Veggie Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    time: "25 mins",
    difficulty: "Easy",
    category: "Lunch",
    slug: "rainbow-veggie-quinoa-bowl",
  },
  {
    id: 2,
    title: "Avocado Chickpea Toast",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    time: "15 mins",
    difficulty: "Easy",
    category: "Breakfast",
    slug: "avocado-chickpea-toast",
  },
  {
    id: 3,
    title: "Berry Chia Overnight Oats",
    image: "https://images.unsplash.com/photo-1557387966-a3952b98e89c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    time: "5 mins + overnight",
    difficulty: "Easy",
    category: "Breakfast",
    slug: "berry-chia-overnight-oats",
  },
];

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="block group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-medium text-nutri-green-dark z-10">
          {recipe.category}
        </div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-nutri-green-dark mb-2 group-hover:text-nutri-green transition-colors">
          {recipe.title}
        </h3>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{recipe.time}</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutri-green-light/20">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-nutri-green-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;
