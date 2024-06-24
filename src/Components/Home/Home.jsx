import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  const { countries } = useSelector((state) => state.FlagsData);

  return (
    <>
      {countries.map((el) => {
        return (
          <>
            <NavLink to={`/${el.name.common}`}>
              <img src={el.flags.png} />
            </NavLink>
            <p>{el.name.common}</p>
          </>
        );
      })}
    </>
  );
};

export default Home;
