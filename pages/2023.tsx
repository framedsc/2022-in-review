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
  the Share Your Shot channel with a whopping 1624 shots shared in 2023,
  no doubt spurred on by extensive game updates and DLC content released this year.
  Hogwarts Legacy casts its way into the second highest position with 987 shots,
  thanks to its vibrant imagining of the Hogwarts region and its impressively lush landscapes.
  Baldur's Gate 3, the year's biggest RPG and The Game Awards 2023's Game of the Year,
  rolled third place in the rankings, with 575 shots. We can rest assured that the Internet
  will never be short on gorgeous portraits of Astarion, Shadowheart, and Lae’zel anytime soon.
  `],
  top10hof: [`Across the 15000+ shots shared in 2023, a total of 1155 from
  177 games were voted up to the Hall of Framed. At the top, perhaps unsurprisingly,
  is Cyberpunk 2077 once again with 144 entries. Those dystopian vistas and neon-soaked portraits
  never fail to wow us, placing the game back up there. Mirroring the same pattern of
  Share Your Shot trends, Hogwarts Legacy comes in at second place with 100 entries of mystical
  forests and spellbinding surroundings. In a close third, and most surprisingly,
  is psychological thriller Alan Wake 2. Released with only two months left in the year,
  it surged quickly in popularity, landing it in our top 3 at 81 entries into the Hall of Framed.
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


const Home = () => {
  return WrapYear(year, flavourText);
};

export default Home;
