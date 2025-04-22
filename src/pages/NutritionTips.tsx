
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search, Heart, LeafyGreen, Apple } from "lucide-react";

const NutritionTips = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? article.category === activeCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="bg-nutri-cream py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-nutri-green-dark mb-3">
              Nutrition Tips & Articles
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover expert advice on healthy eating habits, ingredient benefits, and practical tips
              for incorporating nutritious foods into your daily routine.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for nutrition tips..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <Button
                variant={activeCategory === null ? "default" : "outline"}
                className={activeCategory === null 
                  ? "bg-nutri-green hover:bg-nutri-green-dark text-white" 
                  : "border-nutri-green text-nutri-green hover:bg-nutri-green/10"}
                onClick={() => setActiveCategory(null)}
              >
                All Articles
              </Button>
              <CategoryButton
                icon={<LeafyGreen size={16} />}
                category="Superfoods"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <CategoryButton
                icon={<Heart size={16} />}
                category="Healthy Habits"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <CategoryButton
                icon={<Apple size={16} />}
                category="Nutrition Science"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </div>

          {/* Featured Article */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                    alt="Building a balanced plate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-nutri-green text-sm font-semibold mb-2">
                    FEATURED ARTICLE
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-nutri-green-dark mb-4">
                    How to Build a Balanced Plate
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Learn the essential components of a well-balanced meal and how to create
                    nutritionally complete plates that satisfy both your taste buds and nutritional
                    needs. This comprehensive guide breaks down the perfect portions and food
                    combinations for optimal health.
                  </p>
                  <Button
                    className="bg-nutri-green hover:bg-nutri-green-dark text-white self-start"
                    onClick={() => window.scrollTo({
                      top: document.getElementById("article-1")?.offsetTop ?? 0 - 100,
                      behavior: "smooth",
                    })}
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Full Article Example */}
          <div id="article-1" className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-nutri-green-dark mb-4">
              How to Build a Balanced Plate
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="bg-nutri-green-light/20 text-nutri-green px-3 py-1 rounded-full font-medium">
                Healthy Habits
              </span>
              <span className="mx-3">•</span>
              <span>April 15, 2023</span>
              <span className="mx-3">•</span>
              <span>By Nutritionist Emma Johnson</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
              alt="Building a balanced plate"
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Creating balanced meals is one of the most effective ways to maintain good nutrition
                and support overall health. A properly balanced plate provides all the nutrients your
                body needs while helping you feel satisfied and energized. Here's how to build a
                nutritionally complete plate at every meal.
              </p>

              <h3 className="text-xl font-semibold text-nutri-green-dark mt-8 mb-4">
                The 1/2, 1/4, 1/4 Rule
              </h3>
              <p className="mb-4">
                A simple way to approach meal planning is to visualize your plate divided into
                sections:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>1/2 of your plate:</strong> Non-starchy vegetables (leafy greens,
                  broccoli, peppers, tomatoes, etc.)
                </li>
                <li>
                  <strong>1/4 of your plate:</strong> Protein sources (chicken, fish, beans, tofu,
                  etc.)
                </li>
                <li>
                  <strong>1/4 of your plate:</strong> Carbohydrates, preferably whole grains (brown
                  rice, quinoa, sweet potatoes, etc.)
                </li>
                <li>
                  <strong>Add a small amount:</strong> Healthy fats (olive oil, avocado, nuts, etc.)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-nutri-green-dark mt-8 mb-4">
                Why This Works
              </h3>
              <p className="mb-4">
                This approach ensures you get a good balance of macronutrients (proteins,
                carbohydrates, and fats) as well as plenty of micronutrients (vitamins and minerals)
                from your vegetables. The high proportion of vegetables provides fiber, which helps
                you feel full, while the protein and fat contribute to satiety and blood sugar
                stability.
              </p>

              <h3 className="text-xl font-semibold text-nutri-green-dark mt-8 mb-4">
                Color Matters
              </h3>
              <p className="mb-4">
                Aim to include a variety of colors on your plate. Different colored fruits and
                vegetables contain different phytonutrients with unique health benefits:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Green:</strong> (spinach, kale, broccoli) rich in folate, lutein, and
                  zeaxanthin
                </li>
                <li>
                  <strong>Red:</strong> (tomatoes, red peppers) contain lycopene and anthocyanins
                </li>
                <li>
                  <strong>Orange/Yellow:</strong> (carrots, sweet potatoes) high in beta-carotene
                </li>
                <li>
                  <strong>Purple/Blue:</strong> (eggplant, blueberries) packed with resveratrol and
                  anthocyanins
                </li>
                <li>
                  <strong>White:</strong> (garlic, onions) offer allicin and quercetin
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-nutri-green-dark mt-8 mb-4">
                Practical Tips for Implementation
              </h3>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li>
                  <strong>Prep ahead:</strong> Wash and chop vegetables at the beginning of the week
                  to make meal assembly faster.
                </li>
                <li>
                  <strong>Batch cook proteins:</strong> Prepare larger portions of chicken, beans, or
                  tofu that can be used in multiple meals.
                </li>
                <li>
                  <strong>Use the plate method when eating out:</strong> Request extra vegetables and
                  be mindful of portion sizes for other components.
                </li>
                <li>
                  <strong>Don't forget about healthy fats:</strong> A drizzle of olive oil, some
                  sliced avocado, or a sprinkle of nuts can make a meal more satisfying and
                  nutritionally complete.
                </li>
                <li>
                  <strong>Stay flexible:</strong> The exact proportions may vary based on your
                  individual needs, activity level, and health goals.
                </li>
              </ol>

              <div className="bg-nutri-cream p-6 rounded-lg my-8">
                <h4 className="text-lg font-semibold text-nutri-green-dark mb-3">
                  Sample Balanced Meal Ideas
                </h4>
                <ul className="space-y-3">
                  <li>
                    <strong>Breakfast:</strong> Veggie omelet with whole grain toast and avocado
                  </li>
                  <li>
                    <strong>Lunch:</strong> Quinoa bowl with roasted vegetables, chickpeas, and
                    tahini dressing
                  </li>
                  <li>
                    <strong>Dinner:</strong> Grilled fish with steamed broccoli and brown rice
                  </li>
                  <li>
                    <strong>Snack:</strong> Apple slices with almond butter or Greek yogurt with
                    berries
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-nutri-green-dark mt-8 mb-4">
                Listen to Your Body
              </h3>
              <p className="mb-4">
                While these guidelines provide a helpful framework, it's equally important to tune
                into your body's hunger and fullness cues. Balanced eating also means having a
                healthy relationship with food and allowing yourself flexibility and enjoyment in
                your choices.
              </p>
              <p>
                Remember that small, consistent changes to your eating patterns are more sustainable
                than dramatic overhauls. Start by implementing the balanced plate method for one meal
                a day, then gradually extend to other meals as it becomes more familiar.
              </p>
            </div>

            <Separator className="my-8" />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
                  alt="Emma Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-nutri-green-dark">Emma Johnson</p>
                  <p className="text-sm text-gray-500">Registered Nutritionist</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="border-nutri-green text-nutri-green">
                  Share Article
                </Button>
                <Button className="bg-nutri-green hover:bg-nutri-green-dark text-white">
                  Related Articles
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-nutri-green-light/20 rounded-lg p-6 md:p-8 shadow-md">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-nutri-green-dark mb-4">
                Get Fresh Nutrition Tips In Your Inbox
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our weekly newsletter for the latest nutrition advice, healthy recipes,
                and wellness tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-white"
                />
                <Button className="bg-nutri-green hover:bg-nutri-green-dark text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

