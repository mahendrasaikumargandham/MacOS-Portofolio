import React from 'react'
import useWindowStore from '../store/window'
import { WindowControls } from '../components';
import WindowWrapper from '../hoc/WindowWrapper';

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if(!data) return (
        <div id="window-header">
            <WindowControls target="imgfile" />
            <h2>Untitled.png</h2>
        </div>
    );

    const { name, imageUrl } = data;

  return (
    <div className="flex flex-col h-full w-full">
        <div id="window-header" className="flex-none">
            <WindowControls target="imgfile" />
            <h2>{name}</h2>
        </div>

        <div className='p-5 bg-1e1e1e flex-1 overflow-y-auto flex items-center justify-center'>
            {imageUrl ? (
                <div className='w-full h-full flex items-center justify-center'>
                    <img 
                        src={imageUrl} 
                        alt={name} 
                        className='max-w-full max-h-full rounded object-contain' 
                    />
                </div>
            ) : (
                <p className="text-gray-400 italic">No image source found</p>
            )}
        </div>
    </div>
  )
}

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;