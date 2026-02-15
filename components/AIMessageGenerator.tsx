import React, { useState } from 'react';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import { generateGiftMessage } from '../services/geminiService';

export const AIMessageGenerator: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [occasion, setOccasion] = useState('');
  const [tone, setTone] = useState('Romantic');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!recipient || !occasion) return;
    
    setIsLoading(true);
    setGeneratedMessage('');
    setCopied(false);
    
    const message = await generateGiftMessage({ recipient, occasion, tone });
    
    setGeneratedMessage(message);
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-2xl shadow-xl overflow-hidden text-white">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-yellow-300" />
          <h2 className="text-2xl font-bold font-serif">AI Gift Message Writer</h2>
        </div>
        
        <p className="mb-6 text-rose-100">
          Struggling to find the right words for your bouquet card? Let our AI write a heartfelt message for you!
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-rose-100 mb-1">Who is this for?</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="e.g. My Girlfriend, Wife, Best Friend"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-rose-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-100 mb-1">What's the occasion?</label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 [&>option]:text-gray-900"
            >
              <option value="" disabled>Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Apology">I'm Sorry</option>
              <option value="Love">Just to say I Love You</option>
              <option value="Congratulations">Congratulations</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-rose-100 mb-1">Tone</label>
            <div className="flex gap-2">
              {['Romantic', 'Funny', 'Formal'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    tone === t 
                      ? 'bg-white text-rose-600' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading || !recipient || !occasion}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-rose-900 font-bold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            Generate Message
          </button>
        </div>

        {generatedMessage && (
          <div className="mt-6 bg-white/10 rounded-lg p-4 border border-white/20 relative animate-in fade-in slide-in-from-bottom-4">
            <p className="font-serif italic text-lg leading-relaxed">"{generatedMessage}"</p>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-white/20 transition-colors text-white"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};