import React from "react";
import ContactCard from "./ContactCard";

export default function Contacts() {
  return (
    <div className="contacts">
      <ContactCard
        name="Mrs. Annabelle"
        phone="0233-987-675"
        email="annabelle@gmail.com"
      />{" "}
      {/*datele astea le trimit ca props in ContactCard pentru ca eu le-am pus in componenta <ContactCard/> pe 
      cafe o import si astfel in fisierul/componenta ContactCard o sa le primesc ca props si le fol acolo*/}
      <ContactCard
        name="Mrs. Elle"
        phone="0233-987-675"
        email="ellem@gmail.com"
        // sau
        // contact={{
        //   name: "Mrs.Elle",
        //   phone: "0233-987-675",
        //   email: "ellem@gmail.com"
        // }}
      />
      <ContactCard
        name="Mr. Anna"
        phone="0333-987-675"
        email="anna.gmail.com"
      />
      <ContactCard
        name="Mr. Smith"
        phone="0230-988-675"
        email="smith12.gmail.com"
      />
    </div>
  );
}
