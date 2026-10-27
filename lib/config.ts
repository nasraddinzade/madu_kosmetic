// Demo strip at the top of every page. Set to false to remove it everywhere.
export const SHOW_DEMO_BANNER = true;

// true: every product uses the same neutral placeholder image.
// false: products use /public/products/<slug>.webp, products with noImage are hidden.
export const USE_PLACEHOLDERS = true;

export const CART_STORAGE_KEY = "madu-cart-v1";
export const ORDER_STORAGE_KEY = "madu-order-v1";

// Confirmed contacts (madu-claude-code.md, section 8).
export const CONTACTS = {
  address: "Bakı, Nəsimi rayonu, 28 May metrosunun yaxınlığı",
  // TODO уточнить у владельца: номер дома, в одних источниках Azadlıq prospekti 42b, в других 26
  whatsappDisplay: "+994 50 764 16 64",
  whatsappNumber: "994507641664",
  // TODO уточнить у владельца: второй телефон +994 77 599 88 76
  hours: "10:00 - 20:00",
  instagram: "madu_kosmetic",
} as const;

export const PRICE_TILES = [3, 5, 10, 20] as const;

export const HOME_CATEGORY_BLOCKS = ["makiyaj", "uz-baximi", "sac"] as const;
export const HOME_BLOCK_SIZE = 8;
export const HOME_BUDGET_LIMIT = 5;
export const HOME_BUDGET_SIZE = 12;

export const PAYMENT_DELAY_MS = 1500;
