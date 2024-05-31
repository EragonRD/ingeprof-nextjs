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
    
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="name">Objet:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-400 p-2 mb-4 w-full"
        />
        <label htmlFor="email">Adresse e-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 p-2 mb-4 w-full"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-400 p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
