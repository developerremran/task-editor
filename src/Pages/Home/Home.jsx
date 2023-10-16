import { useState } from 'react';
import { LuPencilLine } from 'react-icons/lu';
import { TbWorld } from 'react-icons/tb';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineReload, AiOutlinePlus } from 'react-icons/ai';
import { Slider } from '@mui/material';

const Home = () => {

    const [open, isOpen] = useState();
    const [fontSize, setFontSize] = useState({
        fontSizes: 0,
        lineHeight: 0,
        letterSpacing: 0,
        WordSpacing: 0,
    });
    const changeFontSize = (name, value) => {
        // console.log(name, value);
        setFontSize(prevState => ({ ...prevState, [name]: value }));
    };

    // multiple data set here 
    const clearFontSize = () => {
        setFontSize({
            fontSizes: 0,
            lineHeight: 0,
            letterSpacing: 0,
            WordSpacing: 0,
        });
    };

    return (
        <div>
            <div className='my-20'>
                {/* full box  */}
                <div className='md:w-[600px] w-[500px] bg-[#EDF2F7] p-10 border-2 mx-auto mt-[90px] h-[800px]'>
                    <div className='flex justify-between items-center'>
                        <p className='text-md font-semibold'>Typography</p>
                        <span className='flex items-center'>
                            <span className='border p-2'>
                                <TbWorld className='text-xl'></TbWorld>
                            </span>
                            <span className='border p-2'>
                                <LuPencilLine onClick={() => isOpen(!open)} className='text-xl '></LuPencilLine>
                            </span>
                        </span>
                    </div>
                    <div>
                        {/* condition to make popup  */}
                        {open ? (
                            <div className='md:w-[500px] w-[400px] bg-white border-2 my-5' style={{
                                boxShadow: '0px 0.8px 1.9px rgba(0, 0, 0, 0.027), ' +
                                    '0px 1.9px 4.3px rgba(0, 0, 0, 0.039), ' +
                                    '0px 3.5px 7.7px rgba(0, 0, 0, 0.049), ' +
                                    '0px 5.8px 12.8px rgba(0, 0, 0, 0.057), ' +
                                    '0px 9.5px 21.2px rgba(0, 0, 0, 0.066), ' +
                                    '0px 16.6px 37px rgba(0, 0, 0, 0.077), ' +
                                    '0px 36px 80px rgba(0, 0, 0, 0.09)'
                            }}>
                                <div className='flex justify-between items-center bg-white shadow-md p-2 w-full'>
                                    {/* popup heading  */}
                                    <p className='text-sm font-semibold'>Typography</p>
                                    <span className='flex gap-2 items-center'>
                                        <span className='shadow-lg p-1'>
                                            <AiOutlineReload onClick={clearFontSize} className='text-xl'></AiOutlineReload>
                                        </span>
                                        <span className='shadow-lg p-1'>
                                            <AiOutlinePlus onClick={() => console.log('This is an add button')} className='text-xl'></AiOutlinePlus>
                                        </span>
                                    </span>
                                </div>
                                <div className='px-5'>
                                    {/* font family with name  */}
                                    <div className='flex justify-between items-center my-4'>
                                        <p>Family</p>
                                        <span>
                                            <select className='border px-5'>
                                                <option>Roboto</option>
                                                <option>Abadi</option>
                                                <option>Albertus Bold</option>
                                                <option>Bookman Old</option>
                                                <option>Boulder</option>
                                                <option>Calisto MT</option>
                                                <option>MS LineDraw</option>
                                                <option>Courier</option>
                                            </select>
                                        </span>
                                    </div>
                                    {/* font size with range  */}
                                    <div>
                                        <div className="flex justify-between items-center my-2">
                                            <span className="flex items-center gap-4">
                                                <p>Size</p>
                                                <RiComputerLine></RiComputerLine>
                                            </span>
                                            <p>
                                                <select className=" px-1 text-sm">
                                                    <option>px</option>
                                                    <option>em</option>
                                                </select>
                                            </p>
                                        </div>
                                        <span className="flex justify-between items-center my-4">
                                            <span className="w-[80%]">
                                                <Slider
                                                    size="small"
                                                    defaultValue={fontSize.fontSizes}
                                                    aria-label="Small"
                                                    onChange={(e, value) =>
                                                        changeFontSize("fontSizes", value)
                                                    }
                                                />
                                            </span>
                                            <span className='border p-2'>{fontSize.fontSizes}</span>
                                        </span>
                                    </div>
                                    {/* end */}
                                    {/* font weight  */}
                                    <div className='flex justify-between items-center my-4'>
                                        <p>Weight</p>
                                        <span>
                                            <select className='border px-5 w-[180px]'>
                                                <option>900 (extra bold)</option>
                                                <option>800 </option>
                                                <option>700 </option>
                                                <option>600 (Semibold)</option>
                                                <option>500</option>
                                                <option>400</option>

                                            </select>
                                        </span>
                                    </div>
                                    {/* font family type  */}
                                    <div className='flex justify-between items-center my-4 '>
                                        <p>Transform</p>
                                        <span>
                                            <select className='border px-5 w-[180px]'>
                                                <option>Default</option>
                                                <option>UPPERCASE</option>
                                                <option>saml case</option>
                                            </select>
                                        </span>
                                    </div>
                                    {/* font style  */}
                                    <div className='flex justify-between items-center my-4 '>
                                        <p>Style</p>
                                        <span>
                                            <select className='border px-5 w-[180px]'>
                                                <option>Default</option>
                                                <option>Normal</option>
                                                <option>Italic</option>
                                                <option>Oblic</option>
                                            </select>
                                        </span>
                                    </div>
                                    {/* font Decoration  */}
                                    <div className='flex justify-between items-center my-4 '>
                                        <p>Decoration</p>
                                        <span>
                                            <select className='border px-5 w-[180px]'>
                                                <option>Default</option>
                                                <option>None</option>
                                            </select>
                                        </span>
                                    </div>
                                    {/* Line  Height with range  */}
                                    <div>
                                        <div className="flex justify-between items-center my-2">
                                            <span className="flex items-center gap-4">
                                                <p>Line Height</p>
                                                <RiComputerLine></RiComputerLine>
                                            </span>
                                            <p>
                                                <select className="px-1 text-sm">
                                                    <option>px</option>
                                                    <option>em</option>
                                                </select>
                                            </p>
                                        </div>
                                        <span className="flex justify-between items-center my-1">
                                            <span className="w-[80%]">
                                                <Slider
                                                    size="small"
                                                    defaultValue={fontSize.lineHeight}
                                                    aria-label="Small"
                                                    onChange={(e, value) =>
                                                        changeFontSize("lineHeight", value)
                                                    }
                                                />
                                            </span>
                                            <span className='border p-2'>{fontSize.lineHeight}</span>
                                        </span>
                                    </div>
                                    {/* letter spacing with range  */}
                                    <div>
                                        <div className="flex justify-between items-center my-2">
                                            <span className="flex items-center gap-4">
                                                <p>letter Spacing</p>
                                                <RiComputerLine></RiComputerLine>
                                            </span>
                                            <p>
                                                <select className="px-1 text-sm">
                                                    <option>px</option>
                                                    <option>em</option>
                                                </select>
                                            </p>
                                        </div>
                                        <span className="flex justify-between items-center my-4">
                                            <span className="w-[80%]">
                                                <Slider
                                                    size="small"
                                                    defaultValue={fontSize.letterSpacing}
                                                    aria-label="Small"
                                                    onChange={(e, value) =>
                                                        changeFontSize("letterSpacing", value)
                                                    }
                                                />
                                            </span>
                                            <span className='border p-2'>{fontSize.letterSpacing}</span>
                                        </span>
                                    </div>
                                    {/* Word  spacing with range  */}
                                    <div>
                                        <div className="flex justify-between items-center my-2">
                                            <span className="flex items-center gap-4">
                                                <p>Word Spacing</p>
                                                <RiComputerLine></RiComputerLine>
                                            </span>
                                            <p>
                                                <select className="px-1 text-sm">
                                                    <option>px</option>
                                                    <option>em</option>
                                                </select>
                                            </p>
                                        </div>
                                        <span className="flex justify-between items-center my-1">
                                            <span className="w-[80%]">
                                                <Slider
                                                    size="small"
                                                    defaultValue={fontSize.WordSpacing}
                                                    aria-label="Small"
                                                    onChange={(e, value) =>
                                                        changeFontSize("WordSpacing", value)
                                                    }
                                                />
                                            </span>
                                            <span className='border p-2'>{fontSize.WordSpacing}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
