import WrapYear from "./_year-data";

const year: number = 2021;

const flavourText = {
  intro: [`This year went by so quickly, but as we reflect on the year it’s clear that our
  wonderful community has been busy taking shot after shot of the amazing worlds we get to explore.
  From dystopian revolutions to deranged villages and everything in-between, our community has
  once again shown their passion for the games we play, and nowhere is this more clear than by looking at
  the stunning work produced and memorialized within the Hall of Framed.
  `],
  top10sys: [`Shocking no one, Cyberpunk 2077 took the top spot for most shots posted into the
  Share Your Shot channel in 2021, with a staggering 2492 shots being submitted across the community.
  Red Dead Redemption 2’s cowboy epic followed behind in second place with 1042 shots,
  and Assassin’s Creed Valhalla comes in at third with 766 entries. Perhaps the most unusual entry
  into this year’s top ten was the co-op survival game Left 4 Dead 2 which is still seeing
  some love over a decade after it launched.
  `],
  top10hof: [`Community mainstay titles Cyberpunk 2077 and Red Dead Redemption 2 once again
  claim 1st and 2nd place respectively with 343 & 140 shots between them over the course of the year.
  Honorable mentions for 2021 also go out to the Nordic wilds of Death Stranding,
  the gothic vibes of Resident Evil 8, and the continuation of the Star Wars space epic in Fallen Order.
  `],
  busysys: [`August 1st 2021 was an absolutely hectic day for shots being posted,
  with The Ascent coming out of nowhere to take the top spot and dominate the discord channel throughout
  the day with 57 shots being posted. The community fell in love with the dystopian industrial-scapes
  the game had to offer. Notable mentions to both Control and Genshin Impact,
  with both titles getting some love in the shadow of The Ascent’s rise to popularity.
  `],
  busyhof: [`It should come as no surprise that Cyberpunk 2077 was the top title on the busiest day of
  entries into the Hall of Framed, with 7 shots securing their place making up a quarter of all HoF entries that day.
  The Witcher 3 saw a bit of love too with 5 shots making it in, along with Resident Evil 8’s giantess dominating the third spot.
  `],
}

const Home = () => {
  return WrapYear(year, flavourText);
};

export default Home;
