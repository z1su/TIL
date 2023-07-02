import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
