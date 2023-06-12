import React from 'react';
import { FaArrowRight, FaGuitar } from 'react-icons/fa';
import { GiDrum, GiFlute, GiGrandPiano, GiSaxophone, GiTrumpet, GiViolin, GiXylophone } from 'react-icons/gi'
const ClassesList = () => {
    return (
        <div className='my-16 '>
            <div className='space-y-10'>
                <div className='flex items-center justify-evenly'>
                    <h1 className='text-3xl font-bold font-serif'>Our class, is where your passions <br /> come into play every day.</h1>
                    <div className='flex items-center border-black border-[1px] px-8 py-4 hover:bg-sky-400 bg-orange-200 text-black gap-2 text-2xl'>
                        <button>See All Class </button>
                        <FaArrowRight></FaArrowRight>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-12  lg:grid-cols-4'>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <FaGuitar ></FaGuitar>
                                <h2>Guitar Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                Fingers dance on strings, crafting melodies untold, as the soul of music unfolds.
                            </p>
                        </div>
                    </div>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <GiGrandPiano ></GiGrandPiano>
                                <h2>Piano Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                Ivory keys ignite a symphonic blaze, painting emotions in harmonic maze.
                            </p>
                        </div>
                    </div>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <GiViolin ></GiViolin>
                                <h2>Violin Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                With a delicate touch, the bow weaves a tale, evoking passion, sorrow, and the windswept trail.


                            </p>
                        </div>
                    </div>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <GiFlute ></GiFlute>
                                <h2>Flute Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                Gentle whispers carried on the air, melodies enchanting, dreams beyond compare.
                            </p>
                        </div>
                    </div>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <GiDrum ></GiDrum>
                                <h2>Drum Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                Beats thunder and pound, commanding the crowd, rhythmic pulse, alive and proud.
                            </p>
                        </div>
                    </div>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <GiTrumpet ></GiTrumpet>
                                <h2>Trumpet Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                Golden brass, a voice bold and clear, piercing the air, demanding ears to hear.
                            </p>
                        </div>
                    </div>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <GiSaxophone ></GiSaxophone>
                                <h2>Saxophone Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                Smooth and sultry, notes sway and bend, the saxophone's allure, a musical blend.
                            </p>
                        </div>
                    </div>
                    <div className='hover:bg-sky-300 px-5 rounded-lg py-5'>
                        <div className='space-y-3'>
                            <div className='flex text-2xl font-mono gap-3'>
                                <GiXylophone></GiXylophone>
                                <h2>Xylophone Class</h2>
                            </div>
                            <hr className=' border-3 border-black' />
                            <p className=' font-semibold'>
                                Wooden bars sing in vibrant array, percussive melodies, a playful display.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesList;