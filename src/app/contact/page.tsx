"use client";
import Image from "next/image";
import Navbar  from "../components/navbar"
import Carousel from "../components/caroussel";


import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Traitez les données du formulaire ici
    console.log({ name, email, message });
  };

  return (

    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <a>page de contact</a>

      <div className="Form">
  <form action="/send-data-here" method="post">
  <label for="first">Nom:</label>
  <input type="text" id="first" name="first" />
  <label for="last">Prenom:</label>
  <input type="text" id="last" name="last" />
  <div>
    <button type="submit">envoyer</button>
  </div>
  
  
</form>
</div>
      <div className="logo">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          
        />
      </div>


    </main>
  );
};

export default ContactForm;
