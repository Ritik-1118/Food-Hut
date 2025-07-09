import { useState, useEffect } from "react";
import Recommended from "../../components/recommandFood";
import Special from "../../components/special";
import Hero from "../../components/Hero";
import SkeletonLayout from "../../shared/SkeletonLayout";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Clean up the timer on component unmount or when data is fetched
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <SkeletonLayout type="list" />;

  return (
    <section>
        <Hero />
        <Recommended />
        <Special />
    </section>
  );
};

export default Home;
