import { Button, SearchBar } from "@components/atoms";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="bg-[url('https://beam-images.warnermediacdn.com/2023-05/quilt.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=2000')] min-h-[70vh] flex justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed">
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <h1 className="text-9xl font-bold">PEOPL</h1>
              <p className="text-xl font-bold tracking-widest">
                MOVIES FOR THE PEOPLE
              </p>
            </div>
            <div className="w-full mt-10">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-stone-700 h-[20vh]">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-3xl text-center font-semibold leading-10">
            It's all here! Iconic series, award-winning
            <br />
            movies, fresh originals, and family favorites.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
