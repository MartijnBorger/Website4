export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="24" cy="24" r="20" stroke="#003366" strokeWidth="4" />
      <circle cx="24" cy="24" r="10" stroke="#00A38C" strokeWidth="4" />
    </svg>
  );
}
