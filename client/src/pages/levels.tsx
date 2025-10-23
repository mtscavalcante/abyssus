import { ArrowLeft } from "../components/heroicons/arrow-left";
import { LockClosed } from "../components/heroicons/lock-closed";

import { Link } from "react-router";

export function Levels() {
  const generateLevels = () => {
    const levels = [];

    for (let i = 0; i < 20; i++) {
      const levelId = i + 1;
      const isUnlocked = i < 15;

      const className = isUnlocked
        ? "grid h-16 md:h-20 place-items-center border border-white hover:bg-neutral-900"
        : "grid h-16 md:h-20 place-items-center border border-neutral-800 text-neutral-800";

      levels.push(
        <Link key={levelId} to={`/levels/${levelId}`} className={className}>
          {isUnlocked ? levelId : <LockClosed />}
        </Link>,
      );
    }

    return levels;
  };

  const levels = generateLevels();

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-black py-20 text-white md:justify-center md:py-8">
      <div className="flex w-80 flex-col gap-8 md:w-96">
        <Link
          to="/"
          className="flex w-fit items-center gap-2 border border-white px-3 py-1.5 hover:bg-neutral-900"
        >
          <ArrowLeft />
          <p>voltar</p>
        </Link>
        <div>
          <h1 className="text-4xl font-semibold">níveis</h1>
        </div>
        <div className="grid grid-cols-4 gap-2.5 border border-white p-2.5">
          {levels.map((level, index) => (
            <div key={index}>{level}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
