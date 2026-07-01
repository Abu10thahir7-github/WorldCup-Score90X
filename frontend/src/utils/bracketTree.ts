import { BracketRounds } from "@/types/bracket";

export function buildBracketTree(rounds: BracketRounds) {
  return {
    left: {
      last32: rounds.roundOf32.slice(0, 8),

      last16: [
        rounds.roundOf16[0],
        rounds.roundOf16[1],
        rounds.roundOf16[2],
        rounds.roundOf16[3],
      ],

      quarter: [
        rounds.quarterFinals[0],
        rounds.quarterFinals[1],
      ],

      semi: [
        rounds.semiFinals[0],
      ],
    },

    right: {
      last32: rounds.roundOf32.slice(8),

      last16: [
        rounds.roundOf16[4],
        rounds.roundOf16[5],
        rounds.roundOf16[6],
        rounds.roundOf16[7],
      ],

      quarter: [
        rounds.quarterFinals[2],
        rounds.quarterFinals[3],
      ],

      semi: [
        rounds.semiFinals[1],
      ],
    },

    final: rounds.final[0],

    thirdPlace: rounds.thirdPlace[0],
  };
}