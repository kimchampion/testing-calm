interface PaginationDotsProps {
  total: number;
  current: number;
}

export function PaginationDots({ total, current }: PaginationDotsProps) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all ${
            index === current
              ? 'w-6 bg-[#30B0C7]'
              : 'w-2 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
