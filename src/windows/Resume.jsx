import React, { useEffect, useRef, useState } from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { WindowControls } from '../components';
import { Download, AlertCircle, Loader } from 'lucide-react';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';

// 1. ROBUST WORKER SETUP
// Use the CDN worker that matches the installed react-pdf version exactly.
// We allow a fallback to a hardcoded version if pdfjs.version is somehow missing.
const pdfSdkVersion = pdfjs.version || '3.11.174'; 
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfSdkVersion}/build/pdf.worker.min.mjs`;

// 2. PDF OPTIONS
// Configuring CMaps is crucial for resolving font/character issues (like the TT warning).
const pdfOptions = {
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfSdkVersion}/cmaps/`,
    cMapPacked: true,
    standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfSdkVersion}/standard_fonts/`,
};

const Resume = () => {
    const [isError, setIsError] = useState(false);
    const [pageWidth, setPageWidth] = useState(550);
    const viewportRef = useRef(null);
    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            if (entry.contentRect.width > 0) setPageWidth(Math.min(800, Math.max(180, entry.contentRect.width - 32)));
        });
        observer.observe(viewportRef.current);
        return () => observer.disconnect();
    }, []);

    const onDocumentLoadSuccess = () => {

        setIsError(false);
    };

    const onDocumentLoadError = (error) => {
        console.error("PDF Load Error:", error);
        setIsError(true);
    };

    return (
        <div className="flex flex-col h-full w-full">
            <div id="window-header" className="flex-none">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>

                <a 
                    href="/files/MahendraResume.pdf" 
                    download
                    className='cursor-pointer hover:bg-white/10 p-1.5 rounded transition-colors text-[var(--muted)] hover:text-white'
                    title="Download Resume"
                >
                    <Download className='icon w-4 h-4' />
                </a>
            </div>

            {/* Scrollable Container */}
            <div ref={viewportRef} className="resume-viewport flex-1 overflow-auto p-4 relative">
                
                {/* 3. FALLBACK UI */}
                {isError ? (
                    <div className="flex flex-col items-center justify-center text-[var(--muted)] space-y-4 h-full">
                        <AlertCircle size={48} className="text-red-400" />
                        <p>Unable to render PDF preview.</p>
                        <a 
                            href="/files/MahendraResume.pdf" 
                            download 
                            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                        >
                            Download PDF Instead
                        </a>
                    </div>
                ) : (
                    <Document
                        file="/files/MahendraResume.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        options={pdfOptions}
                        className="shadow-2xl"
                        loading={
                            <div className="flex flex-col items-center justify-center text-[var(--muted)] mt-20">
                                <Loader className="animate-spin mb-2" />
                                <span className="text-xs">Loading Document...</span>
                            </div>
                        }
                    >
                        {/* renderTextLayer={false} removes selectable text but fixes z-index/CSS issues. */}
                        <Page 
                            pageNumber={1} 
                            renderAnnotationLayer={false} 
                            renderTextLayer={false} 
                            width={pageWidth}
                            className="bg-white" 
                            error={<div className="text-red-500 text-sm">Page Load Failed</div>}
                        />
                    </Document>
                )}
            </div>
        </div>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
