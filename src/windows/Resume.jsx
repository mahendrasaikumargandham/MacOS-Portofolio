import React, { useState, useEffect } from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { WindowControls } from '../components';
import { Download } from 'lucide-react';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';

// Fix worker setup for Vite
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  return (
    <div className="flex flex-col h-full w-full">
        <div id="window-header" className="flex-none">
            <WindowControls target="resume" />
            <h2>Resume.pdf</h2>

            <a 
                href="/files/resume.pdf" // Fixed path to absolute
                download
                className='cursor-pointer hover:bg-gray-200 p-1 rounded'
                title="Download Resume"
            >
                <Download className='icon w-4 h-4' />
            </a>
        </div>

        {/* Scrollable Container for PDF */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4 flex justify-center">
            <Document
                file="/files/resume.pdf" // Fixed path to absolute
                className="shadow-lg"
                loading={<div className="p-10 text-gray-500">Loading PDF...</div>}
                error={<div className="p-10 text-red-500">Failed to load PDF. Ensure /public/files/resume.pdf exists.</div>}
            >
                {/* Fixed width prevents horizontal overflow, scale makes it fit nicely */}
                <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} width={550} />
            </Document>
        </div>
    </div>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;