import React from 'react';
import Link from 'next/link';

const QuoteCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto my-8 p-6">
      <div className="flex-1">
        <blockquote className="text-2xl font-bold text-blue-900 mb-4">
          &ldquo;Unlock your potential, master innovation, and shape the
          future, one skill at a time.&rdquo;
        </blockquote>
        <p className="text-xl font-semibold mb-2">
          Prof. Eng. Jean Bosco Byiringiro (PhD, Reg. Eng.)
        </p>
        <Link href="#" className="text-blue-500 hover:underline">
          BIOGRAPHY&gt;&gt;
        </Link>
      </div>
    </div>
  );
};

export default QuoteCard;