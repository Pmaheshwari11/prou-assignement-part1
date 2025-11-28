import { useEffect } from "react";
import { AlertCircle, Undo, X } from "lucide-react";

export default function Toast({ message, actionLabel, onAction, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-gray-900 text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-sm border border-gray-700">
        <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {actionLabel && (
          <button
            onClick={() => {
              onAction();
              onClose();
            }}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition"
          >
            <Undo size={14} />
            {actionLabel}
          </button>
        )}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition ml-2"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

// Add to your CSS or Tailwind
/*
@keyframes slide-up {
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up { animation: slide-up 0.4s ease-out; }
*/
