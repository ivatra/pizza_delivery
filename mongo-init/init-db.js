// Switch to orderpizza database
db = db.getSiblingDB('orderpizza');

// Create pizza collection with sample data
db.pizza.insertMany([
  {
    id: 1,
    title: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella cheese",
    image: "/img/pepperoni-pizza-notcustom.avif",
    custom: false,
    size: {
      small: 8.99,
      medium: 12.99,
      large: 16.99,
      xlarge: 20.99
    }
  },
  {
    id: 2,
    title: "Garden Veggie Pizza",
    description: "Fresh vegetables with cheese",
    image: "/img/garden-veggie-pizza.avif",
    custom: false,
    size: {
      small: 9.99,
      medium: 13.99,
      large: 17.99,
      xlarge: 21.99
    }
  },
  {
    id: 3,
    title: "Tropical Hawaiian",
    description: "Ham and pineapple",
    image: "/img/tropical-hawaiian-nc.avif",
    custom: false,
    size: {
      small: 10.99,
      medium: 14.99,
      large: 18.99,
      xlarge: 22.99
    }
  },
  {
    id: 4,
    title: "Meat Supreme",
    description: "Loaded with meats",
    image: "/img/meat-supreme-nc.avif",
    custom: false,
    size: {
      small: 11.99,
      medium: 15.99,
      large: 19.99,
      xlarge: 23.99
    }
  },
  {
    id: 5,
    title: "Classic Pizza",
    description: "Traditional cheese pizza",
    image: "/img/classic-nc.avif",
    custom: false,
    size: {
      small: 7.99,
      medium: 11.99,
      large: 15.99,
      xlarge: 19.99
    }
  },
  {
    id: 6,
    title: "BBQ Chicken Pizza",
    description: "Grilled chicken with BBQ sauce and red onions",
    image: "/img/chicken-nc.avif",
    custom: false,
    size: {
      small: 10.99,
      medium: 14.99,
      large: 18.99,
      xlarge: 22.99
    }
  },
  {
    id: 7,
    title: "Canadian Bacon Pizza",
    description: "Canadian bacon with pineapple and cheese",
    image: "/img/canadian-nc.avif",
    custom: false,
    size: {
      small: 9.99,
      medium: 13.99,
      large: 17.99,
      xlarge: 21.99
    }
  },
  {
    id: 8,
    title: "Four Cheese Pizza",
    description: "Mozzarella, parmesan, cheddar, and blue cheese",
    image: "/img/classic-nc.avif",
    custom: false,
    size: {
      small: 10.49,
      medium: 14.49,
      large: 18.49,
      xlarge: 22.49
    }
  },
  {
    id: 9,
    title: "Margherita Pizza",
    description: "Fresh tomatoes, basil, and mozzarella",
    image: "/img/garden-veggie-pizza.avif",
    custom: false,
    size: {
      small: 8.49,
      medium: 12.49,
      large: 16.49,
      xlarge: 20.49
    }
  },
  {
    id: 10,
    title: "Spicy Italian Pizza",
    description: "Pepperoni, Italian sausage, jalapeños, and hot sauce",
    image: "/img/pepperoni-pizza-notcustom.avif",
    custom: false,
    size: {
      small: 11.49,
      medium: 15.49,
      large: 19.49,
      xlarge: 23.49
    }
  },
  {
    id: 11,
    title: "Mushroom Lovers Pizza",
    description: "Three types of mushrooms with garlic and herbs",
    image: "/img/garden-veggie-pizza.avif",
    custom: false,
    size: {
      small: 9.49,
      medium: 13.49,
      large: 17.49,
      xlarge: 21.49
    }
  },
  {
    id: 12,
    title: "Buffalo Chicken Pizza",
    description: "Spicy buffalo chicken with ranch drizzle",
    image: "/img/chicken-nc.avif",
    custom: false,
    size: {
      small: 11.99,
      medium: 15.99,
      large: 19.99,
      xlarge: 23.99
    }
  },
  {
    id: 13,
    title: "Build Your Own Pizza",
    description: "Create your own pizza with your favorite toppings",
    image: "/img/base-pizza.avif",
    custom: true,
    size: {
      small: 6.99,
      medium: 10.99,
      large: 14.99,
      xlarge: 18.99
    }
  }
]);

// Create ingredient collection with sample data
db.ingredient.insertMany([
  {
    id: 1,
    name: "Pepperoni",
    price: 1.50,
    image: "/img/pepperoni.avif"
  },
  {
    id: 2,
    name: "Bacon",
    price: 1.75,
    image: "/img/bacon.avif"
  },
  {
    id: 3,
    name: "Chicken",
    price: 2.00,
    image: "/img/chicken.avif"
  },
  {
    id: 4,
    name: "Beef",
    price: 2.00,
    image: "/img/beef.avif"
  },
  {
    id: 5,
    name: "Ham",
    price: 1.75,
    image: "/img/ham.avif"
  },
  {
    id: 6,
    name: "Salami",
    price: 1.50,
    image: "/img/salami.avif"
  },
  {
    id: 7,
    name: "Mushrooms",
    price: 1.00,
    image: "/img/mushrooms.avif"
  },
  {
    id: 8,
    name: "Green Peppers",
    price: 0.75,
    image: "/img/green-peppers.avif"
  },
  {
    id: 9,
    name: "Red Onions",
    price: 0.75,
    image: "/img/red-onions.avif"
  },
  {
    id: 10,
    name: "Olives",
    price: 1.00,
    image: "/img/olives.avif"
  },
  {
    id: 11,
    name: "Tomatoes",
    price: 0.75,
    image: "/img/tomatos.avif"
  },
  {
    id: 12,
    name: "Spinach",
    price: 1.00,
    image: "/img/spinach.avif"
  },
  {
    id: 13,
    name: "Broccoli",
    price: 1.00,
    image: "/img/broccoli.avif"
  }
]);

// Create order collection (empty, will be populated by orders)
db.createCollection("order");

print('Database initialized successfully!');
