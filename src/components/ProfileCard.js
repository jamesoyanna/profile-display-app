
import React from "react";
import '../App.css';
function ProfileCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <div className="p-3">
        <div className="p-3">
          <h4 className="font-bold text-xl mb-3">
            <div className="UserName">{props.profile.FirstName}</div>
            <div>{props.profile.LastName}</div>
          </h4>
        </div>

        <div className="font-bold mb-3">
          <div>{props.profile.Gender}</div>
        </div>

        <div>{props.profile.Latitude}</div>
        <div>{props.profile.Longitude}</div>
        <div>{props.profile.CreditCardNumber}</div>
        <div>{props.profile.CreditCardType}</div>
        <div className="UserEmail">{props.profile.Email}</div>
        <div>{props.profile.DomainName}</div>
        <div>{props.profile.PhoneNumber}</div>
        <div>{props.profile.MacAddress}</div>
        <div>{props.profile.URL}</div>
        <div>{props.profile.UserName}</div>
        <div>{props.profile.LastLogin}</div>
        <div>{props.profile.PaymentMethod}</div>
      </div>
    </div>
  );
}

export default ProfileCard;



