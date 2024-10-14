import ExploreUs from "@/components/exploreUs/ExploreUs";
import HomeCarousel from "@/components/homeCarousel/HomeCarousel";
import JobSearch from "@/components/jobSearch/JobSearch";
import LogoClouds from "@/components/LogoClouds/LogoClouds";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import Products from "@/components/products/Products";
import SliderHome from "@/components/sliderHome/SliderHome";
import Support from "@/components/support/Support";
import WhatWeDo from "@/components/whatWedo/WhatWedo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <SliderHome/> */}
      <HomeCarousel/>
      <Products/>
      <ExploreUs/>
      <WhatWeDo/>
      <JobSearch/>
      <NewsLetter/>
      <Support/>
      <LogoClouds/>
    </div>
  );
}
