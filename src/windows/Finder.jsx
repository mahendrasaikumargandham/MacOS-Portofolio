import React, { useState } from 'react'
import { WindowControls } from '../components'
import { Search } from 'lucide-react'
import WindowWrapper from '../hoc/WindowWrapper'
import { locations } from '../constants'
import useLocationStore from '../store/location'
import clsx from 'clsx'
import useWindowStore from '../store/window'

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();
    const [query, setQuery] = useState('');
    const items = (activeLocation?.children || []).filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    const navigate = (location) => {
        setQuery('');
        setActiveLocation(location);
    };

    const openItem = (item) => {
        if(item.fileType === "pdf") return openWindow("resume");
        if(item.kind === "folder") return navigate(item);
        if(["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    }

    const renderList = (name, items) => (
        <div className="mb-4">
            <h3 className="px-3 mb-1 text-xs font-medium text-gray-500">{name}</h3>
            <ul>
                {(items || []).map((item) => (
                    <li 
                        key={item.id} 
                        onClick={() => navigate(item)}
                        role="button" tabIndex={0} aria-current={item.id === activeLocation?.id ? 'page' : undefined}
                        onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigate(item); } }}
                        className={clsx(
                            'flex items-center gap-2 px-3 py-1 rounded cursor-pointer transition-colors',
                            item.id === activeLocation?.id ? 'bg-[#0A84FF] text-white' : 'hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-[var(--muted)]'
                        )}
                    >
                        <img src={item.icon} className='w-4 h-4 object-contain' alt={item.name} /> 
                        <p className={clsx('text-sm font-medium truncate', item.id === activeLocation?.id ? 'text-white' : '')}>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        // Changed to flex-col h-full to ensure proper height calculation
        <div className="flex flex-col h-full w-full">
            <div id="window-header" className="flex-none">
                <WindowControls target="finder" />
                <div className="flex-1 text-center font-bold text-[var(--muted)] text-xs">
                    {activeLocation?.name || 'Finder'}
                </div>
                <label className="finder-search">
                    <Search size={14} aria-hidden="true" />
                    <input type="search" aria-label="Search this folder" placeholder="Search" value={query} onChange={(event) => setQuery(event.target.value)} />
                </label>
            </div>

            {/* Changed h-full to flex-1 min-h-0. This forces the div to take only remaining space and scroll internally. */}
            <div className='finder-body flex-1 min-h-0 bg-[var(--surface)] flex text-[var(--text)]'>
                <div className='sidebar w-48 bg-[var(--sidebar)] backdrop-blur-xl border-r border-black/50 flex flex-col p-3 pt-4 overflow-y-auto h-full'>
                    {/* 1. Favorites (Main Folders) */}
                    {renderList("Favorites", Object.values(locations))}
                    
                    {/* 3. Experience */}
                    {locations.experience?.children && renderList("Experience", locations.experience.children)}
                    
                    {/* 2. Work Projects */}
                    {locations.work?.children && renderList("Work", locations.work.children)}

                    {locations.certifications?.children && renderList("Certifications", locations.certifications.children)}
                </div>

                <ul className='content flex-1 p-8 grid grid-cols-4 gap-4 content-start overflow-y-auto h-full'>
                    {items.map((item) => (
                        <li 
                            key={item.id} 
                            className={clsx(
                                "flex flex-col items-center gap-2 group cursor-pointer",
                                item.position ? "absolute " + item.position : "relative"
                            )}
                            onClick={() => openItem(item)}
                            role="button" tabIndex={0}
                            onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openItem(item); } }}
                        >
                            <img src={item.icon} alt={item.name} className='w-14 h-14 object-contain drop-shadow-md' />
                            <p className='text-sm text-center font-medium w-32 break-words leading-tight px-1 rounded bg-transparent'>
                                {item.name}
                            </p>
                        </li>
                    ))}
                    {items.length === 0 && <li className="finder-empty">{query ? 'No matching files' : 'This folder is empty'}</li>}
                </ul>
            </div>
            <footer className="window-status"><span>{activeLocation?.name || 'Finder'}</span><span>{items.length} {items.length === 1 ? 'item' : 'items'}</span></footer>
        </div>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
