import logo from "@asset/img/logo_p.jpg";

export function Header() {
  return (
    <nav className="flex items-end bg-fundos-900 w-full h-[70px] shadow-lg">
      <div className="flex relative justify-end items-center w-full bg-fundos-800 rounded-t-lg p-4">
        <img
          src={logo}
          alt="Logo Paróquia Sagrada Família - Três Coroas"
          className="absolute left-5 bottom-2 h-[2.5rem] rounded-full"
        />

        <a href="/" className="transition-all hover:text-primary-500">
          voltar para o início
        </a>
      </div>
    </nav>
  );
}
