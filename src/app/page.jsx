"use client";

import TopicsList from "../../components/TopicsList";
import MotivationCarousel from "../../components/MotivationCarousel";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <>
    <MotivationCarousel/>
  <TopicsList/>
    </>
);
}
