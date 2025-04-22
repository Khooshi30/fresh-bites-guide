
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
  {
    slug: "lemon-herb-grilled-chicken-salad",
    title: "Lemon Herb Grilled Chicken Salad",
    description: "Tender grilled chicken over fresh greens with a bright lemon vinaigrette.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    prepTime: "15 mins",
    cookTime: "15 mins",
    totalTime: "30 mins",
    difficulty: "Medium",
    servings: "2",
    category: "Lunch",
    tags: ["High Protein", "Gluten-Free", "Low-Carb"],
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "2 tablespoons olive oil",
      "2 tablespoons fresh lemon juice",
      "2 cloves garlic, minced",
      "1 tablespoon fresh herbs (rosemary, thyme, oregano), chopped",
      "Salt and pepper to taste",
      "4 cups mixed salad greens",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, sliced",
      "1/4 red onion, thinly sliced",
      "1/4 cup feta cheese, crumbled",
      "1/4 cup kalamata olives, pitted",
      "For the dressing: 3 tablespoons olive oil, 2 tablespoons lemon juice, 1 teaspoon honey, 1/2 teaspoon Dijon mustard"
    ],
    instructions: [
      "In a shallow dish, mix 1 tablespoon olive oil, 1 tablespoon lemon juice, garlic, herbs, salt, and pepper.",
      "Add chicken breasts and marinate for at least 15 minutes (or up to 2 hours in the refrigerator).",
      "Preheat grill or grill pan to medium-high heat. Grill chicken for 6-7 minutes per side, or until internal temperature reaches 165°F (74°C).",
      "Let chicken rest for 5 minutes, then slice against the grain.",
      "While the chicken is resting, prepare the dressing by whisking together olive oil, lemon juice, honey, and Dijon mustard.",
      "In a large bowl, combine salad greens, cherry tomatoes, cucumber, red onion, feta cheese, and olives.",
      "Add the sliced grilled chicken on top.",
      "Drizzle with the prepared lemon dressing and serve immediately."
    ],
    healthBenefits: "This salad provides lean protein from the chicken, antioxidants from the vegetables, and healthy fats from the olive oil and feta cheese, making it a perfectly balanced meal.",
    keyNutrients: [
      {
        name: "Chicken",
        benefit: "Excellent source of lean protein for muscle repair and immune function."
      },
      {
        name: "Mixed Greens",
        benefit: "Rich in vitamins A, C, K, and folate to support overall health and reduce inflammation."
      },
      {
        name: "Olive Oil",
        benefit: "Contains heart-healthy monounsaturated fats and antioxidants that may reduce risk of chronic diseases."
      }
    ],
    tips: [
      "For maximum flavor, let the chicken marinate for at least 30 minutes or overnight.",
      "You can substitute the chicken with grilled salmon or tofu for variation.",
      "To save time, use pre-cooked rotisserie chicken and simply toss with some of the herbs and lemon.",
      "For meal prep, keep the dressing separate until ready to serve to maintain freshness."
    ],
    nutrition: [
      { name: "Calories", value: "380 kcal" },
      { name: "Protein", value: "35g" },
      { name: "Carbohydrates", value: "12g" },
      { name: "Fat", value: "22g" },
      { name: "Fiber", value: "4g" }
    ]
  },
  {
    slug: "mediterranean-salmon-bowl",
    title: "Mediterranean Salmon Bowl",
    description: "Omega-3 rich salmon with cucumber, tomatoes, olives, and tzatziki sauce.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    prepTime: "10 mins",
    cookTime: "15 mins",
    totalTime: "25 mins",
    difficulty: "Medium",
    servings: "2",
    category: "Dinner",
    tags: ["High Protein", "Gluten-Free", "Low-Carb", "Omega-3"],
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "1 tablespoon olive oil",
      "1 teaspoon dried oregano",
      "1 teaspoon lemon zest",
      "Salt and pepper to taste",
      "1 cup cooked quinoa",
      "1 cup cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/4 cup red onion, thinly sliced",
      "1/4 cup kalamata olives, pitted and halved",
      "1/4 cup feta cheese, crumbled",
      "2 tablespoons fresh dill, chopped",
      "For the tzatziki: 1/2 cup Greek yogurt, 1/2 cucumber (grated), 1 clove garlic (minced), 1 tablespoon lemon juice, 1 tablespoon fresh dill"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C) or prepare a grill to medium-high heat.",
      "Rub salmon fillets with olive oil, dried oregano, lemon zest, salt, and pepper.",
      "Place salmon on a lined baking sheet and roast for 12-15 minutes, or until it flakes easily with a fork. Alternatively, grill for 4-5 minutes per side.",
      "Meanwhile, prepare the tzatziki by combining Greek yogurt, grated cucumber (squeezed to remove excess water), minced garlic, lemon juice, and fresh dill. Season with salt and stir well.",
      "Divide cooked quinoa between two bowls.",
      "Arrange cucumber, cherry tomatoes, red onion, and olives around the quinoa.",
      "Once cooked, place salmon on top of the quinoa.",
      "Sprinkle with crumbled feta cheese and fresh dill.",
      "Serve with a generous dollop of tzatziki sauce."
    ],
    healthBenefits: "This Mediterranean-inspired bowl is rich in omega-3 fatty acids from the salmon, which support heart and brain health. The combination of lean protein, healthy fats, and fiber makes this a perfectly balanced meal.",
    keyNutrients: [
      {
        name: "Salmon",
        benefit: "Excellent source of omega-3 fatty acids, high-quality protein, and vitamin D for brain health and inflammation reduction."
      },
      {
        name: "Quinoa",
        benefit: "Complete plant protein containing all essential amino acids and rich in magnesium, phosphorus, and fiber."
      },
      {
        name: "Greek Yogurt",
        benefit: "High in protein and probiotics for gut health and improved digestion."
      }
    ],
    tips: [
      "For a crispy skin on the salmon, place it skin-side down in a hot, oiled skillet for 4-5 minutes before finishing in the oven.",
      "Make the tzatziki a day ahead for deeper flavor.",
      "Substitute quinoa with cauliflower rice for an even lower-carb option.",
      "Leftover salmon can be refrigerated and enjoyed cold in a salad the next day."
    ],
    nutrition: [
      { name: "Calories", value: "450 kcal" },
      { name: "Protein", value: "38g" },
      { name: "Carbohydrates", value: "25g" },
      { name: "Fat", value: "22g" },
      { name: "Fiber", value: "5g" }
    ]
  },
  {
    slug: "spicy-black-bean-sweet-potato-tacos",
    title: "Spicy Black Bean Sweet Potato Tacos",
    description: "Flavorful plant-based tacos with roasted sweet potatoes and protein-rich black beans.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    prepTime: "15 mins",
    cookTime: "20 mins",
    totalTime: "35 mins",
    difficulty: "Medium",
    servings: "4",
    category: "Dinner",
    tags: ["Vegetarian", "Vegan", "Plant-Based", "High Fiber"],
    ingredients: [
      "2 medium sweet potatoes, diced into 1/2-inch cubes",
      "2 tablespoons olive oil, divided",
      "1 teaspoon chili powder",
      "1/2 teaspoon ground cumin",
      "1/2 teaspoon smoked paprika",
      "Salt and pepper to taste",
      "1 small red onion, diced",
      "2 cloves garlic, minced",
      "1 can (15 oz) black beans, drained and rinsed",
      "1 small jalapeño, seeded and minced (optional)",
      "1/4 cup cilantro, chopped, plus more for garnish",
      "1 lime, juiced and zested",
      "8 small corn tortillas",
      "1 avocado, sliced",
      "For the lime crema (vegan option): 1/2 cup coconut yogurt, 1 tablespoon lime juice, 1/4 teaspoon lime zest"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C) and line a baking sheet with parchment paper.",
      "Toss diced sweet potatoes with 1 tablespoon olive oil, 1/2 teaspoon chili powder, 1/4 teaspoon cumin, 1/4 teaspoon smoked paprika, salt, and pepper.",
      "Spread sweet potatoes in a single layer on the baking sheet and roast for 20-25 minutes, stirring halfway through, until tender and slightly crispy at the edges.",
      "While the sweet potatoes roast, heat the remaining tablespoon of olive oil in a skillet over medium heat.",
      "Add diced red onion and cook for 3-4 minutes until softened.",
      "Add minced garlic and cook for another 30 seconds until fragrant.",
      "Add black beans, remaining spices, and jalapeño (if using). Cook for 5 minutes, stirring occasionally.",
      "Gently stir in the roasted sweet potatoes, cilantro, lime juice, and zest. Reduce heat to low to keep warm.",
      "For the lime crema, mix coconut yogurt with lime juice and zest. Set aside.",
      "Warm the corn tortillas in a dry skillet or directly over a gas flame for about 30 seconds per side.",
      "Assemble tacos by filling each tortilla with the sweet potato and black bean mixture, topped with sliced avocado, a drizzle of lime crema, and additional cilantro."
    ],
    healthBenefits: "These plant-based tacos are rich in fiber, complex carbohydrates, and plant protein. Sweet potatoes provide beta-carotene for eye health, while black beans offer antioxidants and iron for energy production.",
    keyNutrients: [
      {
        name: "Sweet Potatoes",
        benefit: "Excellent source of vitamin A (as beta-carotene), vitamin C, potassium, and fiber for immune support and gut health."
      },
      {
        name: "Black Beans",
        benefit: "Rich in plant protein, fiber, folate, and antioxidants that help reduce inflammation and support heart health."
      },
      {
        name: "Avocado",
        benefit: "Contains heart-healthy monounsaturated fats, potassium, and vitamins that support skin health and nutrient absorption."
      }
    ],
    tips: [
      "For meal prep, roast the sweet potatoes and prepare the black bean mixture in advance, then reheat when ready to serve.",
      "Try adding a handful of roasted corn kernels for extra sweetness and texture.",
      "For a time-saving hack, use pre-cubed sweet potatoes from the grocery store.",
      "If you prefer a creamier texture, mash about 1/4 of the black beans before mixing with the sweet potatoes."
    ],
    nutrition: [
      { name: "Calories", value: "320 kcal" },
      { name: "Protein", value: "10g" },
      { name: "Carbohydrates", value: "45g" },
      { name: "Fat", value: "12g" },
      { name: "Fiber", value: "12g" }
    ]
  },
  {
    slug: "green-detox-smoothie-bowl",
    title: "Green Detox Smoothie Bowl",
    description: "A refreshing blend of spinach, banana, avocado, and superfood toppings.",
    image: "https://images.unsplash.com/photo-1638970180529-a5f0326fe940?auto=format&fit=crop&q=80&w=2615&ixlib=rb-4.0.3",
    prepTime: "10 mins",
    cookTime: "0 mins",
    totalTime: "10 mins",
    difficulty: "Easy",
    servings: "1",
    category: "Breakfast",
    tags: ["Vegetarian", "Vegan", "Gluten-Free", "Detox"],
    ingredients: [
      "2 cups fresh spinach",
      "1 frozen banana",
      "1/2 ripe avocado",
      "1 tablespoon chia seeds",
      "1 tablespoon hemp seeds",
      "1 cup unsweetened almond milk (or plant milk of choice)",
      "1 tablespoon maple syrup or honey (optional)",
      "1/2 teaspoon vanilla extract",
      "For toppings: sliced kiwi, berries, granola, coconut flakes, additional hemp seeds"
    ],
    instructions: [
      "Place spinach, frozen banana, avocado, chia seeds, hemp seeds, almond milk, sweetener (if using), and vanilla extract in a high-speed blender.",
      "Blend on high until smooth and creamy. The mixture should be thicker than a regular smoothie but still pourable. Add more almond milk if needed, but keep it thick enough to eat with a spoon.",
      "Pour the smoothie into a bowl.",
      "Arrange toppings artfully on the surface: sliced kiwi, berries, granola, coconut flakes, and a sprinkle of hemp seeds.",
      "Serve immediately with a spoon.",
      "For a colder bowl, you can place the prepared bowl in the freezer for 5 minutes before adding toppings."
    ],
    healthBenefits: "This green smoothie bowl is packed with vitamins, minerals, and antioxidants from leafy greens, while providing healthy fats from avocado and seeds to keep you satiated. It's perfect for a nutrient-dense breakfast or post-workout meal.",
    keyNutrients: [
      {
        name: "Spinach",
        benefit: "Rich in vitamins A, C, K, iron, and antioxidants that support immune function and reduce inflammation."
      },
      {
        name: "Avocado",
        benefit: "Provides healthy monounsaturated fats that improve nutrient absorption and support brain health."
      },
      {
        name: "Hemp Seeds",
        benefit: "Complete protein source containing all essential amino acids, plus omega-3 fatty acids for heart and brain health."
      }
    ],
    tips: [
      "Freeze the banana ahead of time for a creamier, colder consistency.",
      "Add a scoop of plant-based protein powder to increase the protein content.",
      "For a stronger detox effect, add a small piece of fresh ginger or 1/4 teaspoon of spirulina.",
      "Pre-portion spinach in freezer bags for quick morning preparation."
    ],
    nutrition: [
      { name: "Calories", value: "380 kcal" },
      { name: "Protein", value: "9g" },
      { name: "Carbohydrates", value: "45g" },
      { name: "Fat", value: "20g" },
      { name: "Fiber", value: "13g" }
    ]
  },
  {
    slug: "stuffed-bell-peppers-with-quinoa",
    title: "Stuffed Bell Peppers with Quinoa",
    description: "Bell peppers stuffed with quinoa, black beans, corn, and Mexican spices.",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e9?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    prepTime: "20 mins",
    cookTime: "25 mins",
    totalTime: "45 mins",
    difficulty: "Medium",
    servings: "4",
    category: "Dinner",
    tags: ["Vegetarian", "Vegan", "Gluten-Free", "High Protein"],
    ingredients: [
      "4 large bell peppers (any color), halved lengthwise, seeds and membranes removed",
      "1 cup uncooked quinoa, rinsed",
      "2 cups vegetable broth",
      "1 tablespoon olive oil",
      "1 medium onion, diced",
      "2 cloves garlic, minced",
      "1 can (15 oz) black beans, drained and rinsed",
      "1 cup corn kernels (fresh, frozen, or canned)",
      "1 can (14.5 oz) diced tomatoes, drained",
      "1 tablespoon chili powder",
      "1 teaspoon ground cumin",
      "1/2 teaspoon smoked paprika",
      "1/4 teaspoon cayenne pepper (optional)",
      "1/2 cup fresh cilantro, chopped, plus more for garnish",
      "Salt and pepper to taste",
      "1/2 cup shredded vegan cheese or regular cheese (optional)"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C) and line a baking dish with parchment paper.",
      "In a medium saucepan, combine quinoa and vegetable broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until liquid is absorbed. Remove from heat and fluff with a fork.",
      "Place halved bell peppers cut-side up in the prepared baking dish. Lightly season with salt and pepper.",
      "In a large skillet, heat olive oil over medium heat. Add onion and cook for 5 minutes until softened.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "Stir in black beans, corn, diced tomatoes, chili powder, cumin, smoked paprika, and cayenne (if using). Cook for 5 minutes, stirring occasionally.",
      "Remove from heat and stir in the cooked quinoa and fresh cilantro. Season with salt and pepper to taste.",
      "Spoon the quinoa mixture evenly into the bell pepper halves, packing it down slightly.",
      "Cover the dish with foil and bake for 20 minutes.",
      "If using cheese, remove foil, sprinkle cheese on top of each pepper, and bake uncovered for an additional 5 minutes until cheese is melted and peppers are tender.",
      "Garnish with additional fresh cilantro before serving."
    ],
    healthBenefits: "These stuffed peppers provide complete plant-based protein from the quinoa and black beans, along with a variety of vitamins from the bell peppers. The dish is high in fiber, which supports digestive health and helps maintain stable blood sugar levels.",
    keyNutrients: [
      {
        name: "Bell Peppers",
        benefit: "Extremely high in vitamin C for immune support, plus vitamin A for eye health and antioxidants to fight inflammation."
      },
      {
        name: "Quinoa",
        benefit: "Complete protein containing all nine essential amino acids, plus magnesium, phosphorus, and folate for energy production."
      },
      {
        name: "Black Beans",
        benefit: "Excellent source of plant protein, fiber, and iron that helps maintain healthy blood cells and energy levels."
      }
    ],
    tips: [
      "For a time-saving option, use pre-cooked quinoa or leftover quinoa from another meal.",
      "Add a diced jalapeño with the onion for extra heat if you enjoy spicy food.",
      "These peppers freeze well—make a double batch and freeze uncooked stuffed peppers for an easy future meal.",
      "Serve with a dollop of Greek yogurt or cashew cream for added creaminess."
    ],
    nutrition: [
      { name: "Calories", value: "320 kcal" },
      { name: "Protein", value: "12g" },
      { name: "Carbohydrates", value: "55g" },
      { name: "Fat", value: "5g" },
      { name: "Fiber", value: "14g" }
    ]
  },
  {
    slug: "zucchini-noodles-with-pesto",
    title: "Zucchini Noodles with Pesto",
    description: "Low-carb zucchini noodles with homemade basil pesto and cherry tomatoes.",
    image: "https://images.unsplash.com/photo-1528497920288-b52382495ef6?auto=format&fit=crop&q=80&w=2486&ixlib=rb-4.0.3",
    prepTime: "15 mins",
    cookTime: "5 mins",
    totalTime: "20 mins",
    difficulty: "Easy",
    servings: "2",
    category: "Lunch",
    tags: ["Vegetarian", "Low-Carb", "Gluten-Free", "Keto-Friendly"],
    ingredients: [
      "3 medium zucchini",
      "1 tablespoon olive oil",
      "2 cloves garlic, minced",
      "1 cup cherry tomatoes, halved",
      "Salt and pepper to taste",
      "1/4 cup pine nuts, toasted (plus more for garnish)",
      "Optional protein: grilled chicken or chickpeas",
      "For the pesto: 2 cups fresh basil leaves, 1/3 cup pine nuts, 2 cloves garlic, 1/2 cup grated Parmesan cheese (or nutritional yeast for vegan option), 1/2 cup olive oil, salt and pepper to taste"
    ],
    instructions: [
      "Make the pesto: In a food processor, combine basil, pine nuts, garlic, and Parmesan cheese. Pulse until coarsely chopped. With the processor running, slowly add olive oil until smooth. Season with salt and pepper to taste.",
      "Using a spiralizer, create zucchini noodles (zoodles). Alternatively, use a vegetable peeler to create ribbons or a julienne peeler for thin strips.",
      "Place zoodles on paper towels and sprinkle with a little salt to draw out excess moisture. Let sit for 10 minutes, then pat dry.",
      "In a large skillet, heat olive oil over medium heat. Add minced garlic and cook for 30 seconds until fragrant.",
      "Add zucchini noodles and sauté for 2-3 minutes until slightly softened but still al dente. Be careful not to overcook or they'll become mushy.",
      "Remove from heat and add halved cherry tomatoes and 1/4 cup of the prepared pesto (store remaining pesto for future use). Toss gently to combine.",
      "Season with salt and pepper to taste.",
      "Serve immediately, garnished with toasted pine nuts and additional fresh basil leaves if desired."
    ],
    healthBenefits: "This low-carb alternative to pasta is perfect for those looking to reduce carbohydrate intake while still enjoying a satisfying meal. Zucchini provides vitamins A and C, while basil contains anti-inflammatory compounds and antioxidants.",
    keyNutrients: [
      {
        name: "Zucchini",
        benefit: "Low in calories and carbs, but rich in vitamins A, C, potassium, and antioxidants that support eye and heart health."
      },
      {
        name: "Basil",
        benefit: "Contains essential oils with anti-inflammatory and antibacterial properties, plus vitamin K for bone health."
      },
      {
        name: "Pine Nuts",
        benefit: "Good source of protein, heart-healthy monounsaturated fats, vitamin E, and minerals like magnesium and zinc."
      }
    ],
    tips: [
      "Don't salt the zucchini if you're in a hurry—just blot them with paper towels to remove moisture.",
      "For meal prep, make the pesto ahead of time, but prepare the zoodles just before serving to prevent them from getting soggy.",
      "Add a protein of your choice—grilled chicken, shrimp, or chickpeas work well.",
      "Save extra pesto in an ice cube tray for individual portions that are easy to thaw."
    ],
    nutrition: [
      { name: "Calories", value: "290 kcal" },
      { name: "Protein", value: "7g" },
      { name: "Carbohydrates", value: "8g" },
      { name: "Fat", value: "25g" },
      { name: "Fiber", value: "3g" }
    ]
  },
  {
    slug: "peanut-butter-banana-smoothie",
    title: "Peanut Butter Banana Smoothie",
    description: "A creamy, protein-rich smoothie perfect for breakfast or post-workout recovery.",
    image: "https://images.unsplash.com/photo-1638970180529-a5f0326fe940?auto=format&fit=crop&q=80&w=2615&ixlib=rb-4.0.3",
    prepTime: "5 mins",
    cookTime: "0 mins",
    totalTime: "5 mins",
    difficulty: "Easy",
    servings: "1",
    category: "Breakfast",
    tags: ["Vegetarian", "High Protein", "Quick", "Kid-Friendly"],
    ingredients: [
      "1 medium ripe banana (frozen for a creamier texture)",
      "2 tablespoons natural peanut butter",
      "1 cup unsweetened almond milk (or milk of choice)",
      "1/2 cup Greek yogurt (plain or vanilla)",
      "1 tablespoon honey or maple syrup (optional, adjust to taste)",
      "1/2 teaspoon vanilla extract",
      "1/2 teaspoon ground cinnamon",
      "1 tablespoon ground flaxseed (optional)",
      "1 cup ice cubes",
      "Optional toppings: sliced banana, drizzle of peanut butter, crushed peanuts"
    ],
    instructions: [
      "Add all ingredients to a high-speed blender: banana, peanut butter, almond milk, Greek yogurt, sweetener (if using), vanilla extract, cinnamon, flaxseed (if using), and ice cubes.",
      "Blend on high speed for 30-60 seconds until smooth and creamy.",
      "If the smoothie is too thick, add more almond milk, one tablespoon at a time, until desired consistency is reached.",
      "Taste and adjust sweetness if needed.",
      "Pour into a glass and top with optional garnishes if desired.",
      "Serve immediately."
    ],
    healthBenefits: "This nutrient-dense smoothie provides a balanced combination of protein, healthy fats, and carbohydrates, making it an excellent breakfast option or post-workout recovery drink. The protein from Greek yogurt and peanut butter helps with muscle repair, while banana provides potassium for electrolyte balance.",
    keyNutrients: [
      {
        name: "Banana",
        benefit: "Rich in potassium for heart health and muscle function, plus vitamin B6 for brain development and function."
      },
      {
        name: "Peanut Butter",
        benefit: "Good source of plant protein, healthy monounsaturated fats, vitamin E, and resveratrol which has antioxidant properties."
      },
      {
        name: "Greek Yogurt",
        benefit: "High in protein and probiotics that support gut health and immune function."
      }
    ],
    tips: [
      "Freeze peeled, sliced bananas in advance for a creamier, colder smoothie without diluting the flavor with ice.",
      "For a dairy-free version, substitute Greek yogurt with coconut yogurt or silken tofu.",
      "Add a handful of spinach for extra nutrients—the flavor will be masked by the peanut butter and banana.",
      "For extra protein, add a scoop of your favorite protein powder."
    ],
    nutrition: [
      { name: "Calories", value: "390 kcal" },
      { name: "Protein", value: "21g" },
      { name: "Carbohydrates", value: "38g" },
      { name: "Fat", value: "18g" },
      { name: "Fiber", value: "5g" }
    ]
  },
  {
    slug: "mediterranean-quinoa-salad",
    title: "Mediterranean Quinoa Salad",
    description: "A protein-rich salad with Mediterranean flavors perfect for meal prep or summer picnics.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    prepTime: "15 mins",
    cookTime: "15 mins",
    totalTime: "30 mins",
    difficulty: "Easy",
    servings: "4",
    category: "Lunch",
    tags: ["Vegetarian", "Gluten-Free", "High Protein", "Make-Ahead"],
    ingredients: [
      "1 cup uncooked quinoa, rinsed",
      "2 cups vegetable broth or water",
      "1 English cucumber, diced",
      "1 pint cherry tomatoes, halved",
      "1 red bell pepper, diced",
      "1/2 red onion, finely diced",
      "1/2 cup kalamata olives, pitted and halved",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup fresh mint, chopped",
      "For the dressing: 1/4 cup extra virgin olive oil, 2 tablespoons lemon juice, 1 tablespoon red wine vinegar, 1 clove garlic (minced), 1 teaspoon dried oregano, salt and pepper to taste"
    ],
    instructions: [
      "In a medium saucepan, combine quinoa and vegetable broth or water. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until liquid is absorbed.",
      "Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and spread on a baking sheet to cool for about 10 minutes.",
      "While the quinoa is cooling, prepare the dressing by whisking together olive oil, lemon juice, red wine vinegar, minced garlic, dried oregano, salt, and pepper in a small bowl.",
      "In a large bowl, combine cooled quinoa, cucumber, cherry tomatoes, red bell pepper, red onion, kalamata olives, feta cheese, parsley, and mint.",
      "Pour the dressing over the salad and toss gently to combine.",
      "Taste and adjust seasoning if needed.",
      "For best flavor, refrigerate for at least 30 minutes before serving to allow the flavors to meld.",
      "Serve chilled or at room temperature."
    ],
    healthBenefits: "This Mediterranean-inspired salad is packed with plant-based protein, fiber, and a variety of vitamins and minerals. The combination of vegetables provides antioxidants, while olive oil offers heart-healthy fats that are a cornerstone of the Mediterranean diet.",
    keyNutrients: [
      {
        name: "Quinoa",
        benefit: "Complete protein containing all nine essential amino acids, plus iron, magnesium, and B vitamins for energy metabolism."
      },
      {
        name: "Bell Peppers",
        benefit: "One of the richest sources of vitamin C, which supports immune function and collagen production for healthy skin."
      },
      {
        name: "Olive Oil",
        benefit: "Contains heart-healthy monounsaturated fats and polyphenols that have anti-inflammatory and antioxidant effects."
      }
    ],
    tips: [
      "Toast the quinoa in a dry pan before cooking to enhance its nutty flavor.",
      "This salad keeps well in the refrigerator for up to 3 days, making it perfect for meal prep.",
      "For a vegan version, omit the feta cheese or substitute with a plant-based alternative.",
      "Add a can of chickpeas for extra protein and fiber."
    ],
    nutrition: [
      { name: "Calories", value: "340 kcal" },
      { name: "Protein", value: "10g" },
      { name: "Carbohydrates", value: "38g" },
      { name: "Fat", value: "18g" },
      { name: "Fiber", value: "6g" }
    ]
  },
  {
    slug: "veggie-buddha-bowl",
    title: "Veggie Buddha Bowl",
    description: "A nourishing bowl packed with roasted vegetables, grains, and a creamy tahini dressing.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3",
    prepTime: "15 mins",
    cookTime: "25 mins",
    totalTime: "40 mins",
    difficulty: "Medium",
    servings: "2",
    category: "Dinner",
    tags: ["Vegetarian", "Vegan", "Gluten-Free", "Plant-Based"],
    ingredients: [
      "1 cup cooked brown rice or quinoa",
      "1 medium sweet potato, diced into 1/2-inch cubes",
      "1 cup Brussels sprouts, halved",
      "1 cup cauliflower florets",
      "1 red bell pepper, sliced",
      "1 small red onion, sliced into wedges",
      "2 tablespoons olive oil",
      "1 teaspoon ground cumin",
      "1/2 teaspoon smoked paprika",
      "Salt and pepper to taste",
      "1 cup chickpeas, drained and rinsed",
      "2 cups baby spinach or kale",
      "1 avocado, sliced",
      "1/4 cup pumpkin seeds or sunflower seeds",
      "For the tahini dressing: 3 tablespoons tahini, 1 tablespoon lemon juice, 1 clove garlic (minced), 2-3 tablespoons warm water, 1 teaspoon maple syrup, salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C) and line a large baking sheet with parchment paper.",
      "In a large bowl, toss sweet potato, Brussels sprouts, cauliflower, bell pepper, and red onion with olive oil, cumin, smoked paprika, salt, and pepper.",
      "Spread the vegetables in a single layer on the prepared baking sheet and roast for 20-25 minutes, stirring halfway through, until tender and slightly caramelized.",
      "Add chickpeas to the baking sheet for the last 10 minutes of roasting to warm them and make them slightly crispy.",
      "While the vegetables are roasting, prepare the tahini dressing by whisking together tahini, lemon juice, minced garlic, maple syrup, and salt. Gradually add warm water until you reach your desired consistency.",
      "To assemble the bowls, divide the cooked grain between two bowls. Top each with roasted vegetables, chickpeas, and fresh greens.",
      "Add sliced avocado and sprinkle with pumpkin or sunflower seeds.",
      "Drizzle with tahini dressing just before serving."
    ],
    healthBenefits: "This nutrient-dense bowl combines complex carbohydrates, plant protein, and healthy fats for a well-rounded meal. The variety of colorful vegetables provides a wide spectrum of vitamins, minerals, and antioxidants to support overall health and reduce inflammation.",
    keyNutrients: [
      {
        name: "Sweet Potato",
        benefit: "Rich in beta-carotene for eye health, vitamin C for immune support, and fiber for digestive health."
      },
      {
        name: "Brussels Sprouts",
        benefit: "High in vitamin K for bone health, vitamin C for immune function, and contain compounds that may help prevent cancer."
      },
      {
        name: "Tahini",
        benefit: "Excellent source of calcium, healthy fats, and amino acids that support muscle function and bone health."
      }
    ],
    tips: [
      "Prep components ahead of time for quick assembly throughout the week.",
      "Customize with whatever vegetables are in season or in your refrigerator.",
      "For extra flavor, add a sprinkle of za'atar, dukkah, or nutritional yeast.",
      "Keep the dressing separate until serving time to maintain the freshness of the ingredients."
    ],
    nutrition: [
      { name: "Calories", value: "520 kcal" },
      { name: "Protein", value: "14g" },
      { name: "Carbohydrates", value: "65g" },
      { name: "Fat", value: "25g" },
      { name: "Fiber", value: "15g" }
    ]
  }
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
