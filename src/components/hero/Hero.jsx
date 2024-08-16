
function Hero() {
  return (
      <div className='hero py-12'>
          <div className='text-center'>
              <h2 className='text-4xl text-gray-200 font-medium'>Austin Dart</h2>
              <h3 className='text-xl mt-2 text-gray-200'>Software Developer</h3>
          </div>
          <div className='flex justify-center mt-5'>
            <img src='./me.png' alt='me' className='w-[192px] rounded-[100%] border border-black border-2' />
          </div>
      </div>
  );
}

export default Hero;