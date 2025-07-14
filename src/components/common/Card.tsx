// src/components/common/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div
    className={
      'bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto ' +
      className
    }
  >
    {children}
  </div>
);

export default Card;
