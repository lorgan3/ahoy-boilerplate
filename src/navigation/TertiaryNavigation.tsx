import { Heading4 } from '@teamleader/ahoy';
import { NavLink, useLocation } from 'react-router-dom';

import { TERTIARY_ITEMS } from '../pages/settings/tertiaryItems';
import s from './navigation.module.css';

const TertiaryNavigation = () => {
  const location = useLocation();
  const variant = location.pathname.endsWith('/detail') ? 'detail' : 'overview';

  return (
    <aside className={s.tertiary} aria-label="Settings sections">
      <Heading4 marginTop={4} marginBottom={2} marginHorizontal={4}>
        Settings
      </Heading4>
      <ul className={s.tertiaryList}>
        {TERTIARY_ITEMS.map((item) => (
          <li key={item.id} className={s.tertiaryItem}>
            <NavLink
              to={`/settings/${item.id}/${variant}`}
              className={({ isActive }) =>
                `${s.tertiaryLink} ${isActive ? s.tertiaryLinkActive : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TertiaryNavigation;
