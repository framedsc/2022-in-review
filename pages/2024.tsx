import WrapYear from "./_year-data";

const year: number = 2024;

const flavourText = {
  intro: [``],
  top10sys: [``],
  top10hof: [``],
  busysys: [``],
  busyhof: [``],
}


const Home = () => {
  return WrapYear(year, flavourText);
};

export default Home;
