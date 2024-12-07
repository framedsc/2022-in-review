import WrapYear from "./_year-data";

const year: number = 2023;

const flavourText = {
  intro: [`Another year, another Framed in Review! This year,
  our community of skilled virtual photographers explored some of the
  biggest game releases to date, with epic high fantasy adventures like Baldur’s Gate 3,
  the re-imagined horrors among the stars of Dead Space Remake, and a return to the
  neon-lit streets of Cyberpunk 2077 through its DLC, Phantom Liberty. From sequels to updates,
  new IPs to remakes, we’ve been spoiled for choice in 2023, so let’s go over what
  captivated the Framed community throughout the year.
  `],
  top10sys: [`Coming in strong and surprising no one, Cyberpunk 2077 continues to dominate
  the Share Your Shot channel with a whopping 1704 shots shared in 2023,
  no doubt spurred on by extensive game updates and DLC content released this year.
  Hogwarts Legacy casts its way into the second highest position with 1008 shots,
  thanks to its vibrant imagining of the Hogwarts region and its impressively lush landscapes.
  Baldur's Gate 3, the year's biggest RPG and The Game Awards 2023's Game of the Year,
  rolled third place in the rankings, with 613 shots. We can rest assured that the Internet
  will never be short on gorgeous portraits of Astarion, Shadowheart, and Lae’zel anytime soon.
  `],
  top10hof: [`Across the 15000+ shots shared in 2023, a total of 1162 from
  177 games were voted up to the Hall of Framed. At the top, perhaps unsurprisingly,
  is Cyberpunk 2077 once again with 145 entries. Those dystopian vistas and neon-soaked portraits
  never fail to wow us, placing the game back up there. Mirroring the same pattern of
  Share Your Shot trends, Hogwarts Legacy comes in at second place with 100 entries of mystical
  forests and spellbinding surroundings. In a close third, and most surprisingly,
  is psychological thriller Alan Wake 2. Released with only two months left in the year,
  it surged quickly in popularity, landing it in our top 3 at 82 entries into the Hall of Framed.
  `],
  busysys: [`This day saw a total of 92 shots posted, the record high of the year leading into a
  pretty busy February. Headlined by the recently-released Dead Space Remake with 13 shots,
  that particular Friday also saw many shares from Need for Speed Unbound and the ever-popular
  Ghost of Tsushima, followed by full 5-shot sets of Battlefield V's warzones and
  creative liminal spaces in Garry's Mod. Cyberpunk 2077 makes an appearance as it always does,
  as the day breaks off into various single shots from other games.
  `],
  busyhof: [`The Hall of Framed is a fickle beast, deciding on a whim which game to elevate
  and what gets left within the chambers of the Share Your Shot channel.
  Almost as if in response to the number of shots coming in on the same day,
  the Hall of Framed decided to honor its most active day of the year by sending a
  shocking 36 shots to find their place in the gallery. From the high octane driving scenes of
  Need for Speed Unbound & Forza Horizon 5, to the unrelenting horrors of space with
  Alien: Isolation & Dead Space Remake, this day saw a wide variety of titles
  sneaking into the hall to take their place.
  `],
}

const guessTheVPData = [
  ['265908457784213505', 3],
  ['446743605529280522', 351],
  ['220206083136946176', 24],
  ['960401306479128636', 66],
  ['163919378285461504', 1070],
  ['192300712049246208', 21],
  ['576442964163690527', 88],
  ['463025285554634753', 9],
  ['490511584058408972', 8],
  ['708833719271817226', 2],
  ['364473042111561730', 1],
  ['764427456856981544', 646],
  ['349272662901522444', 25],
  ['310528138067181572', 3],
  ['381155529814179840', 2],
  ['128245457141891072', 60],
  ['727947925535195137', 16],
  ['197446843972452352', 1],
  ['433917542906724352', 1],
  ['80738520422944768', 847],
  ['287893831976747009', 246],
  ['770718209913389096', 20],
  ['188691759470084097', 102],
  ['98469030779686912', 2],
  ['432838731376885762', 18],
  ['235148962103951360', 1],
  ['415478928833118260', 196],
  ['301881785426378762', 1],
  ['267828878934802453', 1],
  ['207168185353371648', 1],
  ['480092672330170368', 1]
]

const Home = () => {
  return WrapYear(year, flavourText, guessTheVPData);
};

export default Home;
