import Heading from '../components/heading';

const Li = ({ children }) => (
  <li className="text-4xl mb-4">
    {children}
  </li>
);

const WhatItIsnt = () => (
  <>
    <main className="flex flex-col items-center pt-20">
      <Heading>What is Tailwind?</Heading>
      <div className="mt-20">
        <h2 className="text-4xl">
          Let's start by talking about what it
          {' '}
          <span className="italic">isn't</span>
        </h2>
        <ul className="mt-20 list-disc">
          <Li>
            It's not a design system
          </Li>
          <Li>It's not a component library</Li>
          <Li>It's not like Material UI or Bootstrap</Li>
        </ul>
      </div>
    </main>
  </>
);

export default WhatItIsnt;
