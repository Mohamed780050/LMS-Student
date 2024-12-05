import { Loader2, Lock } from "lucide-react";

function ChapterVideo({ isFree }: { isFree: boolean }) {
  return (
    <>
      <div className="aspect-video relative">
        <div
          className={`absolute inset-0 flex items-center text-secondary justify-center bg-slate-800 ${
            !isFree && "flex-col gap-y-2"
          }`}
        >
          {isFree ? (
            <Loader2 className="h-8 w-8 animate-spin" />
          ) : (
            <>
              <Lock />
              <p className="text-sm">this chapter is Locked </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default ChapterVideo;
