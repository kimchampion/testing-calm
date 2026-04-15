interface TimelineEventProps {
  title: string;
  time: string;
  isCurrent?: boolean;
  isFuture?: boolean;
}

export function TimelineEvent({ title, time, isCurrent = false, isFuture = false }: TimelineEventProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex flex-col items-center pt-1">
        <div 
          className={`w-3 h-3 rounded-full ${
            isCurrent ? 'bg-[#30B0C7]' : isFuture ? 'bg-gray-300' : 'bg-[#30B0C7]'
          }`}
        />
        {!isFuture && <div className="w-0.5 h-12 bg-gray-200 mt-1" />}
      </div>
      <div className={`flex-1 ${isFuture ? 'opacity-40' : ''}`}>
        <p className={`text-[17px] ${isCurrent ? 'font-semibold text-[#000000]' : 'text-[#223548]'}`}>
          {title}
        </p>
        <p className={`text-[15px] mt-1 ${isCurrent ? 'text-[#30B0C7] font-medium' : 'text-[#354A5F]'}`}>
          {time}
        </p>
      </div>
    </div>
  );
}
