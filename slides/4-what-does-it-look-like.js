import Heading from '../components/heading';

const WhatDoesItLookLike = () => (
  <>
    <main className="flex flex-col items-center pt-20">
      <Heading>What does it look like?</Heading>

      <div className="mt-20 flex justify-items-center">
        <div className="w-5/12 bg-gradient-to-tr from-blue-400 to-green-400 flex items-center justify-center">

          <div className="w-10/12 shadow-md rounded-lg p-4 bg-white">
            <img src="/wall.jpg" alt="Tommy" className="mx-auto rounded-full w-32" />
            <div className="font-mono mt-4">
              <h1 className="text-2xl">Tommy Palmer</h1>
              <p className="text-l">Turning code into food for Deliveroo</p>
              <ul>
                <li>
                  💻 -
                  {' '}
                  <a className="underline hover:text-yellow-700" href="https://tommyp.org">tommyp.org</a>
                </li>

                <li>
                  🐦 -
                  {' '}
                  <a className="underline hover:text-blue-500" href="https://twitter.com/tommypalm">tommypalm</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="w-auto">
          <img src="code1.png" alt="Profile card" />
        </div>
      </div>

    </main>
  </>
);

export default WhatDoesItLookLike;
