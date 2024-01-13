export function MiddleSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl w-full px-6 bg-gray-400"></div>
  );
}

export function SocialMiddleSkeleton() {
  return (
    <div className="flex container mx-auto gap-5 py-10 px-6 flex-col items-center lg:flex-row lg:justify-center lg:gap-6">
      <div className="animate-pulse h-48 rounded-2xl w-full bg-gray-400"></div>
      <div className="animate-pulse h-48 rounded-2xl w-full bg-gray-400"></div>
    </div>
  );
}
