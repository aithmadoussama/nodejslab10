import React from "react";
import { NavLink } from "react-router-dom";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <section className="home-container">
      <h1>Tableau de bord</h1>

      <p>
        Cette plateforme permet de gérer efficacement vos tâches quotidiennes
        grâce aux fonctionnalités modernes de React et aux Hooks.
      </p>

      <div className="navigation-buttons">
        
      </div>

      <div className="tasks-section">
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;