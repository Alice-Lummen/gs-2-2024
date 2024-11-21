import Cabecalho from "./components/Cabecalho";
import ConhecaNos from "./components/ConhecaNos";
import ConhecaPlaca from "./components/ConhecaPlaca";
import OpcoesFuncoes from "./components/OpcoesFuncoes";


export default function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <OpcoesFuncoes />
        <ConhecaPlaca/>
        <ConhecaNos/>
        
      </main>
    </>
  );
}
