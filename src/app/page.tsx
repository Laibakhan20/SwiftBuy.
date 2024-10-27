
import Hero from './components/hero';
import Newest from './components/Newest';


export const revalidate = 60;

export default function HomePage() {
 

  return (
    <div>
      
      <Hero />
      <Newest />

     
                
      
    </div>
  );
}

