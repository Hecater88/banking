"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} end={amount} decimal="," suffix="€" />
    </div>
  );
};

export default AnimatedCounter;
