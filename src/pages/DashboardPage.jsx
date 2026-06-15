import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import AppleShowcasePage from './AppleShowcasePage';

export default function DashboardPage() {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="relative">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-800">
            <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
              ¡Bienvenido! 🎉
            </h3>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Hola <strong>{user?.email}</strong>, has iniciado sesión correctamente. Explora Apple Store.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full rounded-xl bg-sky-500 p-3 font-semibold text-white transition hover:bg-sky-600"
            >
              Entrar al Dashboard
            </button>
          </div>
        </div>
      )}

      <AppleShowcasePage />
    </div>
  );
}