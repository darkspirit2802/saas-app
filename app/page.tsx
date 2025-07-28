import CompanionCard from "@/components/companionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10);

  return (
    <div>
      <h1 className="ml-32">Popular Companions</h1>
      <section className="home-section  flex items-center mt-8 justify-center mb-8">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section flex items-center justify-center lg:ml-32 lg:w-7xl mb-16 ">
        <CompanionList
          title="Recently  sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />

        <CTA />
      </section>
    </div>
  );
};

export default Page;
