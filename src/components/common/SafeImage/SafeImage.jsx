import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function SafeImage({
  src,
  alt = '',
  className = '',
  fallbackText = 'تصویر در دسترس نیست',
  ...rest
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`safe-image-fallback ${className}`.trim()} role="img" aria-label={alt}>
        <div className="safe-image-fallback__inner">
          <ImageOff size={32} />
          <span>{fallbackText}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
      {...rest}
    />
  );
}
