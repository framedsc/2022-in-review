import WrapYear from "./_year-data";

const year: number = 2022;

const flavourText = {
  intro: [`We wanted to take a moment to reflect on some of the most stunning
  virtual photography and video game screenshots that the Framed community has produced throughout 2022.`,
  `From breathtaking landscapes in open-world games to intense action shots in first-person shooters,
  our community has truly outdone itself in capturing the beauty and emotion of these digital worlds.
  Join us as we look back at some of the most memorable moments and incredible imagery of the past year.
  `],
  top10sys: [`As we wrap up 2022, it's time to take a look back at the most captivating shots of
  the year in Framed's Share Your Shot Discord channel. Unsurprisingly Cyberpunk 2077 dominated
  the top spot with an astounding 1518 shots making up 8.78% of the total shots posted throughout the year.
  Elden Ring’s impressive and illusive vistas saw some love this year with 1070 shots no doubt capturing
  equal parts frustration and wanderlust. The third spot represents the talent and detail often
  overlooked in most racing games, with Assetto Corse doing the genre proud at a humble 532 total shots posted.
  `],
  top10hof: [`Each shot submitted has a chance to make it to the Hall of Framed -
  our curated collection of shots voted for by the Framed community.
  We saw some familiar titles hold their position at the top, from Cyberpunk 2077’s neon cityscapes to
  the rolling plains of Red Dead Redemption 2. 2022 also saw a few newer titles breaking through to claim
  their spot in the top 10 games, like Elden Ring with 94 shots and Stray at 35 entries making it into the HOF.
  `],
  busysys: [`February 1st 2022 saw an impressive 89 total shots shared by the community into Share Your Shot,
  with God of War wrestling the top spot with 19 total shots posted in a single day.
  Staple titles like Red Dead Redemption 2 and Cyberpunk 2077 saw some regular attention too,
  with honorable mentions to car demolition sandbox game BeamNG.Drive seeing some love too.
  `],
  busyhof: [`It should come as no surprise that the busiest day for the Hall of Framed in 2022
  features some of our most familiar and favorite titles. Red Dead Redemption 2 etched out the top spot
  with four different shots gaining enough votes to break into the curated gallery,
  followed quickly by server-mainstay title Cyberpunk 2077.Perhaps the most unusual entry into this
  list however comes from Planet Zoo with community member Roman exploring some delightful animal
  portraits in the zoo tycoon title.
  `],
}

const Home = () => {
  return WrapYear(year, flavourText);
};

export default Home;
