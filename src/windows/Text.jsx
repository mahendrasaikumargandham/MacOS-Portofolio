import React from 'react'
import useWindowStore from '../store/window'
import { WindowControls } from '../components';
import WindowWrapper from '../hoc/WindowWrapper';

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    // Safety check: if active but no data, showing nothing or a default state
    if(!data) return (
        <div id="window-header">
            <WindowControls target="txtfile" />
            <h2>Untitled.txt</h2>
        </div>
    );

    const { name, image, subtitle, description } = data;

  return (
    <div className="flex flex-col h-full w-full"> {/* Flex container for structure */}
        <div id="window-header" className="flex-none">
            <WindowControls target="txtfile" />
            <h2>{name}</h2>
        </div>

        {/* Added overflow-y-auto so you can scroll long text */}
        <div className='p-5 space-y-6 bg-1e1e1e flex-1 overflow-y-auto'>
            {image ? (
                <div className='w-full'>
                    <img src={image} alt={name} className='w-full h-auto rounded' />
                </div>
            ) : null}

            {subtitle ? <h3 className='text-lg font-semibold'>{subtitle}</h3> : null}

            {Array.isArray(description) && description.length > 0 ? (
                <div className='space-y-3 leading-relaxed text-base text-999-800'>
                    {description.map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
                </div>
            ) : null}
        </div>
    </div>
  )
}

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;