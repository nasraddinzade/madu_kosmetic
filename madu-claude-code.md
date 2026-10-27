# Madu Kosmetik. Прототип интернет-магазина

Построй рабочий прототип интернет-магазина для бакинского магазина косметики Madu Kosmetik. Прототип показывается владельцу с телефона, это демонстрация возможностей, а не продакшн. Никакой реальной коммерции.

---

## 1. Что это за магазин

Madu Kosmetik, Баку, район Насими, рядом со станцией метро 28 May.

Мультибрендовая косметика нижнего эконом-сегмента. Декоративка, уход за лицом, волосы, тело, немного парфюмерии, цветные линзы.

Бренды четырьмя слоями.

- Турция. Sinoz, Golden Rose, Flormar, Morfose, Topface, Bioxcin, ADO
- Беларусь. Belita, Belkosmex, Compliment, Floresan, Larossa
- Западный масс-маркет. Maybelline, L'Oreal, Garnier, Pantene, Clear, Essence, Eveline, Kiko
- Безымянный Китай и реплики. Outdoor Girl, JEV, Miss Fidi, Mery Key, Ideal, Emily, Yara, My Note, Dear Body, Clavdio, Fleur

Цены от 1.50 до 25 манат, основная масса между 2 и 10.

Покупатель выбирает по цене, а не по бренду. Отзывов, рейтингов и акций у магазина нет. Сейчас заказы принимаются только через WhatsApp и директ Instagram.

---

## 2. Направление дизайна

Главная идея. Цена это не подпись под фото, а заголовок.

На каждой карточке число набрано крупнее названия товара, чёрным, с розовым знаком маната, и считывается раньше, чем глаз доходит до картинки. Первый экран не показывает ни одного лайфстайл-снимка, потому что у магазина их нет, вместо героя стоит ряд крупных ценовых плашек, и человек входит в каталог через свой бюджет, а не через категорию. Сетка плотная, две колонки на телефоне, карточки без теней, скругление не больше 4 пикселей, между карточками тонкая серая линия, как в бумажном прайсе. Фон страницы тёплый кремовый, белые только карточки, поэтому товар на белом фоне вырезается сам собой. Розовый работает ровно в трёх местах, знак маната, активный фильтр, кнопка в корзину, и больше нигде. После просмотра должно остаться ощущение, что ты заглянул в прайс-лист, в котором навели порядок, быстро и без вранья про премиальность.

### Шрифты

- Заголовки и цены. Archivo с Google Fonts, вариативный, вес 700 до 800, ширина wdth 110
- Текст. Inter с Google Fonts, вес 400 и 500

Перед сборкой проверь, что в Archivo рисуются глифы ə ş ç ğ ı ö ü. Если хоть один отсутствует, переводи весь текст на Inter, а Archivo оставь только на цифрах цен.

### Палитра

| Цвет | Где |
|---|---|
| `#F5208B` | розовый Madu, знак маната, активный фильтр, кнопка |
| `#14100F` | почти чёрный, текст, шапка, цена |
| `#FFF6F2` | тёплый кремовый, фон страницы |
| `#FFFFFF` | белый, карточки |
| `#8A817C` | серо-бежевый, второстепенный текст и разделительные линии |
| `#FFD9EA` | заливка ценовых плашек |

### Сетка

Плотная. Две колонки на телефоне, три на планшете, четыре на десктопе. Карточка вертикальная, картинка квадратная сверху, под ней бренд мелко, название в две строки максимум, цена крупно.

### Логотип

Текстовый вордмарк MADU набран Archivo вес 800, поверх него розовый мазок `#F5208B` как подложка под буквами DU, ниже KOSMETIK разрядными капсами 10px цветом `#8A817C`. Растровый логотип не используем.

---

## 3. Структура и почему так

Обоснование. Ассортимент широкий и дешёвый, у покупателя один реальный сценарий, «у меня двадцать манат, что я могу взять». Витрина-история не работает, у магазина нет ни своей съёмки, ни бренд-истории. Поэтому навигация строится от бюджета, а не от бренда.

### Главная

- Шапка с вордмарком и полем поиска, поиск прилипает при скролле
- Ряд ценовых плашек, до 3, до 5, до 10, до 20 манат. Нажатие открывает каталог с применённым фильтром
- Горизонтальная полоса категорий
- Блок «5 manatadək» живой сеткой, это самый ходовой диапазон
- Три категорийных блока, makiyaj, uz-baximi, sac, по восемь товаров и ссылка в каталог
- Условия получения и контакты в подвале

Каруселей новинок и хитов нет, данных о продажах нет и выдумывать их нельзя.

### Каталог

Сетка. Фильтры в выезжающей снизу панели, ровно три, категория, цена диапазоном, бренд. Сортировка, сначала дешёвые, сначала дорогие, по названию. Счётчик найденного.

