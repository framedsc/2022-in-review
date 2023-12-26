import WrapYear from "./_year-data";

const year: number = 2023;

const flavourText = {
  intro: [`Another year, another Framed in Review! This year saw our
  fantastic community explore some of the biggest game releases to date
  with epic adventures like Baldur’s Gate 3, re-imagined horrors among the stars
  in the Dead Space Remake, and brand new additions to existing titles like
  Cyberpunk 2077’s DLC - Phantom Liberty. From sequels to updates, new IP’s
  to remakes, we’ve been spoiled for choice in 2023, so let’s go over what
  captivated the Framed community throughout the year.
  `],
  top10sys: [`Coming in strong and surprising no one, Cyberpunk 2077
  continues to dominate the Share Your Shot channel with a whopping
  1624 shots shared by the community in 2023, no doubt spurred on
  by the recent game work and DLC content released this year.
  Hogwarts legacy managed to conjure its way into the second highest position
  with 987 shots thanks to its vibrant imagining of the Hogwarts scenery and
  impressively lush landscapes, followed swiftly by this year’s biggest
  RPG offering and GOTY winner at this year’s Game Awards.
  With 575 Baldurs Gate 3 shots earning it third place in the rankings,
  we can be assured that the internet will never be lacking on portraits
  of Astarion, Shadowheart, and Lae’zel anytime soon.
  `],
  top10hof: [`Among the 15000+ shots of 2023, the community reacted and
  voted for their favorites to earn their esteemed place within the
  Hall of Framed, Unsurprisingly Cyberpunk once again claims the
  top spot this year, through sheer volume alone these dystopian vistas and
  neon-soaked portraits have claimed the title as the game with
  the highest number of shots entering the HOF this year.
  And to mirror the same pattern of the Share Your Shot trends,
  so too has Hogwarts snuck in at second place with its mystical
  forests spellbinding surroundings. Perhaps the most surprising
  change this year is that the psychological thriller Alan Wake 2,
  a late release into the year no less, has managed to bag third place with an
  impressive 81 entries into the HOF in the space of only
  two months since it was released.
  `],
  busysys: [`February 3rd 2023 was by far one of the busiest days for
  overall shots posted, which is slightly unusual given nothing released on this day.
  For some reason the collective creative mind of the community had instead
  come together to launch a barrage of shots all at once, with the Dead Space Remake
  taking front and center among the flurry of submissions.
  Member’s were also exploring the neon lights of Need For Speed,
  Ghost of Tsushima’s rolling grass hills, and the warzones of Battlefield 5.
  Perhaps the most unusual entry on this day was a collection of Garry’s Mod shots
  in which member SammirLim explored a surrealist take on the popular sandbox title. 
  `],
  busyhof: [`The HOF is a fickle beast, deciding on a whim who to elevate and
  who gets left within the chambers of the Share Your Shot channel.
  Almost as if in response to the number of shots coming in on February 3rd 2023,
  the Hall of Framed decided to honor its highest number of people in a single day
  with a shocking 36 shots finding their place in the gallery. From the
  high octane driving scenes of Need for Speed & Forza 5, to the unrelenting horrors
  in space with Alien: Isolation & Dead Space, this day saw a wide variety of titles
  sneaking into the hall to take their place.
  `],
}


const Home = () => {
  return WrapYear(year, flavourText);
};

export default Home;
