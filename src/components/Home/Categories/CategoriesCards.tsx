import {  useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./categoriescards.css";
import { facilitiesData } from "../../../pages/public/Home/data";

export default function CategoriesCards() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = (offset: number) => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft += offset; // Adjust the value as needed
    }
  };

  return (
    <div className="categories-container noselect">
      <div className="description">
        <h1>Facilities Available at MIT</h1>
        <p>
          Here are some of the facilities that we provide to our students to
          help them grow and learn. We have a lot of facilities that we provide.
        </p>
      </div>
      <div className="categories-cards-container">
        <button className="scroll-button" onClick={() => handleScroll(-300)}>
          <BiChevronLeft />
        </button>
        <div className="categories-wrapper" ref={wrapperRef}>
          {facilitiesData.map((data, index: number) => (
            <div key={index} className="card">
              <img src={data.img} />
              <div className="content">
                <h1>{data.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button" onClick={() => handleScroll(300)}>
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
}