Фильтров тип кожи, объём, оттенок, рейтинг, скидки и страна производства НЕ делать. Данных под них нет, они будут пустыми.

### Карточка товара

Квадратное фото, бренд, название, категория, цена крупно, короткое описание, кнопка в корзину.

Ниже блок «Oxşar qiymətə», четыре товара с ближайшими ценами, считается из данных. Это заменяет фейковые рекомендации.

### Корзина

Изменение количества, удаление, сумма, кнопка к оформлению.

Рядом с кнопкой оформления поставь кнопку WhatsApp, которая открывает чат с магазином и подставляет состав корзины текстом. Магазин сейчас принимает все заказы именно так, и этот путь должен остаться.

### Оформление

Имя, телефон, способ получения четырьмя вариантами. Самовывоз из магазина, доставка по городу, доставка к станции метро, почта в районы. Это реальные варианты магазина.

### Оплата и успех

Фейковый экран оплаты и подтверждение с номером заказа.

Страницы «о магазине» нет, адрес, часы и контакты живут в подвале на всех страницах. Личного кабинета, избранного, блога и подбора ухода по типу кожи нет.

---

## 4. Язык

Только азербайджанский, латиница. Переключателя языков НЕ делать.

Причина. Все названия товаров и все данные существуют только на азербайджанском. Русская версия означала бы, что ты переводишь названия товаров сам, то есть выдумываешь данные, которых у магазина нет.

Все строки интерфейса вынеси в один словарь, в коде захардкоженного текста быть не должно, чтобы второй язык можно было добавить позже. Полная диакритика ə ş ç ğ ı ö ü.

---

## 5. Фотографии товаров

Ищи настоящие снимки.

- Для каждой позиции ищи изображение по запросу бренд плюс название. Бери с сайта бренда, из каталогов производителя или из открытых источников
- НЕ бери фотографии с сайтов других бакинских магазинов и не бери кадры из инстаграма Madu, там чужая съёмка и водяные знаки
- Клади в `public/products/`, имя файла по слагу товара, квадрат 800 на 800, webp, белый или прозрачный фон
- Каждый файл проверь скриптом, а не на глаз. Должен открываться как картинка, весить больше 5 килобайт, не быть страницей ошибки, логотипом или баннером
- Рядом положи файл с источником каждой картинки

### Стоп перед сборкой

Когда закончишь скачивать, НЕ продолжай. Выведи отчёт и жди ответа.

В отчёте напиши:

- сколько снимков нашлось из 95
- разбивку по ценовым диапазонам, до 3 манат, до 5, до 10, до 20, свыше 20. По каждому сколько позиций было и сколько осталось с фото
- разбивку по категориям
- список позиций без фото

Товары без фото в каталог не выводи, но из файла данных не удаляй, пометь флагом `noImage: true`.

Смешивать настоящие фотографии и нарисованные заглушки нельзя. Если по отчёту решим перейти на заглушки, они будут одинаковыми для всех позиций.

---

## 6. Данные. Товары

Формат строки. Бренд, Название, Объём, Цена, Категория.

Объём `null` почти везде, он в источнике не указан. Там где null, просто не выводи это поле.

Категории. `makiyaj`, `uz-baximi`, `sac`, `beden`, `etir`, `aksesuar`.

Цены указывай с символом манат после суммы, например 6 ₼.

Три позиции помечены комментарием `NO_PRICE_IN_SOURCE`, цена у них поставлена по соседним товарам, оставь этот комментарий в коде.

Для товаров с брендом `(markasız)` выводи только название, поле бренда не показывай.

### makiyaj, тон и лицо

```
Topface, Skin Twin tonal krem SPF 20, null, 18 ₼
Flormar, Orijinal tonal krem, null, 16 ₼
L'Oreal, Tonal krem, null, 21 ₼
Outdoor Girl, Tonal krem, null, 8 ₼
(markasız), Tonal krem, null, 4.50 ₼
Belita Young, BB Cream SPF 15, null, 6 ₼
Mery Key, BB Cream 11 in 1 SPF 35+, null, 3 ₼
Ideal Family, BB Cream SPF 25, null, 3 ₼
Ideal Make Up, BB Cream Medium SPF 15, null, 3 ₼
Miss Fidi, BB Cream Matte Color Control konsiler, null, 3.50 ₼
Outdoor Girl, Get Picture Ready konsiler, null, 3.50 ₼
Outdoor Girl, Skin Illusion konsiler, null, 4 ₼        // NO_PRICE_IN_SOURCE
Outdoor Girl, HD Finishing boş pudra, null, 5 ₼
Outdoor Girl, Toz pudra, null, 5 ₼
Outdoor Girl, Bronzer pudra, null, 5 ₼
(markasız), 4 rəngli ənlik paleti, null, 8.50 ₼
JEV, Maye ənlik, null, 4 ₼
(markasız), İkili highlighter, null, 3 ₼
L'Oreal Paris, Lumi Glotion 901 və 902, null, 18.50 ₼
Outdoor Girl, Wake Up One Step Primer, 20 ml, 7.50 ₼
Clavdio, Professional Primer SPF 90, null, 6 ₼
JEV, Prep + Prime makiyaj bazası, null, 5 ₼
Maybelline, Baby Skin Instant Pore Eraser primer, null, 3 ₼
(markasız), Primer, null, 5 ₼
L'Oreal, Infaillible 3-Second Setting Mist, null, 20 ₼
Eveline, Mattifying Fixer Mist, null, 6.50 ₼
Mak, Makiyaj dondurucu sprey, null, 4 ₼
```

