import Heading from '../components/heading';

const WhatDoesItLookLike2 = () => (
  <>
    <main className="flex flex-col items-center pt-20">
      <Heading>What does it look like?</Heading>

      <div className="mt-20 flex">
        <div className="w-5/12 bg-gradient-to-tr from-blue-400 to-green-400 flex items-center justify-center">

          <div className="w-96 shadow-lg rounded-lg flex bg-white overflow-hidden">
            <img src="/wall.jpg" alt="Tommy" className="object-cover w-32" />
            <div className="font-mono pl-4">
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

        <div className="w-7/12">
          <img src="code2.png" alt="Profile card" />
        </div>
      </div>

    </main>
  </>
);

export default WhatDoesItLookLike2;
