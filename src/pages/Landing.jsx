import React from "react";

const Landing = () => {
 //Se tienen algunos problemas al momento de colocar colores no se ven reflejados en la app
 //por ende aún no se encuentra terminada la landing page

  return(
  <>
  
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute rgb-150-100-50 inset-0 bg-gradient-to-r  bg-gray-100 hover-blue to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-red shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div class="flex items-end justify-center text-5x1 font-extrabold size">
          Welcome to Jhoce team´s Proyect
        </div>
        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>Un proyecto de MinTic para desarrollo de fin de curso, podemos encontrar:</p>
            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Uso de GraphQl.
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Uso de React js.
                  
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Y muchas cosas más!
                </p>
              </li>
            </ul>
            <p>
              No tengo idea de qué colocar aquí pero estaría bien colocar un objetivo xd
            </p>
          </div>
          <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            
            <p>
              <a href="./Home" class="flex justify-center font-bold hover:text-red-700"> ►►►►ENTRAR►►►►</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  

  
    

  
  
 </>
);
};

export default Landing;
