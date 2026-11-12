import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
      <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1rem' }}>۴۰۴</h1>
      <p style={{ marginBottom: '2rem' }}>صفحه‌ای که دنبالش بودید پیدا نشد.</p>
      <Link to="/" className="btn btn--primary btn--md">بازگشت به خانه</Link>
    </div>
  );
}