### makiyaj, глаза и брови

```
Essence, Lash Princess tuş, null, 2.30 ₼
Maybelline, Sky High tuş, null, 2.30 ₼
Flormar, Volume Up tuş, null, 15 ₼
Flormar, Orijinal tuş, null, 14 ₼
Golden Rose, Tuş, null, 9 ₼                            // NO_PRICE_IN_SOURCE
Outdoor Girl, One Step Volumizing Mascara, null, 5 ₼
Outdoor Girl, Suya davamlı layner, null, 4.50 ₼
Fleur, Orijinal layner, null, 4 ₼
(markasız), 18 rəngli göz kölgəsi paleti, null, 5 ₼
(markasız), Göz kölgəsi palitrası mat və parıltılı, null, 5 ₼
(markasız), Göz dartma şablonu, null, 2.50 ₼
Golden Rose, Qaş sabitləyici, null, 8 ₼
Yara Professional, Qaş sabitləyici, null, 2.50 ₼
My Note, Qaş sabitləyici, null, 2.50 ₼
(markasız), Brow Laminator qaş geli, null, 2 ₼
(markasız), Qaş geli, null, 3 ₼
Outdoor Girl, All Day Cream Gel Eyebrow 24 saat, null, 4.50 ₼
Bioxcin, Qaş və kirpik serumu, null, 17 ₼
```

### makiyaj, губы

```
Golden Rose, Mat dodaq boyası, null, 9 ₼
Golden Rose, Defining Lip Liner, null, 5 ₼
Golden Rose, Lipliner 212, null, 5 ₼                   // NO_PRICE_IN_SOURCE
Flormar, Dodaq boyası, null, 9.50 ₼
Kiko, Dodaq boyası, null, 2.70 ₼
Naked, Pomada, null, 2 ₼
JEV, Pomada, null, 3 ₼
Outdoor Girl, Dodaq boyası, null, 3 ₼
Outdoor Girl, Parıltılı dodaq boyası, null, 4 ₼
(markasız), Dodaq boyası 01 06 çalarları, null, 2.50 ₼
Emily, 203 dodaq qələmi, null, 3.50 ₼
(markasız), Dodaq tinti, null, 1.50 ₼
Bərxatnıye Qubki, Dodaq balzamı, null, 2.50 ₼
```

### uz-baximi

```
Sinoz, Hydrapro nəmləndirici losyon, null, 21.20 ₼
Sinoz, Perfect Purity təmizləyici yağ, null, 20.10 ₼
Sinoz, Hyper Vitality üz yuma geli, null, 12.10 ₼
Sinoz, Hydrapro üz yuma geli, null, 16.10 ₼
Sinoz, Perfect Sebum üz yuma geli, null, 14.50 ₼
Sinoz, Alpha Arbutin Serum, null, 19 ₼
Sinoz, Anti Dark Spot SPF 50+ günəş kremi, null, 11.50 ₼
Sinoz, SPF 50+ Fluid günəş kremi, null, 19.90 ₼
Sinoz, Arındırıcı kil üz maskası, null, 10.90 ₼
Eveline, Cica Skin 97% üz yuma gel yağı, null, 11.50 ₼
Compliment, Hidrofil yağ, null, 7.50 ₼
Compliment, No Problem üz losyonu, 200 ml, 4 ₼
Belkosmex, Problemli dəri üçün tonik, null, 4.80 ₼
Belkosmex, Detox Micellar Water 5 in 1, null, 7.50 ₼
Belkosmex, Hyaluron Deep Hydration üz kremi 60+, null, 9.90 ₼
Floresan, Retinol Derma Serum, null, 8.10 ₼
(markasız), Retinol Skin Perfecting krem pilinq 0.3%, null, 9.90 ₼
(markasız), 5% Glikolik turşulu tonik, null, 16.50 ₼
Garnier, Möcüzəvi su, null, 8 ₼
(markasız), Sunscreen Cream SPF 60 və SPF 90, null, 4.50 ₼
(markasız), Eşşək südü tərkibli ağardıcı üz köpüyü, null, 5 ₼
```

