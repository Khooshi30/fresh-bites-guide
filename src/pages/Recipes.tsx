
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Leaf, LeafyGreen, Apple, Carrot, Vegan } from "lucide-react";

const RecipesPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);

  // Filter recipes based on search query and active category
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? recipe.categories.includes(activeCategory) : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="bg-nutri-cream py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-nutri-green-dark mb-3">
              Healthy Recipes
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our collection of nutritious and delicious recipes that make eating healthy easy and enjoyable.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search recipes..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Categories Filter */}
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <Button
                variant={activeCategory === null ? "default" : "outline"}
                className={activeCategory === null 
                  ? "bg-nutri-green hover:bg-nutri-green-dark text-white" 
                  : "border-nutri-green text-nutri-green hover:bg-nutri-green/10"}
                onClick={() => setActiveCategory(null)}
              >
                All Recipes
              </Button>
              <CategoryButton
                icon={<Apple size={16} />}
                category="breakfast"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                label="Breakfast"
              />
              <CategoryButton
                icon={<Carrot size={16} />}
                category="lunch"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                label="Lunch"
              />
              <CategoryButton
                icon={<LeafyGreen size={16} />}
                category="dinner"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                label="Dinner"
              />
              <CategoryButton
                icon={<Vegan size={16} />}
                category="vegan"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                label="Vegan"
              />
              <CategoryButton
                icon={<Leaf size={16} />}
                category="vegetarian"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                label="Vegetarian"
              />
              <CategoryButton
                icon={<Filter size={16} />}
                category="gluten-free"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                label="Gluten-Free"
              />
              <CategoryButton
                icon={<Filter size={16} />}
                category="low-carb"
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                label="Low-Carb"
              />
            </div>
          </div>

          {/* Recipes Grid */}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-nutri-green-dark mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
              <Button
                variant="outline"
                className="border-nutri-green text-nutri-green hover:bg-nutri-green/10"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
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
  label: string;
};

const CategoryButton = ({
  icon,
  category,
  activeCategory,
  setActiveCategory,
  label,
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
      {label}
    </Button>
  );
};

type Recipe = {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: string;
  categories: string[];
  slug: string;
};

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Rainbow Veggie Quinoa Bowl",
    description: "Colorful vegetables and protein-rich quinoa create a balanced and satisfying meal.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    time: "25 mins",
    difficulty: "Easy",
    categories: ["lunch", "dinner", "vegan", "vegetarian", "gluten-free"],
    slug: "rainbow-veggie-quinoa-bowl",
  },
  {
    id: 2,
    title: "Avocado Chickpea Toast",
    description: "A protein-packed breakfast with creamy avocado and seasoned chickpeas.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    time: "15 mins",
    difficulty: "Easy",
    categories: ["breakfast", "vegetarian", "vegan"],
    slug: "avocado-chickpea-toast",
  },
  {
    id: 3,
    title: "Berry Chia Overnight Oats",
    description: "Prepare these antioxidant-rich oats the night before for a quick, nutritious breakfast.",
    image: "https://images.unsplash.com/photo-1557387966-a3952b98e89c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    time: "5 mins + overnight",
    difficulty: "Easy",
    categories: ["breakfast", "vegetarian", "vegan"],
    slug: "berry-chia-overnight-oats",
  },
  {
    id: 4,
    title: "Lemon Herb Grilled Chicken Salad",
    description: "Tender grilled chicken over fresh greens with a bright lemon vinaigrette.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    time: "30 mins",
    difficulty: "Medium",
    categories: ["lunch", "dinner", "gluten-free", "low-carb"],
    slug: "lemon-herb-grilled-chicken-salad",
  },
  {
    id: 5,
    title: "Mediterranean Salmon Bowl",
    description: "Omega-3 rich salmon with cucumber, tomatoes, olives, and tzatziki sauce.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    time: "25 mins",
    difficulty: "Medium",
    categories: ["lunch", "dinner", "gluten-free", "low-carb"],
    slug: "mediterranean-salmon-bowl",
  },
  {
    id: 6,
    title: "Spicy Black Bean Sweet Potato Tacos",
    description: "Flavorful plant-based tacos with roasted sweet potatoes and protein-rich black beans.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    time: "35 mins",
    difficulty: "Medium",
    categories: ["lunch", "dinner", "vegetarian", "vegan"],
    slug: "spicy-black-bean-sweet-potato-tacos",
  },
  {
    id: 7,
    title: "Green Detox Smoothie Bowl",
    description: "A refreshing blend of spinach, banana, avocado, and superfood toppings.",
    image: "https://images.unsplash.com/photo-1638970180529-a5f0326fe940?auto=format&fit=crop&q=80&w=2615&ixlib=rb-4.0.3",
    time: "10 mins",
    difficulty: "Easy",
    categories: ["breakfast", "vegetarian", "vegan", "gluten-free"],
    slug: "green-detox-smoothie-bowl",
  },
  {
    id: 8,
    title: "Stuffed Bell Peppers with Quinoa",
    description: "Bell peppers stuffed with quinoa, black beans, corn, and Mexican spices.",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e9?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    time: "45 mins",
    difficulty: "Medium",
    categories: ["dinner", "vegetarian", "vegan", "gluten-free"],
    slug: "stuffed-bell-peppers-with-quinoa",
  },
  {
    id: 9,
    title: "Zucchini Noodles with Pesto",
    description: "Low-carb zucchini noodles with homemade basil pesto and cherry tomatoes.",
    image: "https://images.unsplash.com/photo-1528497920288-b52382495ef6?auto=format&fit=crop&q=80&w=2486&ixlib=rb-4.0.3",
    time: "20 mins",
    difficulty: "Easy",
    categories: ["lunch", "dinner", "vegetarian", "low-carb", "gluten-free"],
    slug: "zucchini-noodles-with-pesto",
  },
];

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="block group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-medium text-nutri-green-dark z-10">
          {recipe.categories[0].charAt(0).toUpperCase() + recipe.categories[0].slice(1)}
        </div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-nutri-green-dark mb-2 group-hover:text-nutri-green transition-colors">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <span className="flex items-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-nutri-green" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {recipe.time}
          </span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipesPage;
