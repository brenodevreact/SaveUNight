import Image from "next/image";
import "./filter.css";
import drama from "../../assets/avengers.jpg";

const Filter = () => {
  return (
    <div className="filter-div">
      <ul>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>FILME</span>
        </li>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>DRAMA</span>
        </li>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>DRAMA</span>
        </li>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>DRAMA</span>
        </li>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>DRAMA</span>
        </li>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>DRAMA</span>
        </li>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>DRAMA</span>
        </li>
        <li className="title3">
          <Image src={drama} alt="Drama" />
          <span>DRAMA</span>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
