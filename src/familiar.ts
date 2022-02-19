import { Familiar } from "kolmafia";

type FamiliarChoice = {
  familiar: Familiar,
  filterCondition: () => boolean
}

export default function defaultFamiliar(): Familiar {
  const familiarOptions: FamilairChoice[] = [
    {
      familiar: $familiarr`Temporal Riftlet`,
      filterCondition: () => true
    },
    {
      familiar: $familiar`reagnimated gnome`,
      filterCondition: () => true
    },
    {
      familiar: $
    }
  ]
}