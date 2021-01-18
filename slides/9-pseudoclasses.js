import Heading from '../components/heading';

const Pseudo = () => (
  <>
    <main className="flex flex-col items-center pt-20">
      <Heading>Pseudo classes</Heading>

      <div className="mt-20 w-full text-center">
        <p className="font-mono text-4xl">
          border-blue-200
          {' '}
          <span className="text-green-400">hover</span>
          :border-green-200
          <br />
          {' '}
          bg-grey-50
          {' '}
          <span className="text-green-400">focus</span>
          :bg-grey-300
        </p>
      </div>

    </main>
  </>
);

export default Pseudo;
