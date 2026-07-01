"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapMatch = mapMatch;
function mapMatch(match) {
    return {
        id: match.id,
        status: match.status,
        utcDate: match.utcDate,
        homeTeam: {
            id: match.homeTeam.id,
            name: match.homeTeam.name,
            crest: match.homeTeam.crest,
        },
        awayTeam: {
            id: match.awayTeam.id,
            name: match.awayTeam.name,
            crest: match.awayTeam.crest,
        },
        score: match.score,
    };
}
