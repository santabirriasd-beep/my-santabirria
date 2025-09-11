// components/CartIcon.jsx
export default function CartIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3h2l2.4 12.3a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.6L21 8H7" />
      <circle cx="10" cy="20" r="1.8" />
      <circle cx="18" cy="20" r="1.8" />
    </svg>
  );
}
