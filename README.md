# Madu Kosmetik — прототип интернет-магазина

Демо для владельца магазина Madu Kosmetik (Баку, 28 May). Никакой реальной коммерции: заказы никуда не уходят, оплата фейковая.

ТЗ: [madu-claude-code.md](madu-claude-code.md).

## Стек

Next.js 16 (App Router), TypeScript, Tailwind 4. Без бэкенда и базы. Корзина в `localStorage`. Деплой на Vercel без настроек.

```bash
npm install
npm run dev
```

## Где что лежит

| Файл | Что |
|---|---|
| `lib/products-data.ts` | все товары одним файлом (112 строк из раздела 6 ТЗ) |
| `lib/i18n.ts` | все строки интерфейса, азербайджанский |
| `lib/config.ts` | контакты, демо-плашка, режим картинок |
| `lib/cart.ts` | корзина на `localStorage` |
| `lib/order.ts` | заказ, номер заказа, текст для WhatsApp |

## Переключатели в `lib/config.ts`

- `SHOW_DEMO_BANNER` — плашка «Demo versiya…» вверху каждой страницы. `false` убирает её везде.
- `USE_PLACEHOLDERS` — сейчас `false`: товары показываются с настоящими фото из `public/products/<slug>.webp` (800×800, источники в `public/products/sources.json`). Товары без фото помечены `noImage: true` в `lib/products-data.ts`, скрыты с сайта, но остаются в данных (36 из 112 с фото). `true` вернёт одинаковую заглушку для всех товаров.

## Страницы

`/` главная · `/katalog` каталог (`?max=5`, `?kat=sac`, `?brend=…`, `?q=…`, `?sirala=…`) · `/mehsul/[slug]` товар · `/sebet` корзина · `/sifaris` оформление · `/odenis` оплата (демо, реальным шлюзом будет epoint) · `/tesdiq` подтверждение.