type CategoryButtonProps = {
  icon: React.ReactNode;
  category: string;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
};

const CategoryButton = ({
  icon,
  category,
  activeCategory,
  setActiveCategory,
}: CategoryButtonProps) => {
  const isActive = activeCategory === category;

  return (
    <Button
      variant={isActive ? "default" : "outline"}
      className={isActive 
        ? "bg-nutri-green hover:bg-nutri-green-dark text-white" 
        : "border-nutri-green text-nutri-green hover:bg-nutri-green/10"}
      onClick={() => setActiveCategory(isActive ? null : category)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {category}
    </Button>
  );
};

type Article = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  slug: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "How to Build a Balanced Plate",
    excerpt:
      "Learn the essential components of a well-balanced meal and how to create nutritionally complete plates.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    category: "Healthy Habits",
    date: "April 15, 2023",
    author: "Emma Johnson",
    slug: "how-to-build-a-balanced-plate",
  },
  {
    id: 2,
    title: "Top 5 Leafy Greens You Should Eat More Often",
    excerpt:
      "Discover the nutritional powerhouses that can transform your health with their rich vitamin and mineral content.",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    category: "Superfoods",
    date: "March 22, 2023",
    author: "Alex Rivera",
    slug: "top-5-leafy-greens",
  },
  {
    id: 3,
    title: "Understanding Macronutrients: Protein, Carbs, and Fats",
    excerpt:
      "A comprehensive guide to macronutrients, their functions, and how to balance them in your diet.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3",
    category: "Nutrition Science",
    date: "May 8, 2023",
    author: "Dr. Sarah Chen",
    slug: "understanding-macronutrients",
  },
  {
    id: 4,
    title: "The Science of Gut Health: How Food Affects Your Microbiome",
    excerpt:
      "Explore the fascinating relationship between your diet and the trillions of bacteria living in your digestive system.",
    image:
      "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
    category: "Nutrition Science",
    date: "June 12, 2023",
    author: "Dr. Michael Brown",
    slug: "science-of-gut-health",
  },
  {
    id: 5,
    title: "Meal Prep 101: Save Time and Eat Healthier",
    excerpt:
      "Simple strategies for effective meal planning and preparation that will transform your weekly routine.",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3",
    category: "Healthy Habits",
    date: "February 28, 2023",
    author: "Jamie Williams",
    slug: "meal-prep-101",
  },
  {
    id: 6,
    title: "Berries: Nature's Antioxidant Powerhouses",
    excerpt:
      "Discover why these small fruits pack a mighty nutritional punch and how to incorporate more into your diet.",
    image:
      "https://images.unsplash.com/photo-1596591868231-05e840434b35?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    category: "Superfoods",
    date: "April 3, 2023",
    author: "Emma Johnson",
    slug: "berries-antioxidant-powerhouses",
  },
];

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="bg-nutri-green-light/20 text-nutri-green px-3 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
          <span className="text-gray-500 text-xs ml-3">{article.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-nutri-green-dark mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {article.author}</span>
          <Button
            variant="outline"
            className="text-nutri-green border-nutri-green hover:bg-nutri-green/10"
            onClick={() => {
              // Normally would navigate to article page
              if (article.id === 1) {
                window.scrollTo({
                  top: document.getElementById("article-1")?.offsetTop ?? 0 - 100,
                  behavior: "smooth",
                });
              }
            }}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NutritionTips;
