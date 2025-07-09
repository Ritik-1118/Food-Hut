import { useState, useEffect } from "react";
import Card from "../shared/card";
import { useAuth } from "../store/auth";
import SkeletonLayout from "../shared/SkeletonLayout";

const Recommended = () => {
  const { food } = useAuth();
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );

  // Defensive: recommendedFood is only valid if food is an array
  const recommendedFood = Array.isArray( food ) ? food.slice( 0, 4 ) : [];

  useEffect( () => {
    const timeout = setTimeout( () => {
      if ( !Array.isArray( food ) ) {
        setError( "Unable to load recommended foods." );
      }
      setLoading( false );
    }, 2000 );
    return () => clearTimeout( timeout );
  }, [ food ] );

  if (loading) return <SkeletonLayout type="list" />;

  return (
    <section className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
      <div className="container mx-auto py-[2vh]">
        <div className="text-2xl md:text-3xl font-bold text-center text-[#09596c] lg:text-4xl">
          Recommended <span className="text-[#d15b37]">Foods</span>
        </div>
        { error ? (
          <div className="text-center text-red-500 font-semibold py-8">{ error }</div>
        ) : recommendedFood.length === 0 ? (
          <div className="text-center text-[#0b7c90] font-semibold py-8">
            No recommended foods available at the moment. Please check back later!
          </div>
        ) : (
          <div className="py-6 flex flex-wrap gap-7 m-auto justify-center">
            <Card food={ recommendedFood } />
          </div>
        )}
      </div>
    </section>
  );
};

export default Recommended;
