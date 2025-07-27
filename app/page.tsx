import CompanionCard from "@/components/companionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="ml-32">Popular Companions</h1>
      <section className="home-section  flex items-center mt-8 justify-center mb-8">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neutral Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="derivative and integral"
          subject="Math"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Language"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section flex items-center justify-center lg:ml-32 lg:w-7xl mb-16 ">
        <CompanionList
          title="Recently  sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />

        <CTA />
      </section>
    </div>
  );
};

export default Page;
