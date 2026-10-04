import React from 'react'
import useWindowStore from '../store/window'
import { WindowControls } from '../components';
import WindowWrapper from '../hoc/WindowWrapper';

    // Helper for consistent layout structure even in empty/loading states
    const Layout = ({ title, children }) => (
        <div className="flex flex-col h-full w-full bg-[var(--surface)]">
            {/* Header: Fixed height, stays at top */}
            <div id="window-header" className="flex-none">
                <WindowControls target="txtfile" />
                <h2>{title}</h2>
            </div>
            
            {/* Content: Fills remaining space, scrolls if needed */}
            <div className="flex-1 overflow-y-auto scrollbar-thin">
                {children}
            </div>
        </div>
    );


const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    // Empty State
    if (!data) {
        return (
            <Layout title="Untitled.txt">
                <div className="flex h-full items-center justify-center text-gray-500 opacity-50">
                    <p>No document loaded</p>
                </div>
            </Layout>
        );
    }

    const { name, image, subtitle, description } = data;

    return (
        <Layout title={name}>
            <div className="p-6 space-y-6">
                {image && (
                    <div className="w-full">
                        <img 
                            src={image} 
                            alt={name} 
                            className="w-full h-auto rounded-lg border border-white/10 shadow-md" 
                        />
                    </div>
                )}

                {subtitle && (
                    <h3 className="text-xl font-semibold text-[var(--text)]">{subtitle}</h3>
                )}

                {Array.isArray(description) && description.length > 0 && (
                    <div className="space-y-4 leading-relaxed text-[var(--muted)] font-georama">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                )}
                
                {/* Visual footer spacer */}
                <div className="h-4"></div>
            </div>
        </Layout>
    );
}

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
