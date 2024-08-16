import Project from "./Project";

function Portfolio() {
  return (
      <div className='portfolio text-white py-20 text-center'>
          <h2 className='text-3xl'>Portfolio</h2>
          <div className='grid grid-cols-3 mt-5 gap-10'>
              <Project projectName='Duels'>
                  <p className="mt-5">A Minecraft plugin that showcases a deep understanding of Object-Oriented Principles.
                     This plugin adds a Dueling system with a leaderboard system and database support.</p>
                  <p className='mt-2'>
                      <a href='https://github.com/Dartanboy/Duels' className='bg-teal-300 rounded-lg py-1 px-2 text-black font-medium'>GitHub</a>
                      <a href='https://www.spigotmc.org/resources/duels.44820/' className='bg-teal-300 rounded-lg py-1 px-2 text-black font-medium ml-1'>Spigot</a>
                  </p>
              </Project>
              <Project projectName='Sorceror Survival'>
                  <p className="mt-5">A 2D Survival game where you fight off monsters using magical abilities gained throughout the game.
                     This project demonstrates the ability to apply skills in new environments.</p>
                  <p className='mt-2'>
                      <a href='https://www.austindartgames.com/sorceror-survival.html' className='bg-teal-300 rounded-lg py-1 px-2 text-black font-medium'>AustinDartGames</a>
                  </p>
              </Project>
              <Project projectName='NordicRPG'>
                  <p className="mt-5">A powerful RPG plugin that brings mechanics from a popular RPG video game to Minecraft.
                     This project illustrates an understanding of the SOLID design principles.</p>
                  <p className='mt-2'>
                      <a href='https://www.spigotmc.org/resources/nordicrpg.29879/' className='bg-teal-300 rounded-lg py-1 px-2 text-black font-medium ml-1'>Spigot</a>
                  </p>
              </Project>
          </div>
      </div>
  );
}

export default Portfolio;