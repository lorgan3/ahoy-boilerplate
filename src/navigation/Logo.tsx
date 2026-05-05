import { useNavigate } from 'react-router-dom';

import s from './navigation.module.css';

interface LogoProps {
  active?: boolean;
}

const Logo = ({ active = false }: LogoProps) => {
  const navigate = useNavigate();

  const className = `${s.logoWrapper} ${active ? s.logoActive : ''} ${s.logoClickable}`;

  return (
    <a
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigate('/dashboard/overview');
      }}
      href="/dashboard/overview"
    >
      <svg
        className={s.logo}
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
      >
        <path
          d="M27 41l-8-13h8v13zm0-14H8l19-13v13zm12.693 6L28 41V14l11.693 19zm-1.903-5l2.729 4.435L47 28h-9.21z"
          fill="#fff"
        />
      </svg>
    </a>
  );
};

export default Logo;
