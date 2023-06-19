import InvestimentCard from '@/components/InvestimentCard';

export default function Home() {
  const investiments = [
    {
      name: 'Tesouro IPCA+ 2035',
    },
    {
      name: 'Tesouro IPCA+ 2045',
    },
  ];

  return (
    <div className="container mx-auto lg:max-w-screen-lg">
      <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
      <p className="text-right">
      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
        +
      </button>
      </p>
      <div className="investiments grid grid-cols-3 gap-3">
        {
          investiments.map( (investiment) => {
            return (<InvestimentCard investiment={investiment} name={investiment.name} value={investiment.value} />)
          })
        }
        {/* <InvestimentCard name={investiment[0].name} value={100} /> */}
        {/* <InvestimentCard name={investiment[1].name} value={200} /> */}
      </div>
    </div>
  );
}