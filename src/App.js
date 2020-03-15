import React from 'react';
import Heading from "./components/Heading";
import HomeContent from "./components/home/HomeContent";
import NewsList from "./components/news/NewsList";
import Login from "./components/login/LoginForm";
import Layout from "./components/layout/Layout";
import './App.css';

function App() {
  return (
    <div className="App">
        <Layout>
        <Heading title="Heading.js" />
        <HomeContent> HomeContent.js: Whatever I write between these tags will render inside a div  </HomeContent>
        <NewsList />
        <Login />
        </Layout>
    </div>
  );
}

export default App;
