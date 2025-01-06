type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 10,
    title: "Classic Margherita",
    desc: "A timeless delight of tangy tomato sauce, fresh basil leaves, and creamy mozzarella on a perfectly crispy crust, drizzled with extra virgin olive oil.",
    img: "/temporary/p2.png",
    price: 19.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 3,
      },
      {
        title: "Large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 11,
    title: "BBQ Chicken",
    desc: "Succulent chicken, tangy BBQ sauce, red onions, and a blend of cheeses create a smoky, savory pizza with a satisfying crispy crust.",
    img: "/temporary/p3.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 12,
    title: "Crispy Chicken Deluxe",
    desc: "A golden, crispy chicken fillet topped with fresh lettuce, ripe tomatoes, pickles, and a dollop of zesty mayo, all nestled in a toasted brioche bun.",
    img: "/temporary/b1.png",
    price: 15.5,
    options: [
      {
        title: "Regular",
        additionalPrice: 0,
      },
      {
        title: "Double Patty",
        additionalPrice: 3,
      },
    ],
  },
  {
    id: 13,
    title: "Smoky Bacon Cheeseburger",
    desc: "Juicy beef patty, crispy smoked bacon, melted cheddar cheese, and a special smoky sauce for a burger that bursts with flavor.",
    img: "/temporary/b2.png",
    price: 17.9,
    options: [
      {
        title: "Regular",
        additionalPrice: 0,
      },
      {
        title: "Double Patty",
        additionalPrice: 4,
      },
    ],
  },
  {
    id: 14,
    title: "Pesto Primavera",
    desc: "A delightful mix of fresh seasonal vegetables tossed in a vibrant basil pesto sauce, served with al dente penne pasta and topped with grated parmesan.",
    img: "/temporary/pa3.png",
    price: 17.5,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 3,
      },
      {
        title: "Large",
        additionalPrice: 5,
      },
    ],
  },
  {
    id: 15,
    title: "Seafood Marinara",
    desc: "A rich and savory tomato-based pasta loaded with succulent shrimp, tender calamari, and mussels, perfectly seasoned with garlic and herbs.",
    img: "/temporary/pa4.png",
    price: 21.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 16,
    title: "Truffle Mushroom Pasta",
    desc: "A luxurious blend of creamy truffle sauce and sautéed mushrooms tossed with perfectly cooked linguine, finished with a sprinkle of fresh herbs and parmesan.",
    img: "/temporary/pa5.png",
    price: 23.5,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 240,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 80,
      },
      {
        title: "Large",
        additionalPrice: 130,
      },
    ],
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const burgers: Products = [
  {
    id: 1,
    title: "Classic Cheeseburger",
    desc: "A juicy beef patty topped with cheddar cheese, lettuce, tomato, and pickles, all served on a toasted bun.",
    img: "/temporary/p11.jpg",
    price: 250, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 120,
      },
      {
        title: "Large",
        additionalPrice: 250,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon BBQ Burger",
    desc: "A savory beef patty, crispy bacon, tangy barbecue sauce, and cheddar cheese, topped with crispy onion rings.",
    img: "/temporary/p11.jpg",
    price: 750, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 150,
      },
      {
        title: "Large",
        additionalPrice: 300,
      },
    ],
  },
  {
    id: 3,
    title: "Veggie Burger",
    desc: "A delicious plant-based patty with fresh lettuce, tomato, pickles, and vegan mayo, served on a whole-grain bun.",
    img: "/temporary/p11.jpg",
    price: 700, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 120,
      },
      {
        title: "Large",
        additionalPrice: 250,
      },
    ],
  },
  {
    id: 4,
    title: "Mushroom Swiss Burger",
    desc: "A beef patty with sautéed mushrooms, melted Swiss cheese, and creamy garlic aioli, all on a soft brioche bun.",
    img: "/temporary/p11.jpg",
    price: 850, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 150,
      },
      {
        title: "Large",
        additionalPrice: 300,
      },
    ],
  },
  {
    id: 5,
    title: "Spicy Jalapeño Burger",
    desc: "A zesty beef patty topped with spicy jalapeños, pepper jack cheese, and a fiery sriracha mayo.",
    img: "/temporary/p11.jpg",
    price: 750, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 150,
      },
      {
        title: "Large",
        additionalPrice: 300,
      },
    ],
  },
  {
    id: 6,
    title: "Chicken Burger",
    desc: "A crispy fried chicken breast with lettuce, tomato, pickles, and a creamy ranch sauce on a toasted bun.",
    img: "/temporary/p11.jpg",
    price: 700, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 120,
      },
      {
        title: "Large",
        additionalPrice: 250,
      },
    ],
  },
];

export const pastas: Products = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    desc: "A hearty Italian pasta with a rich and savory beef and tomato sauce, topped with Parmesan cheese.",
    img: "/temporary/spaghetti_bolognese.jpg",
    price: 300, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 150,
      },
      {
        title: "Large",
        additionalPrice: 300,
      },
    ],
  },
  {
    id: 2,
    title: "Penne Arrabbiata",
    desc: "Penne pasta in a spicy garlic, tomato, and chili sauce, with a hint of fresh herbs.",
    img: "/temporary/penne_arrabbiata.jpg",
    price: 280, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 130,
      },
      {
        title: "Large",
        additionalPrice: 270,
      },
    ],
  },
  {
    id: 3,
    title: "Fettuccine Alfredo",
    desc: "Creamy Alfredo sauce tossed with fettuccine pasta and topped with grated Parmesan cheese.",
    img: "/temporary/fettuccine_alfredo.jpg",
    price: 350, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 160,
      },
      {
        title: "Large",
        additionalPrice: 330,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Pasta",
    desc: "Fresh basil pesto sauce mixed with spaghetti, cherry tomatoes, and pine nuts for an aromatic dish.",
    img: "/temporary/pesto_pasta.jpg",
    price: 320, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 140,
      },
      {
        title: "Large",
        additionalPrice: 310,
      },
    ],
  },
  {
    id: 5,
    title: "Lasagna",
    desc: "Layers of pasta, rich meat sauce, and creamy béchamel, baked to perfection.",
    img: "/temporary/lasagna.jpg",
    price: 400, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 200,
      },
      {
        title: "Large",
        additionalPrice: 380,
      },
    ],
  },
  {
    id: 6,
    title: "Seafood Pasta",
    desc: "A delightful mix of shrimp, calamari, and mussels, served in a garlic, olive oil, and white wine sauce.",
    img: "/temporary/seafood_pasta.jpg",
    price: 450, // Price in INR
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 210,
      },
      {
        title: "Large",
        additionalPrice: 420,
      },
    ],
  },
];


export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },  
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
