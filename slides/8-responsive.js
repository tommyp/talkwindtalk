import Heading from '../components/heading';

const Responsive = () => (
  <>
    <main className="flex flex-col items-center pt-20">
      <Heading>Media queries</Heading>

      <div className="mt-20 w-full text-center">
        <p className="font-mono text-4xl">
          w-full flex
          {' '}
          <span className="text-green-400">md</span>
          :w-1/2
          {' '}
          <span className="text-green-400">lg</span>
          :w-1/3
          {' '}
          <span className="text-green-400">xl</span>
          :w-1/4
          {' '}
          <span className="text-green-400">lg</span>
          :flex-none
        </p>
      </div>

    </main>
  </>
);

export default Responsive;
