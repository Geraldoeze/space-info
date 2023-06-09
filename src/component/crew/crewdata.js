import { specialist, specialistSm, pilotSm, engineSm, commandSm, pilot, command, engine } from '../../images/crew/imgCrew';

export const crewData = [
    {
        id: 1,
        image: command,
        imageSm: commandSm,
        role: 'commander',
        name: 'douglas hurley',
        content: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'

    },
    {
        id: 2,
        image: specialist,
        imageSm: specialistSm,
        role: 'mission specialist',
        name: 'Mark Shuttleworth',
        content: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'

    },
    {
        id: 3,
        image: pilot,
        imageSm: pilotSm,
        role: 'pilot',
        name: 'victor glover',
        content: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '

    },
    {
        id: 4,
        image: engine,
        imageSm: engineSm,
        role: 'flight engineer',
        name: 'Anousheh Ansari',
        content: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '

    }
]