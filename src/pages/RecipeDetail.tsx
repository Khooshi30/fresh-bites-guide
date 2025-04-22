
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight, Info } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the recipe with the matching slug
  const recipe = recipeData.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold text-nutri-green-dark mb-4">
            Recipe Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn't find the recipe you're looking for.
          </p>
          <Button asChild>
            <Link to="/recipes">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              to="/recipes"
              className="text-nutri-green hover:text-nutri-green-dark flex items-center font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Recipes
            </Link>
          </div>

          {/* Recipe Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-nutri-green-dark mb-4">
              {recipe.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-nutri-green" />
                <span>
                  <strong>Prep Time:</strong> {recipe.prepTime}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-nutri-green" />
                <span>
                  <strong>Cook Time:</strong> {recipe.cookTime}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-nutri-green" />
                <span>
                  <strong>Total Time:</strong> {recipe.totalTime}
                </span>
              </div>
              <div className="flex items-center">
                <Info className="mr-2 h-4 w-4 text-nutri-green" />
                <span>
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>

          {/* Recipe Image and Quick Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="bg-nutri-cream rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-nutri-green-dark mb-4">
                Nutrition Facts
              </h3>
              <div className="space-y-4">
                {recipe.nutrition.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{item.name}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-6 bg-nutri-green/20" />

              <h3 className="text-xl font-semibold text-nutri-green-dark mb-4">
                Recipe Info
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Servings</span>
                  <span>{recipe.servings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Category</span>
                  <span>{recipe.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-nutri-green-light/30 text-nutri-green-dark px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients and Instructions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-nutri-green-dark mb-6 flex items-center">
                <span className="bg-nutri-green-light/20 text-nutri-green w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  1
                </span>
                Ingredients
              </h2>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-nutri-green mt-2 mr-3"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-nutri-green-dark mb-6 flex items-center">
                <span className="bg-nutri-green-light/20 text-nutri-green w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  2
                </span>
                Instructions
              </h2>
              <ol className="space-y-8">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="bg-nutri-green-light/20 text-nutri-green-dark min-w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                      {index + 1}
                    </span>
                    <div>
                      <p>{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Health Benefits Section */}
          <div className="bg-nutri-cream rounded-lg p-6 md:p-8 shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-nutri-green-dark mb-4">
              Health Benefits
            </h2>
            <p className="text-gray-600 mb-6">{recipe.healthBenefits}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recipe.keyNutrients.map((nutrient, index) => (
                <div key={index} className="bg-white rounded-md p-4 shadow-sm">
                  <h4 className="font-semibold text-nutri-green mb-2">
                    {nutrient.name}
                  </h4>
                  <p className="text-sm text-gray-600">{nutrient.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recipe Tips */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-nutri-green-dark mb-6">
              Chef's Tips
            </h2>
            <ul className="space-y-4">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-nutri-yellow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-3 mt-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* More Recipes Section */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-nutri-green-dark">
                More Recipes You'll Love
              </h2>
              <Link
                to="/recipes"
                className="text-nutri-green hover:text-nutri-green-dark font-medium flex items-center"
              >
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRecipes.map((relatedRecipe) => (
                <Link
                  key={relatedRecipe.id}
                  to={`/recipes/${relatedRecipe.slug}`}
                  className="group block"
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-3">
                    <img
                      src={relatedRecipe.image}
                      alt={relatedRecipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-medium text-nutri-green-dark group-hover:text-nutri-green transition-colors">
                    {relatedRecipe.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {relatedRecipe.category}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Sample recipe data
const recipeData = [
  {
    slug: "rainbow-veggie-quinoa-bowl",
    title: "Rainbow Veggie Quinoa Bowl",
    description:
      "A nutrient-packed bowl featuring a colorful array of vegetables and protein-rich quinoa for a balanced and satisfying meal.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    prepTime: "15 mins",
    cookTime: "10 mins",
    totalTime: "25 mins",
    difficulty: "Easy",
    servings: "2",
    category: "Lunch",
    tags: ["Vegan", "Gluten-Free", "High Protein", "Plant-Based"],
    ingredients: [
      "1 cup uncooked quinoa, rinsed",
      "2 cups vegetable broth",
      "1 cup diced red bell pepper",
      "1 cup diced yellow bell pepper",
      "1 cup diced cucumber",
      "1 cup cherry tomatoes, halved",
      "1 ripe avocado, sliced",
      "1/2 red onion, finely diced",
      "1/4 cup fresh cilantro, chopped",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "1 teaspoon ground cumin",
      "1/2 teaspoon paprika",
      "Salt and pepper to taste",
      "Optional: 1/4 cup roasted pumpkin seeds",
    ],
    instructions: [
      "Rinse the quinoa thoroughly under cold water using a fine mesh strainer.",
      "In a medium pot, combine quinoa and vegetable broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes or until liquid is absorbed.",
      "Remove from heat and let stand for 5 minutes, then fluff with a fork and allow to cool slightly.",
      "While the quinoa is cooking, prepare all your vegetables by washing and chopping them into bite-sized pieces.",
      "In a small bowl, whisk together olive oil, lemon juice, cumin, paprika, salt, and pepper to make the dressing.",
      "In a large bowl, combine the cooked quinoa with all the chopped vegetables.",
      "Pour the dressing over the quinoa mixture and toss gently to combine.",
      "Top with sliced avocado, fresh cilantro, and roasted pumpkin seeds if using.",
      "Serve immediately, or refrigerate for up to 2 days in an airtight container.",
    ],
    healthBenefits:
      "This colorful bowl is packed with plant-based protein from the quinoa, healthy fats from the avocado, and a variety of vitamins and minerals from the rainbow of vegetables.",
    keyNutrients: [
      {
        name: "Quinoa",
        benefit:
          "Complete plant protein containing all nine essential amino acids and rich in fiber, magnesium, and iron.",
      },
      {
        name: "Bell Peppers",
        benefit:
          "Excellent source of Vitamin C, A, and antioxidants that help fight inflammation.",
      },
      {
        name: "Avocado",
        benefit:
          "Provides heart-healthy monounsaturated fats, potassium, and fiber for sustained energy.",
      },
    ],
    tips: [
      "For meal prep, keep the dressing separate and add just before serving to maintain freshness.",
      "Customize with your favorite seasonal vegetables to maximize nutrients and flavor.",
      "For added protein, top with grilled tofu, chickpeas, or a soft-boiled egg.",
      "Toast the quinoa before cooking for a nuttier flavor profile.",
    ],
    nutrition: [
      { name: "Calories", value: "420 kcal" },
      { name: "Protein", value: "12g" },
      { name: "Carbohydrates", value: "52g" },
      { name: "Fat", value: "18g" },
      { name: "Fiber", value: "9g" },
    ],
  },
  {
    slug: "avocado-chickpea-toast",
    title: "Avocado Chickpea Toast",
    description:
      "An elevated avocado toast with protein-rich chickpeas, fresh herbs, and zesty lemon for a satisfying breakfast or quick lunch.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    prepTime: "10 mins",
    cookTime: "5 mins",
    totalTime: "15 mins",
    difficulty: "Easy",
    servings: "2",
    category: "Breakfast",
    tags: ["Vegetarian", "High Protein", "Plant-Based"],
    ingredients: [
      "4 slices whole grain bread",
      "2 ripe avocados",
      "1 cup chickpeas, drained and rinsed",
      "2 tablespoons olive oil, divided",
      "1 tablespoon lemon juice",
      "1/4 teaspoon red pepper flakes",
      "1/2 teaspoon ground cumin",
      "2 tablespoons fresh herbs (parsley, cilantro, or basil), chopped",
      "Salt and pepper to taste",
      "Optional: microgreens and sesame seeds for garnish",
    ],
    instructions: [
      "Toast the bread slices until golden brown and crispy.",
      "In a small bowl, mash the avocados with a fork. Add 1 tablespoon olive oil, lemon juice, salt, and pepper. Mix well.",
      "In another bowl, lightly mash the chickpeas, leaving some whole for texture. Add the remaining olive oil, red pepper flakes, cumin, and mix well.",
      "Spread the mashed avocado evenly over each toast.",
      "Top with the seasoned chickpea mixture.",
      "Sprinkle with fresh herbs, additional red pepper flakes if desired, and a drizzle of olive oil.",
      "Garnish with microgreens and sesame seeds if using.",
      "Serve immediately while the toast is still warm.",
    ],
    healthBenefits:
      "This nutrient-dense toast combines healthy fats from avocado with plant-based protein from chickpeas, making it a balanced meal that will keep you satisfied throughout the morning.",
    keyNutrients: [
      {
        name: "Avocado",
        benefit:
          "Rich in heart-healthy monounsaturated fats, potassium, and vitamins E, K, and B.",
      },
      {
        name: "Chickpeas",
        benefit:
          "Excellent source of plant protein, fiber, and minerals like iron and magnesium.",
      },
      {
        name: "Whole Grain Bread",
        benefit:
          "Provides complex carbohydrates, fiber, and B vitamins for sustained energy.",
      },
    ],
    tips: [
      "For a gluten-free option, use certified gluten-free bread or serve on sweet potato slices.",
      "Add a squeeze of fresh lime for extra zest and vitamin C.",
      "Try different spice combinations like za'atar or everything bagel seasoning.",
      "Mash the avocado just before serving to prevent browning.",
    ],
    nutrition: [
      { name: "Calories", value: "380 kcal" },
      { name: "Protein", value: "11g" },
      { name: "Carbohydrates", value: "42g" },
      { name: "Fat", value: "22g" },
      { name: "Fiber", value: "12g" },
    ],
  },
  {
    slug: "berry-chia-overnight-oats",
    title: "Berry Chia Overnight Oats",
    description:
      "Prepare these antioxidant-rich oats the night before for a quick, nutritious breakfast packed with fiber and omega-3 fatty acids.",
    image:
      "https://images.unsplash.com/photo-1557387966-a3952b98e89c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    prepTime: "5 mins",
    cookTime: "0 mins (overnight soak)",
    totalTime: "5 mins + overnight",
    difficulty: "Easy",
    servings: "2",
    category: "Breakfast",
    tags: ["Vegetarian", "Make-Ahead", "High Fiber"],
    ingredients: [
      "1 cup rolled oats",
      "2 tablespoons chia seeds",
      "1 1/2 cups unsweetened almond milk (or milk of choice)",
      "2 tablespoons maple syrup or honey",
      "1 teaspoon vanilla extract",
      "1/4 teaspoon cinnamon",
      "Pinch of salt",
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "Optional toppings: sliced banana, coconut flakes, chopped nuts",
    ],
    instructions: [
      "In a medium bowl, combine the rolled oats and chia seeds.",
      "Add the almond milk, maple syrup, vanilla extract, cinnamon, and salt. Stir well to combine.",
      "Fold in half of the berries, slightly mashing them to release their juices.",
      "Divide the mixture evenly into two jars or containers with lids.",
      "Seal and refrigerate overnight, or for at least 6 hours.",
      "When ready to serve, stir the oats and top with the remaining fresh berries and any optional toppings.",
      "Enjoy cold straight from the refrigerator, or heat for 30-60 seconds if you prefer warm oats.",
    ],
    healthBenefits:
      "This fiber-rich breakfast helps stabilize blood sugar levels, while chia seeds provide omega-3 fatty acids for heart and brain health. The berries add antioxidants that fight inflammation and support immune function.",
    keyNutrients: [
      {
        name: "Chia Seeds",
        benefit:
          "Rich in omega-3 fatty acids, fiber, and calcium for bone health and improved digestion.",
      },
      {
        name: "Berries",
        benefit:
          "Packed with antioxidants, vitamin C, and fiber to boost immunity and fight oxidative stress.",
      },
      {
        name: "Oats",
        benefit:
          "Contain beta-glucan fiber that helps lower cholesterol and provides sustained energy.",
      },
    ],
    tips: [
      "For a protein boost, add a tablespoon of your favorite nut butter or protein powder.",
      "Adjust the milk quantity for your preferred thickness—less for thicker oats, more for a looser consistency.",
      "Frozen berries work just as well as fresh and will naturally thaw overnight.",
      "Prepare multiple servings at once for a quick grab-and-go breakfast throughout the week.",
    ],
    nutrition: [
      { name: "Calories", value: "290 kcal" },
      { name: "Protein", value: "8g" },
      { name: "Carbohydrates", value: "48g" },
      { name: "Fat", value: "9g" },
      { name: "Fiber", value: "11g" },
    ],
  },
];

// Related recipes sample data
const relatedRecipes = [
  {
    id: 4,
    title: "Mediterranean Quinoa Salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    category: "Lunch",
    slug: "mediterranean-quinoa-salad",
  },
  {
    id: 5,
    title: "Veggie Buddha Bowl",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3",
    category: "Dinner",
    slug: "veggie-buddha-bowl",
  },
  {
    id: 6,
    title: "Peanut Butter Banana Smoothie",
    image:
      "https://images.unsplash.com/photo-1638970180529-a5f0326fe940?auto=format&fit=crop&q=80&w=2615&ixlib=rb-4.0.3",
    category: "Breakfast",
    slug: "peanut-butter-banana-smoothie",
  },
];

export default RecipeDetail;
