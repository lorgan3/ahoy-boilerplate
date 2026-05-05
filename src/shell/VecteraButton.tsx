import { Box, Icon, IconOnlineMediumMeeting } from '@teamleader/ahoy';

import s from './shell.module.css';

// Round violet button shown in the topbar to promote the customer meeting
// (Vectera) add-on.
const VecteraButton = () => {
  return (
    <Box
      element="a"
      href="#"
      className={`${s.vecteraButton} ${s.vecteraButtonMarketing}`}
      title="Vectera"
      aria-label="Vectera"
    >
      <Icon opacity={1} color="neutral" tint="lightest">
        <IconOnlineMediumMeeting />
      </Icon>
    </Box>
  );
};

export default VecteraButton;
