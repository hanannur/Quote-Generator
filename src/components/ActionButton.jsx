import { Clipboard, RefreshCw, Star } from 'lucide-react';
export const ActionButtons = ({ isLoading, copyText, fetchNewQuote, copyToClipboard }) => (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 mt-8 pt-4 border-t border-gray-100">
        <button 
            onClick={copyToClipboard}
            disabled={isLoading}
            className="flex items-center justify-center px-6 py-3 border border-emerald-600 text-emerald-600 bg-white rounded-full font-semibold shadow-md transition-all duration-200 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
        >
            <Clipboard className="h-5 w-5 mr-2" />
            <span id="copy-text">{copyText}</span>
        </button>

        <button 
            onClick={fetchNewQuote}
            disabled={isLoading}
            className="flex items-center justify-center px-8 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg shadow-emerald-500/40 transition-all duration-200 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
        >
            {isLoading ? (
                <RefreshCw className="h-6 w-6 mr-2 animate-spin" />
            ) : (
                <RefreshCw className="h-6 w-6 mr-2" />
            )}
            {isLoading ? 'Loading...' : 'New Inspiration'}
        </button>
    </div>
);