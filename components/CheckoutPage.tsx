import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CreditCard, Mail, ShieldCheck, CheckCircle, Lock } from 'lucide-react';
import Button from './Button';

const CheckoutPage: React.FC = () => {
  const { items, cartTotal, setView, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'gcash'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-gray-400 max-w-md mb-8 text-lg">
          Thank you for your purchase. We've sent the download links to <span className="text-white font-medium">{email}</span>.
        </p>
        <Button onClick={() => setView('home')} variant="primary" icon>
          Return to Home
        </Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
        <Button onClick={() => setView('home')} variant="white">
          Go Back Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12 flex items-center gap-4">
          <button 
            onClick={() => setView('home')} 
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handlePayment} className="space-y-10">
              
              {/* Contact Info */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold ring-1 ring-indigo-500/50">1</span>
                  <h2 className="text-lg font-semibold text-white">Contact Information</h2>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-gray-900 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <p className="text-xs text-gray-600 ml-1">Your files will be sent to this email immediately after purchase.</p>
                </div>
              </section>

              {/* Payment Method */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold ring-1 ring-indigo-500/50">2</span>
                  <h2 className="text-lg font-semibold text-white">Payment Method</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`relative p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${
                      paymentMethod === 'card' 
                      ? 'bg-indigo-600/10 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                      : 'bg-gray-900 border-white/10 text-gray-500 hover:border-white/20 hover:bg-gray-800'
                    }`}
                  >
                    <CreditCard className="w-6 h-6" />
                    <span className="text-sm font-medium">Card</span>
                    {paymentMethod === 'card' && <div className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,1)]"></div>}
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`relative p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${
                      paymentMethod === 'paypal' 
                      ? 'bg-indigo-600/10 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                      : 'bg-gray-900 border-white/10 text-gray-500 hover:border-white/20 hover:bg-gray-800'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M7.076 21.337l.756-4.828h3.256c3.957 0 6.674-2.28 6.674-6.658 0-3.328-2.584-5.35-6.14-5.35H5L2.5 19.78h4.576z"/></svg>
                    <span className="text-sm font-medium">PayPal</span>
                    {paymentMethod === 'paypal' && <div className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,1)]"></div>}
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gcash')}
                    className={`relative p-4 rounded-xl border flex flex-col items-center justify-center gap-3 transition-all ${
                      paymentMethod === 'gcash' 
                      ? 'bg-indigo-600/10 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.15)]' 
                      : 'bg-gray-900 border-white/10 text-gray-500 hover:border-white/20 hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-lg font-bold">G</span>
                    <span className="text-sm font-medium">GCash</span>
                    {paymentMethod === 'gcash' && <div className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,1)]"></div>}
                  </button>
                </div>

                {/* Mock Card Input - Visible only if card selected */}
                {paymentMethod === 'card' && (
                  <div className="animate-fade-in p-5 bg-gray-900/50 rounded-xl border border-white/5 space-y-4">
                     <div className="space-y-1">
                        <label className="text-xs text-gray-500">Card Number</label>
                        <div className="flex items-center bg-gray-950 border border-white/10 rounded-lg px-3 py-3">
                           <CreditCard className="w-4 h-4 text-gray-500 mr-3" />
                           <input type="text" placeholder="0000 0000 0000 0000" className="bg-transparent w-full text-white text-sm focus:outline-none placeholder-gray-700" />
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <label className="text-xs text-gray-500">Expiry</label>
                           <input type="text" placeholder="MM/YY" className="bg-gray-950 border border-white/10 rounded-lg px-3 py-3 w-full text-white text-sm focus:outline-none placeholder-gray-700" />
                        </div>
                        <div className="space-y-1">
                           <label className="text-xs text-gray-500">CVC</label>
                           <input type="text" placeholder="123" className="bg-gray-950 border border-white/10 rounded-lg px-3 py-3 w-full text-white text-sm focus:outline-none placeholder-gray-700" />
                        </div>
                     </div>
                  </div>
                )}
              </section>

              <div className="pt-4">
                <Button 
                  variant="primary" 
                  className="w-full h-14 text-lg font-semibold shadow-lg shadow-indigo-600/20"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                       <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                       Processing Payment...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Lock className="w-4 h-4" />
                      Pay ₱{cartTotal.toLocaleString()}
                    </span>
                  )}
                </Button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Payments are secure and encrypted.</span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="bg-gray-900 border border-white/5 rounded-2xl p-6 lg:p-8 sticky top-6">
              <h3 className="text-lg font-semibold text-white mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-start">
                    <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded-lg bg-gray-800" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium text-white leading-tight pr-4">{item.title}</h4>
                        <span className="text-sm font-medium text-gray-300">₱{item.price.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.tags.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span>₱{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Taxes</span>
                  <span>₱0.00</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-center">
                <span className="text-base font-semibold text-white">Total</span>
                <span className="text-2xl font-bold text-indigo-400">₱{cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;