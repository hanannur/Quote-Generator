export const StatusMessage = ({ message }) => {
    if (!message) return <div className="h-6 mt-4"></div>; // Placeholder to prevent CLS
    const color = message.type === 'error' ? 'text-red-600' : 'text-green-600';
    return (
        <div className={`mt-4 text-center text-sm font-medium h-6 ${color}`}>
            {message.text}
        </div>
    );
};
