export const QuoteDisplay = ({ quote, author }) => (
    <div id="quote-content">
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 italic text-center mb-6 relative font-semibold" style={{ lineHeight: 1.4 }}>
            {/* Large Quote Marks */}
            <span className="absolute -top-6 -left-4 text-6xl text-indigo-200 opacity-70 font-serif hidden sm:block">“</span>
            {quote}
            <span className="absolute -bottom-10 -right-4 text-6xl text-indigo-200 opacity-70 font-serif hidden sm:block">”</span>
        </p>

        {/* Author/Source */}
        <p className="text-lg md:text-xl font-medium text-gray-500 text-right mt-12 pr-4">
            — {author}
        </p>
    </div>
);