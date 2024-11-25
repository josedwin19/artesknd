import React from 'react';
import { X } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export default function Cart({ items, onRemoveFromCart, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">€{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
                    className="border rounded p-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Proceder al Pago
            </button>
          </div>
        </>
      )}
    </div>
  );
}