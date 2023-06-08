import { Button, SearchBar } from "@components/atoms";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <section>
        <div className="bg-[url('https://beam-images.warnermediacdn.com/2023-05/quilt.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=2000')] min-h-[70vh] flex justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed">
          <div className="flex flex-col justify-center items-center text-center">
            <div>
              <h1 className="text-5xl md:text-9xl font-bold">PEOPL</h1>
              <p className="text-sm md:text-xl font-bold tracking-widest">
                MOVIES FOR THE PEOPLE
              </p>
            </div>
            <div className={`${pathname === "/" ? "w-fit" : "w-full"} mt-10`}>
              {pathname === "/" ? <Button /> : <SearchBar />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
