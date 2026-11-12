import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`.trim()} aria-label="نوآوران داده - خانه">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
          <rect width="32" height="32" rx="9" fill="currentColor" />
          <path d="M9 22V10l7 7 7-7v12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="logo__text">
        <strong>نوآوران داده</strong>
        <small>NOVAVARAN DATA</small>
      </span>
    </Link>
  );
}
