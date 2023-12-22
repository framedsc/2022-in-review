import WrapYear from "./_year-data";

const year: number = 2023;

const flavourText = {
  intro: [`We wanted to take a moment to reflect on some of the most
  stunning virtual photography and video game screenshots
  that the Framed community has produced throughout ${year}.`,
  `From breathtaking landscapes in open-world games to
  intense action shots in first-person shooters, our
  community has truly outdone itself in capturing the beauty
  and emotion of these digital worlds. Join us as we look
  back at some of the most memorable moments and incredible
  imagery of the past year.`],
  top10sys: [`As we wrap up ${year}, it's time to take a look back
  at the most captivating shots of the year in
  Framed's Share Your Shot Discord channel. From the
  snow-capped mountains of Skyrim to the neon-lit
  cityscapes of Cyberpunk 2077, these shots are the
  culmination of our community's creativity.`],
  top10hof: [`Each shot submitted has a chance to make it to the Hall
  of Framed - our curated collection of shots voted for by
  the Framed community. We saw some familiar titles hold
  their position at the top, as well as a few newer titles
  breaking through to claim their spot in the top 10 games
  making it into the Hall of Framed for ${year}.`],
  busysys: [`On our busiest day of the year, one day after the launch
  of the martial-arts title SIFU, our community posted the
  highest number of shots in a single day for the entire
  year. With a whopping 96 shots posted in a single day,
  the Framed community flooded the server with all manner
  of impressive shots. With punch-em-up title SIFU
  claiming the top spot at 13 shots at 13.54% of the
  day's shots, followed closely by God of War & No
  Man's Sky taking the second and third place slots
  respectively. The busiest day also saw some lesser shot
  titles make an appearance with Bloodborne, Twin Mirror,
  and Mosaic also making appearances.`],
  busyhof: [`It should come as no surprise that the busiest day for
  the Hall of Framed in ${year} features some of our most
  familiar and favorite titles. Red Dead Redemption 2
  etched out the top spot with four different shots
  gaining enough votes to break into the curated gallery,
  followed quickly by server-mainstay title Cyberpunk
  2077. Giant Squid & Annapurna Interactive's The
  Pathless makes a surprising entry as the third highest
  entry, showcasing the game's visuals from a whole
  new angle.`],
}


const Home = () => {
  return WrapYear(year, flavourText);
};

export default Home;
