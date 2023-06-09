'use client';

import InvestimentCard from '@/components/InvestimentCard';
import InvestimentModalForm from '@/components/InvestimentModalForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Home() {
  const initialInvestiments = [
    {
      id: 1,
      name: 'Tesouro IPCA+ 2035',
      value: '200,00',
    },
    {
      id: 2,
      name: 'Tesouro IPCA+ 2045',
      value: '100,00',
    },
    {
      id: 3,
      name: 'Poupança',
      value: '500,00',
    },
  ];

  const [investiments, setInvestiments] = useState(initialInvestiments);

  return (
    <div className='container mx-auto lg:max-w-screen-lg'>
      <h1 className='text-center text-2xl my-12 font-bold'>Investimentos</h1>
      <InvestimentModalForm investiments={investiments} setInvestiments={setInvestiments} />
      <div className='investiments grid grid-cols-3 gap-3'>
        {investiments.map((investiment, index) => {
          return (
            <InvestimentCard
              key={index}
              investiment={investiment}
              name={investiment.name}
              value={investiment.value}
            />
          );
        })}
        {/* <InvestimentCard name={investiment[0].name} value={100} /> */}
        {/* <InvestimentCard name={investiment[1].name} value={200} /> */}
      </div>
    </div>
  );
}
