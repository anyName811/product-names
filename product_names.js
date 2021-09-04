const names = [
  {
      "name_ru": "Редиска",
      "name_en": "Radish"
  },
  {
      "name_ru": "Репа",
      "name_en": "Turnip"
  },
  {
      "name_ru": "Яблоки",
      "name_en": "Apples"
  },
  {
      "name_ru": "Шиповник",
      "name_en": "Rosehip"
  },
  {
      "name_ru": "Шампиньоны",
      "name_en": "Champignon"
  },
  {
      "name_ru": "Чеснок",
      "name_en": "Garlic"
  },
  {
      "name_ru": "Черника",
      "name_en": "Champignons"
  },
  {
      "name_ru": "Черешня",
      "name_en": "Sweet cherry"
  },
  {
      "name_ru": "Цукини",
      "name_en": "Цукини"
  },
  {
      "name_ru": "Цветная капуста",
      "name_en": "Cauliflower"
  },
  {
      "name_ru": "Хурма",
      "name_en": "Persimmon"
  },
  {
      "name_ru": "Физалис",
      "name_en": "Physalis"
  },
  {
      "name_ru": "Фенхель",
      "name_en": "Fennel"
  },
  {
      "name_ru": "Фейхоа",
      "name_en": "Feijoa"
  },
  {
      "name_ru": "Тыква",
      "name_en": "Pumpkin"
  },
  {
      "name_ru": "Спаржа",
      "name_en": "Asparagus"
  },
  {
      "name_ru": "Слива",
      "name_en": "Plum"
  },
  {
      "name_ru": "Сельдерей",
      "name_en": "Celery"
  },
  {
      "name_ru": "Свити",
      "name_en": "Sweetie"
  },
  {
      "name_ru": "Свекла",
      "name_en": "Beetroot"
  },
  {
      "name_ru": "Цикорий",
      "name_en": "Chicory"
  },
  {
      "name_ru": "Фрилис",
      "name_en": "Frielis"
  },
  {
      "name_ru": "Листовой салат",
      "name_en": "Leaf salad"
  },
  {
      "name_ru": "Руколла",
      "name_en": "Rucolla"
  },
  {
      "name_ru": "Романо",
      "name_en": "Romano"
  },
  {
      "name_ru": "Радичио",
      "name_en": "Radicio"
  },
  {
      "name_ru": "Лоло Росса",
      "name_en": "Lolo Rossa"
  },
  {
      "name_ru": "Лоло Бионда",
      "name_en": "Lolo Bionda"
  },
  {
      "name_ru": "Латук",
      "name_en": "Lettuce"
  },
  {
      "name_ru": "Кресс",
      "name_en": "Watercress"
  },
  {
      "name_ru": "Айсберг",
      "name_en": "Iceberg"
  },
  {
      "name_ru": "Артишок",
      "name_en": "Artichoke"
  },
  {
      "name_ru": "Батавия",
      "name_en": "Batavia"
  },
  {
      "name_ru": "Редька",
      "name_en": "Редька"
  },
  {
      "name_ru": "Рамбутан",
      "name_en": "Rambutan"
  },
  {
      "name_ru": "Томат",
      "name_en": "Томат"
  },
  {
      "name_ru": "Помело",
      "name_en": "Pomelo"
  },
  {
      "name_ru": "Питахайя",
      "name_en": "Tomato"
  },
  {
      "name_ru": "Персик",
      "name_en": "Peach"
  },
  {
      "name_ru": "Перец",
      "name_en": "Pepper"
  },
  {
      "name_ru": "Патиссон",
      "name_en": "Patisson"
  },
  {
      "name_ru": "Папайя",
      "name_en": "Papaya Pomaya"
  },
  {
      "name_ru": "Огурцы",
      "name_en": "Cucumbers"
  },
  {
      "name_ru": "Нектарин",
      "name_en": "Nectarine"
  },
  {
      "name_ru": "Мушмула",
      "name_en": "Medlar"
  },
  {
      "name_ru": "Морковь",
      "name_en": "Carrot"
  },
  {
      "name_ru": "Маракуйя",
      "name_en": "Passion Fruit"
  },
  {
      "name_ru": "Мандарин",
      "name_en": "Mandarin"
  },
  {
      "name_ru": "Мангостин",
      "name_en": "Mangosteen"
  },
  {
      "name_ru": "Манго",
      "name_en": "Mango"
  },
  {
      "name_ru": "Малина",
      "name_en": "Raspberry"
  },
  {
      "name_ru": "Лук",
      "name_en": "Onion"
  },
  {
      "name_ru": "Лук порей",
      "name_en": "Leek"
  },
  {
      "name_ru": "Личи",
      "name_en": "Lychee"
  },
  {
      "name_ru": "Лимон",
      "name_en": "Lemon"
  },
  {
      "name_ru": "Лемонграсс",
      "name_en": "Lemongrass"
  },
  {
      "name_ru": "Лайм",
      "name_en": "Lime"
  },
  {
      "name_ru": "Кумкват",
      "name_en": "Kumquat"
  },
  {
      "name_ru": "Кукуруза",
      "name_en": "Corn"
  },
  {
      "name_ru": "Крыжовник",
      "name_en": "Gooseberry"
  },
  {
      "name_ru": "Корень хрена",
      "name_en": "Root Horseradish"
  },
  {
      "name_ru": "Корень сельдерей",
      "name_en": "Celery root"
  },
  {
      "name_ru": "Клюква",
      "name_en": "Cranberry"
  },
  {
      "name_ru": "Клубника",
      "name_en": "Strawberry"
  },
  {
      "name_ru": "Кизил",
      "name_en": "Cornelian cherry"
  },
  {
      "name_ru": "Киви",
      "name_en": "Kiwi"
  },
  {
      "name_ru": "Картофель",
      "name_en": "Potato"
  },
  {
      "name_ru": "Капуста",
      "name_en": "Cabbage"
  },
  {
      "name_ru": "Кабачок",
      "name_en": "Zucchini"
  },
  {
      "name_ru": "Инжир",
      "name_en": "Fig"
  },
  {
      "name_ru": "Имбирь",
      "name_en": "Ginger"
  },
  {
      "name_ru": "Земляника",
      "name_en": "Земляника"
  },
  {
      "name_ru": "Базилик",
      "name_en": "Basil"
  },
  {
      "name_ru": "Лук зеленый",
      "name_en": "Green onion"
  },
  {
      "name_ru": "Черемша",
      "name_en": "Ramson"
  },
  {
      "name_ru": "Шалфей",
      "name_en": "Sage"
  },
  {
      "name_ru": "Укроп",
      "name_en": "Dill"
  },
  {
      "name_ru": "Тимьян",
      "name_en": "Thyme"
  },
  {
      "name_ru": "Щавель",
      "name_en": "Sorrel"
  },
  {
      "name_ru": "Тархун",
      "name_en": "Tarragon"
  },
  {
      "name_ru": "Размарин",
      "name_en": "Razmarin"
  },
  {
      "name_ru": "Петрушка",
      "name_en": "Parsley"
  },
  {
      "name_ru": "Орегано",
      "name_en": "Oregano"
  },
  {
      "name_ru": "Мята",
      "name_en": "Mint"
  },
  {
      "name_ru": "Мелисса",
      "name_en": "Laurel"
  },
  {
      "name_ru": "Лавровый лист",
      "name_en": "Melisserie"
  },
  {
      "name_ru": "Кинза",
      "name_en": "Cilantro"
  },
  {
      "name_ru": "Горчица",
      "name_en": "Mustard"
  },
  {
      "name_ru": "Ежевика",
      "name_en": "Blackberry"
  },
  {
      "name_ru": "Дыня",
      "name_en": "Melon"
  },
  {
      "name_ru": "Дайкон",
      "name_en": "Daikon"
  },
  {
      "name_ru": "Груша",
      "name_en": "Pear"
  },
  {
      "name_ru": "Лисичка",
      "name_en": "Chanterelle"
  },
  {
      "name_ru": "Грейпфрут",
      "name_en": "Grapefruit"
  },
  {
      "name_ru": "Гранат",
      "name_en": "Pomegranate"
  },
  {
      "name_ru": "Голубика",
      "name_en": "Blueberry"
  },
  {
      "name_ru": "Вишня",
      "name_en": "Cherry"
  },
  {
      "name_ru": "Виноград",
      "name_en": "Grape"
  },
  {
      "name_ru": "Брусника",
      "name_en": "Lingonberry"
  },
  {
      "name_ru": "Батат",
      "name_en": "Sweet potato"
  },
  {
      "name_ru": "Банан",
      "name_en": "Banana"
  },
  {
      "name_ru": "Баклажан",
      "name_en": "Eggplant"
  },
  {
      "name_ru": "Арбуз",
      "name_en": "Watermelon"
  },
  {
      "name_ru": "Апельсин",
      "name_en": "Orange"
  },
  {
      "name_ru": "Ананас",
      "name_en": "Pineapple"
  },
  {
      "name_ru": "Алыча",
      "name_en": "Cherry plum"
  },
  {
      "name_ru": "Айва",
      "name_en": "Quince"
  },
  {
      "name_ru": "Авокадо",
      "name_en": "Avocado"
  },
  {
      "name_ru": "Абрикос",
      "name_en": "Apricot"
  }
]

export default names