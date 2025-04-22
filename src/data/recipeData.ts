
export type Recipe = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: string;
  categories: string[];
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fats: string;
  };
};

export const recipes: Recipe[] = [
  {
    id: 1,
    slug: "rainbow-veggie-quinoa-bowl",
    title: "Rainbow Veggie Quinoa Bowl",
    description: "Colorful vegetables and protein-rich quinoa create a balanced and satisfying meal.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    time: "25 mins",
    difficulty: "Easy",
    categories: ["lunch", "dinner", "vegan", "vegetarian", "gluten-free"],
    ingredients: [
      "1 cup quinoa, cooked",
      "1 cup cherry tomatoes, halved",
      "1 cup bell pepper, diced",
      "1 cup cucumber, diced",
      "1 cup baby spinach, chopped",
      "1/4 cup red cabbage, shredded",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt & Pepper to taste"
    ],
    instructions: [
      "Toss all chopped veggies together in a large bowl.",
      "Add cooked quinoa and combine.",
      "Whisk olive oil and lemon juice, drizzle on bowl.",
      "Season with salt and pepper. Mix and serve."
    ],
    nutrition: {
      calories: 370,
      protein: "13g",
      carbs: "55g",
      fats: "12g"
    },
  },
  {
    id: 2,
    slug: "avocado-chickpea-toast",
    title: "Avocado Chickpea Toast",
    description: "A protein-packed breakfast with creamy avocado and seasoned chickpeas.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    time: "15 mins",
    difficulty: "Easy",
    categories: ["breakfast", "vegetarian", "vegan"],
    ingredients: [
      "2 slices whole-grain bread",
      "1 ripe avocado",
      "1/2 cup canned chickpeas, drained",
      "1/2 tsp cumin",
      "1/2 tsp paprika",
      "Salt & pepper to taste",
      "Lemon juice to taste"
    ],
    instructions: [
      "Mash chickpeas and avocado together.",
      "Add spices, salt, pepper, and lemon juice.",
      "Toast bread slices, top with avocado-chickpea mixture.",
      "Sprinkle with additional seasonings if desired."
    ],
    nutrition: {
      calories: 340,
      protein: "10g",
      carbs: "38g",
      fats: "17g"
    },
  },
  {
    id: 3,
    slug: "berry-chia-overnight-oats",
    title: "Berry Chia Overnight Oats",
    description: "Prepare these antioxidant-rich oats the night before for a quick, nutritious breakfast.",
    image: "https://images.unsplash.com/photo-1557387966-a3952b98e89c?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
    time: "5 mins + overnight",
    difficulty: "Easy",
    categories: ["breakfast", "vegetarian", "vegan"],
    ingredients: [
      "1/2 cup rolled oats",
      "1 tbsp chia seeds",
      "1 cup almond milk",
      "1/2 cup mixed berries",
      "1 tbsp maple syrup",
      "Pinch salt"
    ],
    instructions: [
      "Combine oats, chia seeds, milk, syrup, and salt in a jar.",
      "Stir well. Refrigerate overnight.",
      "Top with berries in the morning and enjoy!"
    ],
    nutrition: {
      calories: 250,
      protein: "6g",
      carbs: "48g",
      fats: "5g"
    },
  },
  {
    id: 4,
    slug: "lemon-herb-grilled-chicken-salad",
    title: "Lemon Herb Grilled Chicken Salad",
    description: "Tender grilled chicken over fresh greens with a bright lemon vinaigrette.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    time: "30 mins",
    difficulty: "Medium",
    categories: ["lunch", "dinner", "gluten-free", "low-carb"],
    ingredients: [
      "1 chicken breast",
      "4 cups mixed salad greens",
      "1/2 cup cherry tomatoes",
      "1/4 cucumber, sliced",
      "1 tbsp olive oil",
      "Juice of 1 lemon",
      "1 tsp mixed herbs",
      "Salt & pepper",
    ],
    instructions: [
      "Marinate chicken with olive oil, lemon juice, herbs, salt & pepper.",
      "Grill chicken until cooked. Slice.",
      "Arrange greens, tomatoes, and cucumber on a plate.",
      "Top with grilled chicken. Drizzle with dressing."
    ],
    nutrition: {
      calories: 390,
      protein: "34g",
      carbs: "14g",
      fats: "22g"
    },
  },
  {
    id: 5,
    slug: "mediterranean-salmon-bowl",
    title: "Mediterranean Salmon Bowl",
    description: "Omega-3 rich salmon with cucumber, tomatoes, olives, and tzatziki sauce.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3",
    time: "25 mins",
    difficulty: "Medium",
    categories: ["lunch", "dinner", "gluten-free", "low-carb"],
    ingredients: [
      "1 fillet salmon",
      "1/2 cup brown rice (or cauliflower rice)",
      "1/2 cup cherry tomatoes, sliced",
      "1/4 cup cucumber, sliced",
      "1/4 cup olives",
      "2 tbsp tzatziki sauce",
      "Olive oil, salt, pepper",
    ],
    instructions: [
      "Season and grill salmon fillet.",
      "Arrange rice, veggies, and olives in a bowl.",
      "Top with grilled salmon and tzatziki. Serve."
    ],
    nutrition: {
      calories: 490,
      protein: "27g",
      carbs: "31g",
      fats: "29g"
    },
  },
  {
    id: 6,
    slug: "spicy-black-bean-sweet-potato-tacos",
    title: "Spicy Black Bean Sweet Potato Tacos",
    description: "Flavorful plant-based tacos with roasted sweet potatoes and protein-rich black beans.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    time: "35 mins",
    difficulty: "Medium",
    categories: ["lunch", "dinner", "vegetarian", "vegan"],
    ingredients: [
      "2 small sweet potatoes, cubed",
      "1 cup black beans, rinsed",
      "4 corn tortillas",
      "1/4 red onion, diced",
      "1 tsp chili powder",
      "1/2 tsp cumin",
      "Olive oil, salt, pepper"
    ],
    instructions: [
      "Roast sweet potatoes with oil and spices at 400°F until tender (20 mins).",
      "Warm tortillas. Fill with potatoes, black beans, onion.",
      "Top with cilantro and serve."
    ],
    nutrition: {
      calories: 370,
      protein: "10g",
      carbs: "70g",
      fats: "6g"
    },
  },
  {
    id: 7,
    slug: "green-detox-smoothie-bowl",
    title: "Green Detox Smoothie Bowl",
    description: "A refreshing blend of spinach, banana, avocado, and superfood toppings.",
    // Use user's provided image to ensure it shows!
    image: "/lovable-uploads/4976078e-1fb4-457f-b29e-99a15d24abf0.png",
    time: "10 mins",
    difficulty: "Easy",
    categories: ["breakfast", "vegetarian", "vegan", "gluten-free"],
    ingredients: [
      "1 cup spinach",
      "1 banana",
      "1/2 avocado",
      "1/2 cup Greek yogurt or dairy-free yogurt",
      "1/2 cup almond milk",
      "1 tbsp chia seeds",
      "Fruit & granola, for topping"
    ],
    instructions: [
      "Blend spinach, banana, avocado, yogurt, milk, and chia seeds till creamy.",
      "Pour into a bowl and add toppings."
    ],
    nutrition: {
      calories: 320,
      protein: "9g",
      carbs: "40g",
      fats: "15g"
    },
  },
  {
    id: 8,
    slug: "stuffed-bell-peppers-with-quinoa",
    title: "Stuffed Bell Peppers with Quinoa",
    description: "Bell peppers stuffed with quinoa, black beans, corn, and Mexican spices.",
    // Use user's provided image to ensure it shows!
    image: "/lovable-uploads/4976078e-1fb4-457f-b29e-99a15d24abf0.png",
    time: "45 mins",
    difficulty: "Medium",
    categories: ["dinner", "vegetarian", "vegan", "gluten-free"],
    ingredients: [
      "3 bell peppers, halved and seeded",
      "1 cup cooked quinoa",
      "1/2 cup black beans",
      "1/2 cup corn",
      "1/2 cup chunky salsa",
      "1 tsp cumin",
      "1 tsp chili powder",
      "Olive oil, salt, pepper"
    ],
    instructions: [
      "Mix quinoa, beans, corn, salsa, and spices.",
      "Stuff mix into peppers. Brush peppers with oil.",
      "Bake at 375°F for 25 mins. Serve hot."
    ],
    nutrition: {
      calories: 370,
      protein: "11g",
      carbs: "72g",
      fats: "6g"
    },
  },
  {
    id: 9,
    slug: "zucchini-noodles-with-pesto",
    title: "Zucchini Noodles with Pesto",
    description: "Low-carb zucchini noodles with homemade basil pesto and cherry tomatoes.",
    // Use user's provided image to ensure it shows!
    image: "/lovable-uploads/4976078e-1fb4-457f-b29e-99a15d24abf0.png",
    time: "20 mins",
    difficulty: "Easy",
    categories: ["lunch", "dinner", "vegetarian", "low-carb", "gluten-free"],
    ingredients: [
      "2 medium zucchinis, spiralized",
      "1/2 cup cherry tomatoes, halved",
      "1/4 cup fresh basil pesto",
      "1 tbsp pine nuts (optional)",
      "Salt & pepper"
    ],
    instructions: [
      "Toss zucchini noodles with pesto until coated.",
      "Top with cherry tomatoes and pine nuts.",
      "Season and serve fresh."
    ],
    nutrition: {
      calories: 210,
      protein: "5g",
      carbs: "21g",
      fats: "12g"
    },
  },
];
