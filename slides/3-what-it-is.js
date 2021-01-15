import Heading from '../components/heading';

const Li = ({ children }) => (
  <li className="text-4xl mb-4">
    {children}
  </li>
);

const WhatItIs = () => (
  <>
    <main className="flex flex-col items-center pt-20">
      <Heading>What is Tailwind?</Heading>
      <div className="w-1/2 mt-20">
        <h2 className="text-4xl">
          Tailwind is
        </h2>
        <p className="text-2xl mt-2 italic">
          A collection of small utility components that you
          combine to build up the styles on your element.
        </p>
      </div>
    </main>
  </>
);

export default WhatItIs;
