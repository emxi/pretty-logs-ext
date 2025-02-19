export default function LogoIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || 'size-6'}
    >
      <rect width="20" height="6" rx="3" fill="#8115A8" />
      <rect x="4" y="9" width="20" height="6" rx="3" fill="#EE4266" />
      <rect y="18" width="20" height="6" rx="3" fill="#D9B232" />
    </svg>
  )
}

type Props = {
  className?: string
}
