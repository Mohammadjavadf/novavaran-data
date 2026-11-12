import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',   // primary | secondary | ghost | outline
  size = 'md',           // sm | md | lg
  to,
  href,
  type = 'button',
  icon: Icon,
  iconPosition = 'start', // start | end
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {Icon && iconPosition === 'start' && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === 'end' && <Icon size={18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
}