import { useState, useEffect, useCallback } from 'react';
import { MOCK_QUOTES } from '../utils/constants';

let lastQuoteIndex = -1;    
export const useQuoteLogic = () => {
    const [quote, setQuote] = useState("Loading wisdom...");
    const [author, setAuthor] = useState("The Universe");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [copyText, setCopyText] = useState('Copy Quote');

    // Utility to handle UI feedback messages
    const showMessage = (text, type = 'success') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    /**
     * Replaces current MOCK with a real API call.
     * This is the function you would update for your new API.
     */
    const fetchNewQuote = useCallback(async () => {
        setIsLoading(true);
        setMessage(null);
        setCopyText('Copy Quote');

        try {
            // --- API INTEGRATION POINT ---
            // Replace the following mock logic with your actual fetch call:
            // const response = await fetch('YOUR_API_ENDPOINT');
            // const data = await response.json();
            // const newQuote = { text: data.quote, author: data.author };

            // Mock implementation:
            await new Promise(resolve => setTimeout(resolve, 800));
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * MOCK_QUOTES.length);
            } while (randomIndex === lastQuoteIndex);
            lastQuoteIndex = randomIndex;
            const newQuote = MOCK_QUOTES[randomIndex];
            // --- END API INTEGRATION POINT ---

            // Apply fade out effect before setting new quote
            const card = document.getElementById('quote-card');
            if (card) card.style.opacity = '0';

            setTimeout(() => {
                setQuote(newQuote.text);
                setAuthor(newQuote.author);
                if (card) {
                    card.style.opacity = '1';
                    card.style.animation = 'fadeIn 0.8s ease-out';
                }
            }, 200);

        } catch (error) {
            console.error("Failed to fetch quote:", error);
            showMessage("Could not load quote. Please try again.", 'error');
            setQuote("An error occurred while fetching inspiration.");
            setAuthor("App Developer");
        } finally {
            setIsLoading(false);
        }
    }, []);


    const copyToClipboard = useCallback(() => {
        if (isLoading) return;
        
        const textToCopy = `${quote}\n\n— ${author}`;
        
        // Use temporary textarea for reliable copy in embedded environments
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                setCopyText('Copied!');
                setTimeout(() => setCopyText('Copy Quote'), 1500);
                showMessage("Quote copied to clipboard!", 'success');
            } else {
                throw new Error('Fallback copy failed');
            }
        } catch (err) {
            console.error('Copy failed:', err);
            showMessage("Copy failed. Please select text manually.", 'error');
        } finally {
            document.body.removeChild(textarea);
        }
    }, [quote, author, isLoading]);

    // Fetch initial quote on mount
    useEffect(() => {
        fetchNewQuote();
    }, [fetchNewQuote]);

    return {
        quote,
        author,
        isLoading,
        message,
        copyText,
        fetchNewQuote,
        copyToClipboard,
    };
};