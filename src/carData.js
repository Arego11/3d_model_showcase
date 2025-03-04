const carData = [
  {
    name: "BMW M4",
    path: "/img/bmw.glb",
    description: "The BMW M4 is a high-performance sports coupe with a twin-turbocharged inline-six engine, delivering exhilarating acceleration and top-tier driving dynamics.",
    rarity: "The BMW M4 is a common model in BMW's lineup, but special editions like the M4 CSL and M4 GTS are much rarer and command high collector interest. These limited-production versions feature increased horsepower, advanced aerodynamics, and lightweight materials.",
    factory: "Manufactured at BMW’s Munich plant in Germany, the M4 is assembled using cutting-edge automation combined with skilled craftsmanship. The factory is known for its precision engineering and rigorous quality control.",
    make: "BMW (Bayerische Motoren Werke) is a German luxury automobile manufacturer known for its engineering excellence, sporty handling, and innovation. The M4 is part of BMW's legendary M series, which focuses on high-performance vehicles.",
    price: "The base BMW M4 starts at around $75,000. Limited edition models like the M4 CSL can exceed $140,000 due to their rarity and performance enhancements."
  },
  {
    name: "Porsche 917",
    path: "/img/917.glb",
    description: "The Porsche 917 is a legendary endurance race car that secured Porsche's first overall victories at Le Mans in 1970 and 1971.",
    rarity: "With only 37 units produced, the Porsche 917 is one of the rarest and most desirable race cars in history. Its legacy in motorsports and extreme power output make it a centerpiece for serious collectors.",
    factory: "Built at Porsche's Stuttgart-Zuffenhausen factory in Germany, the 917 was developed specifically for endurance racing. It was engineered using experimental techniques, making it one of the most advanced race cars of its time.",
    make: "Porsche is a globally recognized German automotive brand specializing in high-performance sports cars. The 917 represents a pinnacle moment in Porsche’s motorsport heritage, proving its dominance in endurance racing.",
    price: "Originally sold as a race car, the Porsche 917 had no street price. However, today at auctions, a Porsche 917 can sell for over $14 million, depending on its history and condition."
  },
  {
    name: "Toyota AE86 (1984)",
    path: "/img/1984.glb",
    description: "The Toyota AE86, often called the Hachiroku, is an iconic lightweight sports car known for its exceptional handling and drifting capabilities.",
    rarity: "While originally a mass-produced vehicle, the AE86 has become increasingly rare due to its popularity in drifting and motorsports. Well-preserved examples are highly sought after by enthusiasts and collectors.",
    factory: "The AE86 was built at Toyota's Tahara plant in Japan. Toyota’s manufacturing facilities are known for their precision, efficiency, and commitment to quality, using the Toyota Production System (TPS) for lean manufacturing.",
    make: "Toyota is one of the world’s largest and most reliable automakers. The AE86 belongs to the Corolla family but stands out due to its lightweight chassis, rear-wheel drive, and motorsports legacy.",
    price: "Originally priced affordably in the 1980s, today a well-maintained Toyota AE86 can fetch between $30,000 and $60,000, with some modified or rare editions going even higher."
  },
  {
    name: "Nissan GT-R Nismo",
    path: "/img/2015_nissan.glb",
    description: "The Nissan GT-R Nismo is a high-performance version of the GT-R, designed for maximum speed, aerodynamics, and track dominance.",
    rarity: "While the GT-R itself is widely available, the Nismo variant is a low-production model that features specialized tuning, carbon fiber components, and enhanced performance. Limited units make it desirable among performance enthusiasts.",
    factory: "Manufactured at Nissan's Tochigi factory in Japan, the GT-R undergoes a rigorous production process, with its engines hand-assembled by a select team of master craftsmen known as 'Takumi.'",
    make: "Nissan is a Japanese automaker known for innovation and performance, with the GT-R lineage dating back to the 1960s. The Nismo badge represents Nissan’s motorsport division and its most extreme performance vehicles.",
    price: "The Nissan GT-R Nismo starts at approximately $210,000, significantly higher than the standard GT-R, due to its racing enhancements and limited production."
  },
  {
    name: "Hoonicorn Mustang",
    path: "/img/hoonicorn.glb",
    description: "Ken Block’s Hoonicorn Mustang is an all-wheel-drive 1,400HP monster built for extreme drifting and gymkhana performances.",
    rarity: "The Hoonicorn is a one-of-a-kind, custom-built drift car. There are no production units, making it one of the rarest Mustangs ever created.",
    factory: "Built by ASD Motorsports in North Carolina, the Hoonicorn Mustang was custom-engineered to handle extreme drifting with its AWD system and twin-turbo V8 engine.",
    make: "Ford, an American automotive giant, originally built the 1965 Mustang, but the Hoonicorn is a highly modified version that bears little resemblance to the stock model.",
    price: "As a one-off build, the Hoonicorn does not have a market price. However, if ever auctioned, it would likely fetch millions due to its history and unique engineering."
  },
  {
    name: "Nissan Skyline GT500",
    path: "/img/nissan_skyline_gt500.glb",
    description: "The Nissan Skyline GT500 is a race-spec version of the legendary Skyline, designed for Japan’s Super GT racing series.",
    rarity: "As a dedicated race car, the GT500 version of the Skyline is extremely rare, with only a limited number of units built for competition.",
    factory: "The Skyline GT500 was developed by Nissan Motorsports (NISMO) in Japan, where cutting-edge aerodynamics and racing technology are integrated into every build.",
    make: "The Skyline name has been synonymous with Nissan's performance vehicles for decades, and the GT500 continues that legacy in the highest tiers of motorsport.",
    price: "These race cars are not sold to the public, but if decommissioned, a Skyline GT500 could sell for upwards of $500,000 due to its competition heritage."
  },
  {
    name: "Nissan GT-R R35",
    path: "/img/gtr.glb",
    description: "The Nissan GT-R R35, known as Godzilla, is one of the most advanced all-wheel-drive supercars, featuring immense power and cutting-edge technology.",
    rarity: "The standard GT-R is widely available, but rare versions like the GT-R50 by Italdesign and the Nismo special editions are highly exclusive and valuable.",
    factory: "Assembled in Nissan’s Tochigi plant in Japan, each GT-R engine is hand-built in a clean-room environment by Nissan’s master Takumi craftsmen.",
    make: "Nissan’s GT-R series has been a dominant force in motorsports and road performance for over 50 years, constantly evolving to set new standards in speed and technology.",
    price: "A base GT-R R35 starts around $115,000, while high-performance Nismo variants exceed $220,000. Limited-edition models can reach over $1 million."
  }
];

export default carData;
