"use client";
import GreetingBlock from "@/components/GreetingBlock/GreetingBlock";
import JourneyDetails from "@/components/JourneyDetails/JourneyDetails";
import WeekSelector from "@/components/WeekSelector/WeekSelector";
//import { useSelectedWeek } from "@/lib/store/selectedWeek";
import { useMemo, useState } from "react";

export function ClientJourney({ currentWeek }: { currentWeek: number }) {
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);

  //const { setActiveWeek } = useSelectedWeek();

  const pregnacyWeeks = useMemo(() => {
    const weekNumbers: number[] = [];
    for (let i = 1; i <= 36; i++) {
      weekNumbers.push(i);
    }
    return weekNumbers;
  }, []);

  const handleClickAndStateUpdate = (choosedWeek: number) => {
    setSelectedWeek(choosedWeek);
  };

  //setActiveWeek(currentWeek);

  return (
    <div>
      <GreetingBlock />
      <WeekSelector
        weeks={pregnacyWeeks}
        onButtonClick={handleClickAndStateUpdate}
      />
      <JourneyDetails />
    </div>
  );
}
