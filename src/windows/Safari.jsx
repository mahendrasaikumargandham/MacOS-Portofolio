import React from 'react'
import { WindowControls } from '../components'
import WindowWrapper from '../hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import { blogPosts } from '../constants'

const Safari = () => {
  return (
    <div className="flex flex-col h-full w-full">
        {/* Header Section: Fixed at the top */}
        <div id="window-header" className="flex-none">
            <WindowControls target="safari" />
            <PanelLeft className='ml-10 icon' />

            <div className='flex items-center gap-1 ml-5'>
                <ChevronLeft className='icon' />
                <ChevronRight className='icon' />
            </div>

            <div className='flex-1 flex-center gap-3'>
                <ShieldHalf className='icon' />
                <div className='search'>
                    <Search className='icon' />
                    <input
                        type="text"
                        placeholder='Search or enter website name'
                        className='flex-1'
                    />
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <Share className="icon" />
                <Plus className="icon" />
                <Copy className="icon" />
            </div>
        </div>

        {/* Content Section: Fills remaining space and scrolls */}
        <div className='blog flex-1 overflow-y-auto'>
            <h2>My Articles</h2>
            <div className='space-y-5'>
                {blogPosts.map(({ id, image, title, date, link }) => (
                    <div key={id} className='blog-post'>
                        <div className='col-span-2'>
                            <img src={image} alt={title} className="w-full h-auto object-cover rounded" />
                        </div>

                        <div className='content'>
                            <p>{date}</p>
                            <h3>{title}</h3>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                Check out the full post <MoveRight className='icon-hover' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>  
    </div>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;