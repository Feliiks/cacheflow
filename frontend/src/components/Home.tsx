import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
// @ts-ignore
import HeaderImage from "../../public/cacheFlowLogo.png";

const Home = () => {
  const [companies, setCompanies] = useState("");
  // @ts-ignore
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const url = `http://localhost:3000/platform/userCompaniesModels/${user.uid}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setCompanies(json.companies);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        <div className="image-container layrd">
          <img src={HeaderImage} alt="logo" className="header-image"></img>
        </div>
        Welcome <br />
        {user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
