
export const MOCK_QUOTES = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" }
];

let lastQuoteIndex = -1;

export const customStyles = `
    /* Animation Keyframes */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .quote-card { animation: fadeIn 0.8s ease-out; }

    @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .animated-bg {
        background: linear-gradient(-45deg, #f7f9fc, #eef1f6, #e6e9ef, #f7f9fc);
        background-size: 400% 400%;
        animation: gradient-shift 15s ease infinite;
    }
`;