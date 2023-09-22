const playerData = [
  {
    id: 1,
    age: 25,
    name: "Aryna Sabalenka",
    country: "Belarus",
    coach: "Anton Dubrov",
    image:
      "https://i.ibb.co/61tZ13P/Getty-Images-1645168008-e1693960954635-jpg.webp",
    titles: 13,
    ranking: 1,
    text: "Sabalenka has a very aggressive style of play, often accumulating high numbers of winners and unforced errors. With her height, she also has a very powerful serve. In 2023, she won her first major singles title at the Australian Open, reached the semifinals at all four major tournaments (also finishing runner-up at the US Open), and obtained the world No. 1 ranking.",
  },
  {
    id: 2,
    age: 22,
    name: "Iga Świątek",
    country: "Poland",
    coach: "Tomasz Wiktorowski",
    image: "https://i.ibb.co/VqXQ7vG/960x0-jpg.webp",
    titles: 15,
    ranking: 2,
    text: 'Świątek She has described her style of play on clay as "a big serve, topspin, and backhand down the line". After the retirement of world No. 1 Ashleigh Barty, she became the first Polish player, male or female, to reach the top ranking in singles, on 4 April 2022. She also won another WTA 1000 title in Miami, becoming the fourth woman to win the Sunshine Double. During this time, Świątek accumulated a 37-match winning streak, the longest on the WTA Tour in the 21st century.',
  },
  {
    id: 3,
    age: 19,
    name: "Coco Gauff",
    country: "United States",
    coach: "Brad Gilbert",
    image: "https://i.ibb.co/pKP74nz/Getty-Images-1661688625-jpg.webp",
    titles: 6,
    ranking: 3,
    text: 'Gauff won her first WTA Tour singles title at the 2019 Linz Open at the age of 15 years and seven months, making her the youngest singles title-holder on the Tour since 2004. In 2023, she won her first WTA 1000 title at the Cincinnati Masters and her first major singles title at the US Open. Gauff\'s tennis idols are Serena and Venus Williams. "Serena Williams has always been my idol...and Venus," she has said. "They are the reason why I wanted to pick up a tennis racquet.',
  },
  {
    id: 4,
    age: 29,
    name: "Jessica Pegula",
    country: "United States",
    coach: "David Witt",
    image: "https://i.ibb.co/gR1RxFv/64373b8d3ee0c.webp",
    titles: 3,
    ranking: 4,
    text: "Pegula is a six-time major quarterfinalist in singles, having reached this stage at all four Grand Slam tournaments; thrice at the Australian Open (2021–2023), and once at the French Open (2022), US Open (2022), and Wimbledon (2023). In doubles, she reached the women's doubles final of the 2022 French Open partnering with Coco Gauff and the mixed doubles final of the 2023 US Open with Austin Krajicek.",
  },
  {
    id: 5,
    age: 24,
    name: "Elena Rybkina",
    country: "Kazakhstan",
    coach: "Stefano Vukov",
    image:
      "https://i.ibb.co/TqgnB2q/Elena-Rybakina-2023-US-Open-38-cropped.jpg",
    titles: 5,
    ranking: 5,
    text: "Rybakina is noted for her excellent serve and can generate high-powered groundstrokes. Her powerful serve, which is capable of reaching 122 mph (196 km/h),[49] allows her to serve a large number of aces, and she led the tour in the ace count in 2020, serving 192 aces throughout the year. She plays primarily from the baseline and has good movement for her height.",
  },
  {
    id: 6,
    age: 29,
    name: "Ons Jabeur",
    country: "Tunisia",
    coach: "Issam Jellali",
    image: "https://i.ibb.co/Dt3q4Sq/np-file-236984.jpg",
    titles: 4,
    ranking: 6,
    text: "Jabeur won the 2022 Madrid Open, a WTA 1000 event, her biggest title, becoming the first female Tunisian and Arab player to win at this level. Shen then went on to become the runner-up at Wimbledon in 2022 and 2023 and at the US Open in 2022, becoming the first Arab woman to contest a major singles final. Her achievements are credited with raising the profile of tennis across the African continent",
  },
  {
    id: 7,
    age: 24,
    name: "Markéta Vondroušová",
    country: "Czech Republic",
    coach: "Jan Hernych",
    image: "https://i.ibb.co/47xH9fD/images-7.jpg",
    titles: 2,
    ranking: 7,
    text: "Vondroušová is a former junior world No. 1, having won two major doubles titles. She had a quick breakthrough on the WTA Tour, winning the 2017 Ladies Open Biel Bienne at age 17 in just her second career WTA Tour singles event. Vondroušová struggled with injuries early in her career, most notably missing the second half of the 2019 season shortly after her French Open final. Her signature shot is the drop shot.",
  },
  {
    id: 8,
    age: 28,
    name: "Maria Sakkari",
    country: "Greece",
    coach: "Tom Hill",
    image:
      "https://i.ibb.co/DgHW76v/cf0d8916-1450-4273-aede-f3af07078b58-bnp-wed-12-jpg.webp",
    titles: 1,
    ranking: 8,
    text: "Sakkari is known for her aggressive, all-court style of play, centered around her strong serve and powerful groundstrokes. She was introduced to tennis by her parents at age 6 and moved to Barcelona at age 18 in order to train. She has said that her favorite surfaces are hard and clay and that her favorite shot is the serve. Growing up, her favourite players were Serena Williams, Roger Federer and Rafael Nadal.",
  },
  {
    id: 9,
    age: 27,
    name: "Karolína Muchová",
    country: "Czech Republic",
    coach: "Kirsten Flipkens, Emil Miške",
    image: "https://i.ibb.co/TMsmPJh/Karolina-Muchova-49981880942.jpg",
    titles: 1,
    ranking: 9,
    text: "Muchová is an aggressive all-court player, possessing an intelligent game with exceptional variety. She has powerful groundstrokes from both wings, using both her forehand and backhand to hit winners from any position on the court. She has been praised for her ability to incorporate softer shots, such as drop shots, lobs, and sliced backhands, into her game, constantly breaking up the pace of baseline rallies, and being able to hit winners with these typically defensive shots.",
  },
  {
    id: 10,
    age: 29,
    name: "Caroline Garcia",
    country: "France",
    coach: "Juan Pablo Guzmán",
    image: "https://i.ibb.co/5BYvYrF/edb7c.jpg",
    titles: 11,
    ranking: 10,
    text: "Garcia is an offensive baseliner, with consistent and powerful groundstrokes, and a strong service game. Her forehand is her stronger wing, and she can hit many clean winners off it. She also possesses a consistent and strong two-handed backhand. She also has a strong first and second serve, known for its accuracy. She served the ninth most aces in 2016, with 218. She has good movement and footwork around the court, which help her with hitting her groundstrokes effectively.",
  },
];

export default playerData;
