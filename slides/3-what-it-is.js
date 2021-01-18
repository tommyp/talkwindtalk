import Heading from '../components/heading';

const WhatItIs = () => (
  <>
    <main className="flex flex-col items-center pt-20">
      <Heading>What is Tailwind?</Heading>

      <div className="w-1/3 mt-20">
        <p className="text-4xl leading-10">
          Tailwind is a collection of small utility classes that you
          combine to build up the styles on your element.
        </p>
      </div>

    </main>
  </>
);

export default WhatItIs;
