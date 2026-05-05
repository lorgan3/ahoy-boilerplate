import { TextSmall } from '@teamleader/ahoy';
import { createElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from './Logo';
import { MODULES } from './modules';
import s from './navigation.module.css';

const PrimaryNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeModuleId = location.pathname.split('/').filter(Boolean)[0];
  const isDashboardActive = activeModuleId === 'dashboard';

  return (
    <nav className={s.primary} aria-label="Primary">
      <Logo active={isDashboardActive} />
      <div className={s.modulesContainer}>
        <div className={s.modulesList}>
          {MODULES.map((module) => {
            const isActive = module.id === activeModuleId;
            const IconComponent = isActive ? module.iconActive : module.icon;
            const target = module.id === 'settings' ? '/settings' : `/${module.id}/overview`;

            return (
              <a
                key={module.id}
                href={target}
                className={`${s.module} ${isActive ? s.moduleActive : ''}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(target);
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={s.moduleIcon}>{createElement(IconComponent)}</span>
                <TextSmall className={s.moduleTitle}>
                  <strong>{module.label}</strong>
                </TextSmall>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNavigation;
