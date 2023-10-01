import "./home.css";

import Banner from "../../../components/Home/Banner/Banner";
import NumberCount from "../../../components/general/NumberCount/NumberCount";
import HorizontalCards from "../../../components/general/HorizontalCards/HorizontalCards";
// import PlacementPartners from "../../../components/general/PlacementPartners/PlacementPartners";
import StaggeredCards from "../../../components/general/StaggeredCards/StaggeredCards";

import { departmentsData, numberCountsData, numberCountsData2 } from "./data";
import Dean from "../../../components/general/Dean/Dean";
import MissionVision from "../../../components/general/ParallaxCards/MissionVision";
import CategoriesCards from "../../../components/Home/Categories/CategoriesCards";

export default function Home() {
  return (
    <>
      <Banner />
      <NumberCount data={numberCountsData} />
      <HorizontalCards data={departmentsData} />
      <NumberCount data={numberCountsData2} />
      <StaggeredCards />
      <Dean />
      <MissionVision />
      <CategoriesCards />
      {/* <PlacementPartners /> */}
    </>
  );
}
