import {
  Avatar,
  Box,
  Button,
  Counter,
  IconAddSmallOutline,
  IconBellMediumOutline,
  IconButton,
  IconContactsMediumOutline,
  IconHelpBadgedMediumOutline,
  IconSearchSmallOutline,
  MarketingButton,
  Timer,
} from '@teamleader/ahoy';
import type { ReactNode } from 'react';

import { USER_NAME, NOTIFICATION_COUNT } from '../config';
import ChangelogIcon from './ChangelogIcon';
import VecteraButton from './VecteraButton';
import s from './shell.module.css';

interface TopbarProps {
  /** Renders on the left side of the topbar — typically the secondary nav. */
  children?: ReactNode;
}

// A stable random-looking uuid string for Avatar so its initials get a
// deterministic background color. The value is arbitrary — Avatar hashes it.
const AVATAR_ID = 'ahoy-boilerplate-user-7f8b3c2e';

const Topbar = ({ children }: TopbarProps) => {
  return (
    <header className={s.topbar} aria-label="Top">
      <div className={s.topbarSecondary}>{children}</div>
      <div className={s.topbarActions}>
        <label className={s.searchBar}>
          <span className={s.searchIcon} aria-hidden>
            <IconSearchSmallOutline />
          </span>
          <input className={s.searchInput} type="search" placeholder="Search..." />
        </label>

        <Button
          level="primary"
          size="small"
          icon={<IconAddSmallOutline />}
          aria-label="Create new"
          title="Create new"
        />

        <Box className={s.iconBadgeWrapper}>
          <IconButton
            icon={<IconBellMediumOutline />}
            color="teal"
            aria-label="Notifications"
            title="Notifications"
          />
          <Counter
            count={NOTIFICATION_COUNT}
            maxCount={9}
            color="ruby"
            size="small"
            className={s.notificationBadge}
          />
        </Box>

        <IconButton
          icon={<IconContactsMediumOutline />}
          color="teal"
          aria-label="Contacts"
          title="Contacts"
        />

        <IconButton
          icon={<IconHelpBadgedMediumOutline />}
          color="teal"
          aria-label="Help"
          title="Help"
        />

        <MarketingButton
          level="primary"
          size="small"
          icon={<ChangelogIcon />}
          className={s.changelogButton}
          aria-label="What's new"
          title="What's new"
        />

        <Timer>00:00</Timer>

        <VecteraButton />

        <Avatar fullName={USER_NAME} id={AVATAR_ID} size="small" />
      </div>
    </header>
  );
};

export default Topbar;
