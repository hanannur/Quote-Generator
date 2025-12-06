import React, { useState, useEffect, useCallback } from 'react';

import { Star } from 'lucide-react';
import { useQuoteLogic } from './hooks/useQuoteLogic';
import { QuoteDisplay } from './components/QuoteDisplay';
import { ActionButtons } from './components/ActionButton';
import { customStyles } from './utils/constants';
import { StatusMessage } from './components/StatusMessage';



const App = () => {
    // 1. Get state and actions from the logic hook
    const { 
        quote, 
        author, 
        isLoading, 
        message, 
        copyText, 
        fetchNewQuote, 
        copyToClipboard 
    } = useQuoteLogic();

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            <div className="animated-bg min-h-screen flex justify-center items-center p-4">
                
                {/* Main Container */}
                <div className="w-full max-w-4xl">

                    {/* Header */}
                    <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 sm:text-5xl">
                        <Star className="inline h-8 w-8 text-emerald-600 mr-2 -mt-1" /> Inspiration Hub
                    </h1>

                    {/* Quote Card */}
                    <div 
                       
                        className="quote-card bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-b-4 border-emerald-600 mx-auto transition-all duration-300 hover:shadow-3xl hover:translate-y-[-4px]"
                        style={{ position: 'relative', zIndex: 10 }}
                    >
                        {/* 2. Render Quote Display Component */}
                        <QuoteDisplay quote={quote} author={author} />

                        {/* 3. Render Action Buttons Component */}
                        <ActionButtons
                            isLoading={isLoading}
                            copyText={copyText}
                            fetchNewQuote={fetchNewQuote}
                            copyToClipboard={copyToClipboard}
                        />

                        {/* 4. Render Status Message */}
                        <StatusMessage message={message} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default App;