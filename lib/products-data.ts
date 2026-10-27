import type { CategoryId } from "./categories";

export type Product = {
  slug: string;
  brand: string | null; // null = (markasız), the brand field is not shown
  name: string;
  volume: string | null;
  price: number;
  category: CategoryId;
  // Set when no real photo was found. Such products are kept in the data,
  // but hidden from the catalog while USE_PLACEHOLDERS is false.
  noImage?: boolean;
};

type Row = [brand: string | null, name: string, volume: string | null, price: number, category: CategoryId];

// Source: madu-claude-code.md, section 6. Brand, name, volume, price (₼), category.
// Rows marked NO_PRICE_IN_SOURCE got a price based on neighbouring products.
const ROWS: Row[] = [
  // makiyaj, тон и лицо
  ["Topface", "Skin Twin tonal krem SPF 20", null, 18, "makiyaj"],
  ["Flormar", "Orijinal tonal krem", null, 16, "makiyaj"],
  ["L'Oreal", "Tonal krem", null, 21, "makiyaj"],
  ["Outdoor Girl", "Tonal krem", null, 8, "makiyaj"],
  [null, "Tonal krem", null, 4.50, "makiyaj"],
  ["Belita Young", "BB Cream SPF 15", null, 6, "makiyaj"],
  ["Mery Key", "BB Cream 11 in 1 SPF 35+", null, 3, "makiyaj"],
  ["Ideal Family", "BB Cream SPF 25", null, 3, "makiyaj"],
  ["Ideal Make Up", "BB Cream Medium SPF 15", null, 3, "makiyaj"],
  ["Miss Fidi", "BB Cream Matte Color Control konsiler", null, 3.50, "makiyaj"],
  ["Outdoor Girl", "Get Picture Ready konsiler", null, 3.50, "makiyaj"],
  ["Outdoor Girl", "Skin Illusion konsiler", null, 4, "makiyaj"],  // NO_PRICE_IN_SOURCE
  ["Outdoor Girl", "HD Finishing boş pudra", null, 5, "makiyaj"],
  ["Outdoor Girl", "Toz pudra", null, 5, "makiyaj"],
  ["Outdoor Girl", "Bronzer pudra", null, 5, "makiyaj"],
  [null, "4 rəngli ənlik paleti", null, 8.50, "makiyaj"],
  ["JEV", "Maye ənlik", null, 4, "makiyaj"],
  [null, "İkili highlighter", null, 3, "makiyaj"],
  ["L'Oreal Paris", "Lumi Glotion 901 və 902", null, 18.50, "makiyaj"],
  ["Outdoor Girl", "Wake Up One Step Primer", "20 ml", 7.50, "makiyaj"],
  ["Clavdio", "Professional Primer SPF 90", null, 6, "makiyaj"],
  ["JEV", "Prep + Prime makiyaj bazası", null, 5, "makiyaj"],
  ["Maybelline", "Baby Skin Instant Pore Eraser primer", null, 3, "makiyaj"],
  [null, "Primer", null, 5, "makiyaj"],
  ["L'Oreal", "Infaillible 3-Second Setting Mist", null, 20, "makiyaj"],
  ["Eveline", "Mattifying Fixer Mist", null, 6.50, "makiyaj"],
  ["Mak", "Makiyaj dondurucu sprey", null, 4, "makiyaj"],

  // makiyaj, глаза и брови
  ["Essence", "Lash Princess tuş", null, 2.30, "makiyaj"],
  ["Maybelline", "Sky High tuş", null, 2.30, "makiyaj"],
  ["Flormar", "Volume Up tuş", null, 15, "makiyaj"],
  ["Flormar", "Orijinal tuş", null, 14, "makiyaj"],
  ["Golden Rose", "Tuş", null, 9, "makiyaj"],  // NO_PRICE_IN_SOURCE
  ["Outdoor Girl", "One Step Volumizing Mascara", null, 5, "makiyaj"],
  ["Outdoor Girl", "Suya davamlı layner", null, 4.50, "makiyaj"],
  ["Fleur", "Orijinal layner", null, 4, "makiyaj"],
  [null, "18 rəngli göz kölgəsi paleti", null, 5, "makiyaj"],
  [null, "Göz kölgəsi palitrası mat və parıltılı", null, 5, "makiyaj"],
  [null, "Göz dartma şablonu", null, 2.50, "makiyaj"],
  ["Golden Rose", "Qaş sabitləyici", null, 8, "makiyaj"],
  ["Yara Professional", "Qaş sabitləyici", null, 2.50, "makiyaj"],
  ["My Note", "Qaş sabitləyici", null, 2.50, "makiyaj"],
  [null, "Brow Laminator qaş geli", null, 2, "makiyaj"],
  [null, "Qaş geli", null, 3, "makiyaj"],
  ["Outdoor Girl", "All Day Cream Gel Eyebrow 24 saat", null, 4.50, "makiyaj"],
  ["Bioxcin", "Qaş və kirpik serumu", null, 17, "makiyaj"],

  // makiyaj, губы
  ["Golden Rose", "Mat dodaq boyası", null, 9, "makiyaj"],
  ["Golden Rose", "Defining Lip Liner", null, 5, "makiyaj"],
  ["Golden Rose", "Lipliner 212", null, 5, "makiyaj"],  // NO_PRICE_IN_SOURCE
  ["Flormar", "Dodaq boyası", null, 9.50, "makiyaj"],
  ["Kiko", "Dodaq boyası", null, 2.70, "makiyaj"],
  ["Naked", "Pomada", null, 2, "makiyaj"],
  ["JEV", "Pomada", null, 3, "makiyaj"],
  ["Outdoor Girl", "Dodaq boyası", null, 3, "makiyaj"],
  ["Outdoor Girl", "Parıltılı dodaq boyası", null, 4, "makiyaj"],
  [null, "Dodaq boyası 01 06 çalarları", null, 2.50, "makiyaj"],
  ["Emily", "203 dodaq qələmi", null, 3.50, "makiyaj"],
  [null, "Dodaq tinti", null, 1.50, "makiyaj"],
  ["Bərxatnıye Qubki", "Dodaq balzamı", null, 2.50, "makiyaj"],

  // uz-baximi
  ["Sinoz", "Hydrapro nəmləndirici losyon", null, 21.20, "uz-baximi"],
  ["Sinoz", "Perfect Purity təmizləyici yağ", null, 20.10, "uz-baximi"],
  ["Sinoz", "Hyper Vitality üz yuma geli", null, 12.10, "uz-baximi"],
  ["Sinoz", "Hydrapro üz yuma geli", null, 16.10, "uz-baximi"],
  ["Sinoz", "Perfect Sebum üz yuma geli", null, 14.50, "uz-baximi"],
  ["Sinoz", "Alpha Arbutin Serum", null, 19, "uz-baximi"],
  ["Sinoz", "Anti Dark Spot SPF 50+ günəş kremi", null, 11.50, "uz-baximi"],
  ["Sinoz", "SPF 50+ Fluid günəş kremi", null, 19.90, "uz-baximi"],
  ["Sinoz", "Arındırıcı kil üz maskası", null, 10.90, "uz-baximi"],
  ["Eveline", "Cica Skin 97% üz yuma gel yağı", null, 11.50, "uz-baximi"],
  ["Compliment", "Hidrofil yağ", null, 7.50, "uz-baximi"],
  ["Compliment", "No Problem üz losyonu", "200 ml", 4, "uz-baximi"],
  ["Belkosmex", "Problemli dəri üçün tonik", null, 4.80, "uz-baximi"],
  ["Belkosmex", "Detox Micellar Water 5 in 1", null, 7.50, "uz-baximi"],
  ["Belkosmex", "Hyaluron Deep Hydration üz kremi 60+", null, 9.90, "uz-baximi"],
  ["Floresan", "Retinol Derma Serum", null, 8.10, "uz-baximi"],
  [null, "Retinol Skin Perfecting krem pilinq 0.3%", null, 9.90, "uz-baximi"],
  [null, "5% Glikolik turşulu tonik", null, 16.50, "uz-baximi"],
  ["Garnier", "Möcüzəvi su", null, 8, "uz-baximi"],
  [null, "Sunscreen Cream SPF 60 və SPF 90", null, 4.50, "uz-baximi"],
  [null, "Eşşək südü tərkibli ağardıcı üz köpüyü", null, 5, "uz-baximi"],

  // sac
  ["Pantene", "Pro-V 7/24 saç baxım kremi", null, 11, "sac"],
  ["Pantene", "Şampun", null, 6.50, "sac"],
  ["Clear Men", "Şampun", null, 4.50, "sac"],
  ["Sadoer", "Volumizing Rosemary Shampoo", "500 ml", 7, "sac"],
  ["ADO", "Sulphate Free şampun", null, 6.60, "sac"],
  ["Morfose", "Dry Shampoo", null, 6.80, "sac"],
  [null, "Saç baxım şampunu", null, 4.30, "sac"],
  ["Floresan", "Multi Repair saç maskası", null, 7, "sac"],
  ["Compliment", "Likit Keratin saç maskası", null, 9.50, "sac"],
  [null, "Rozmarin və nikotin turşulu saç maskası", null, 9, "sac"],
  ["Compliment", "Bio Botanica Active balzam", null, 4.50, "sac"],
  ["Larossa", "Konyak və qırmızı bibər saç balzamı", null, 6.50, "sac"],
  ["Mixit", "Re:Start Cream Spray 15 in 1", null, 15, "sac"],
  ["Dr. Laila", "Biberiye Biotin saç spreyi", null, 11.50, "sac"],
  ["DP Daily Perfection", "Pro Keratin seriyası", null, 4.50, "sac"],
  ["İmaj", "Saç pudrası", null, 5, "sac"],
  [null, "Saç parfümü", null, 5.50, "sac"],

  // beden
  ["Compliment", "Bədən skrabı", null, 6.50, "beden"],
  [null, "Bədən skrabı", null, 4, "beden"],
  ["Dear Body", "Bədən spreyi", null, 6, "beden"],
  ["Dear Body", "Bədən kremi", null, 4, "beden"],
  ["Clavdio", "Bədən spreyi", null, 4.50, "beden"],
  ["Miss Fidi", "Bədən spreyi", null, 6, "beden"],
  [null, "Bədən spreyi", null, 10, "beden"],
  ["Dry Idea", "Advanced Dry deodorant", null, 9, "beden"],
  ["BK Belkosmex", "Malinka duş geli", null, 5.50, "beden"],
  [null, "Aloe Vera Comfort intim gigiyena geli", null, 5, "beden"],

  // etir
  ["My Wish", "Pour Femme Eau de Parfum", "100 ml", 25, "etir"],
  ["Flory", "Gardenia Pour Femme Eau de Parfum", "100 ml", 25, "etir"],
  [null, "Ətir", "50 ml", 4, "etir"],

  // aksesuar
  ["Dr. Laila", "Boz rəngli linzalar", null, 10, "aksesuar"],
  ["Bella", "Linza", null, 8.50, "aksesuar"],
  [null, "Ürək formalı pudra pufu dəsti", null, 2, "aksesuar"],
];

const TRANSLIT: Record<string, string> = { ə: "e", ş: "s", ç: "c", ğ: "g", ı: "i", ö: "o", ü: "u" };

function slugify(text: string): string {
  return text
    .toLocaleLowerCase("az")
    .replace(/[əşçğıöü]/g, (ch) => TRANSLIT[ch] ?? ch)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildProducts(rows: Row[]): Product[] {
  const seen = new Map<string, number>();
  return rows.map(([brand, name, volume, price, category]) => {
    const base = slugify([brand, name].filter(Boolean).join(" "));
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return { slug: n === 1 ? base : `${base}-${n}`, brand, name, volume, price, category };
  });
}

export const ALL_PRODUCTS: Product[] = buildProducts(ROWS);
