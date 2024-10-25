// app/components/CookieConsent.js
"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentPopup = () => {
  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      buttonText="Accept"
      declineButtonText="Decline"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px", borderRadius: "4px" }}
      declineButtonStyle={{
        color: "#ffffff",
        fontSize: "13px",
        borderRadius: "4px",
      }}
      expires={150}
      onAccept={() => {
        // console.log("Cookies accepted!");
      }}
      onDecline={() => {
        // console.log("Cookies declined!");
      }}
    >
      We use cookies to improve your experience on our site. By using our site,
      you accept our{" "}
      <a href="/cookie-policy" className="underline">
        cookie policy.
      </a>
    </CookieConsent>
  );
};

export default CookieConsentPopup;
