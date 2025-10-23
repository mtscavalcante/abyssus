import { LogoWhite } from "../components/svgs/LogoWhite";
import { Link } from "react-router";

const INFOS: string[] = [
  "são vinte enigmas que vão aumentando gradualmente em dificuldade.",
  "a resposta de cada enigma é uma palavra contendo somente letras e/ou números.",
  "as respostas não contêm espaços ou símbolos (como: '!', '@', '#', etc.).",
  "as respostas não têm distinção entre letras maiúsculas e minúsculas. por exemplo: 'S4V3M3', 's4v3m3', e 'S4v3m3' são todas respostas corretas para um mesmo enigma.",
  "sinta-se livre para fazer pesquisas na internet e investigar junto com pessoas.",
];

export function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-black pt-8 pb-16 text-white">
      <div className="flex flex-col items-center gap-2">
        <LogoWhite className="size-48" />
        <h1 className="text-4xl font-semibold">ABYSSUS</h1>
      </div>
      <div className="flex flex-col items-center gap-2 text-xl md:text-2xl">
        <h2>20 enigmas. 20 desafios.</h2>
        <p className="text-red-600">você é capaz?</p>
      </div>
      <div className="flex w-80 flex-col items-center gap-4 border border-white p-4 md:w-120 md:p-6">
        <h2 className="text-2xl font-semibold">informações</h2>
        <ol className="flex list-inside list-decimal flex-col gap-4 md:text-lg">
          {INFOS.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ol>
      </div>
      <div>
        <Link
          to="/levels"
          className="border border-white px-6 py-3 text-lg hover:bg-neutral-900"
        >
          começar
        </Link>
      </div>
    </div>
  );
}
