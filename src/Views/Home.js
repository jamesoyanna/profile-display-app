import React from "react";
import Loader from "../components/Loader";
import ProfileCard from "../components/ProfileCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

function Home() {
    
  const url = `https://api.enye.tech/v1/challenge/records`;
  let profiles = useAxiosGet(url);

  let content = null;
  if (profiles.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">
          An error occoured.
        </div>
      </div>
    );
  }

  if (profiles.loading) {
    content = <Loader></Loader>;
  }
  
   if (profiles.data) {
     content = profiles.data.map((profile) => (
       <div key={profile.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
         <ProfileCard profile={profile} />
       </div>
     ));
   }


  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-3">Profiles</h1>
      <h3>
        Get All User Profiles{" "}
      </h3>
      <div className="wrapper">
        <FontAwesomeIcon icon={faSearch} size="2x" />
        <input
          type="text"
          className="FilterTextBox"
          placeholder="Filter by Name"
        />
      </div>

      <div className="md:flex flex-wrap md:-mx-3">{content}</div>
    </div>
  );
}

export default Home;
