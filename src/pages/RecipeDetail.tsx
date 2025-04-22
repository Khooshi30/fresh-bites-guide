
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { recipes } from "@/data/recipeData";
import { Button } from "@/components/ui/button";

const RecipeDetail = () => {
  const { slug } = useParams();
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-nutri-green-dark mb-4">Recipe not found</h2>
          <p className="mb-6">We couldn't find the recipe you're looking for.</p>
          <Link to="/recipes">
            <Button variant="outline" className="border-nutri-green text-nutri-green hover:bg-nutri-green/10">
              Back to Recipes
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-nutri-cream py-10">
        <div className="container mx-auto max-w-3xl px-4">
          <Link to="/recipes" className="text-nutri-green hover:underline mb-4 inline-block">&larr; Back to Recipes</Link>
          <div className="bg-white rounded-xl shadow-lg p-6 md:flex md:space-x-8">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg mb-6 md:mb-0"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/lovable-uploads/4976078e-1fb4-457f-b29e-99a15d24abf0.png";
              }}
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-nutri-green-dark mb-2">{recipe.title}</h1>
              <p className="text-gray-700 mb-3">{recipe.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.categories.map((cat) => (
                  <span key={cat} className="bg-nutri-green/10 text-nutri-green-dark text-xs px-2 py-1 rounded">{cat}</span>
                ))}
              </div>
              <div className="flex gap-6 mb-6">
                <span className="flex items-center text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-nutri-green" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {recipe.time}
                </span>
                <span className="text-sm text-gray-600">{recipe.difficulty}</span>
              </div>
              <div className="mb-5">
                <h2 className="text-lg font-semibold text-nutri-green-dark mb-2">Ingredients</h2>
                <ul className="list-disc list-inside pl-2 space-y-1">
                  {recipe.ingredients.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <h2 className="text-lg font-semibold text-nutri-green-dark mb-2">Instructions</h2>
                <ol className="list-decimal list-inside pl-2 space-y-1">
                  {recipe.instructions.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-nutri-green-dark mb-2">Nutrition Facts</h2>
                <ul className="text-sm text-gray-700">
                  <li>Calories: {recipe.nutrition.calories}</li>
                  <li>Protein: {recipe.nutrition.protein}</li>
                  <li>Carbs: {recipe.nutrition.carbs}</li>
                  <li>Fats: {recipe.nutrition.fats}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecipeDetail;