### sac

```
Pantene, Pro-V 7/24 saç baxım kremi, null, 11 ₼
Pantene, Şampun, null, 6.50 ₼
Clear Men, Şampun, null, 4.50 ₼
Sadoer, Volumizing Rosemary Shampoo, 500 ml, 7 ₼
ADO, Sulphate Free şampun, null, 6.60 ₼
Morfose, Dry Shampoo, null, 6.80 ₼
(markasız), Saç baxım şampunu, null, 4.30 ₼
Floresan, Multi Repair saç maskası, null, 7 ₼
Compliment, Likit Keratin saç maskası, null, 9.50 ₼
(markasız), Rozmarin və nikotin turşulu saç maskası, null, 9 ₼
Compliment, Bio Botanica Active balzam, null, 4.50 ₼
Larossa, Konyak və qırmızı bibər saç balzamı, null, 6.50 ₼
Mixit, Re:Start Cream Spray 15 in 1, null, 15 ₼
Dr. Laila, Biberiye Biotin saç spreyi, null, 11.50 ₼
DP Daily Perfection, Pro Keratin seriyası, null, 4.50 ₼
İmaj, Saç pudrası, null, 5 ₼
(markasız), Saç parfümü, null, 5.50 ₼
```

### beden

```
Compliment, Bədən skrabı, null, 6.50 ₼
(markasız), Bədən skrabı, null, 4 ₼
Dear Body, Bədən spreyi, null, 6 ₼
Dear Body, Bədən kremi, null, 4 ₼
Clavdio, Bədən spreyi, null, 4.50 ₼
Miss Fidi, Bədən spreyi, null, 6 ₼
(markasız), Bədən spreyi, null, 10 ₼
Dry Idea, Advanced Dry deodorant, null, 9 ₼
BK Belkosmex, Malinka duş geli, null, 5.50 ₼
(markasız), Aloe Vera Comfort intim gigiyena geli, null, 5 ₼
```

### etir

```
My Wish, Pour Femme Eau de Parfum, 100 ml, 25 ₼
Flory, Gardenia Pour Femme Eau de Parfum, 100 ml, 25 ₼
(markasız), Ətir, 50 ml, 4 ₼
```

### aksesuar

```
Dr. Laila, Boz rəngli linzalar, null, 10 ₼
Bella, Linza, null, 8.50 ₼
(markasız), Ürək formalı pudra pufu dəsti, null, 2 ₼
```

---

## 7. Механика

Стек. Next.js App Router, TypeScript, Tailwind. Без бэкенда и без базы. Товары в одном файле данных. Корзина в localStorage. Деплой на Vercel. Репозиторий `[ССЫЛКА]`.

Покупка. Корзина с изменением количества. Оформление с контактами и способом получения. Кнопка оплаты, задержка полторы секунды, экран успеха с номером заказа. Деньги не списываются. В коде комментарий, что реальным шлюзом будет epoint.

Плашка `Demo versiya, sifarişlər qəbul edilmir, ödəniş çıxılmır` вверху КАЖДОЙ страницы, не только в подвале. Убирается одной константой, по умолчанию видна.

---

## 8. Контакты для подвала

Ставь только то, что ниже. Это подтверждённые данные.

```
Ünvan        Bakı, Nəsimi rayonu, 28 May metrosunun yaxınlığı
WhatsApp     +994 50 764 16 64
İş saatları  hər gün 10:00 - 20:00
Instagram    @madu_kosmetic
Çatdırılma   mağazadan götürmə, şəhər daxili çatdırılma,
             metro stansiyalarına çatdırılma, rayonlara poçtla çatdırılma
```

Не подтверждено и в код НЕ ставить, оставь только комментарием `// TODO уточнить у владельца`:

- второй телефон +994 77 599 88 76
- номер дома, в одних источниках Azadlıq prospekti 42b, в других 26

Нигде не писать, что у магазина чего-то нет.

---

## 9. Чего делать не надо

- Регистрации и личных кабинетов
- Реальных платежей
- Базы данных и админки
- Отзывов и рейтингов, их неоткуда взять
- Переключателя языков

---

## 10. Критерии готовности

1. С телефона можно найти товар, открыть, положить в корзину, изменить количество, дойти до оплаты и увидеть подтверждение
2. Кнопка WhatsApp в корзине открывает чат с подставленным составом заказа
3. Ценовые плашки на главной открывают каталог с применённым фильтром
4. Корзина переживает перезагрузку страницы
5. Горизонтальной прокрутки нет ни на одном экране
6. Все выведенные товары имеют картинку, битых нет
7. Диакритика ə ş ç ğ ı ö ü рисуется везде, включая цены и фильтры
