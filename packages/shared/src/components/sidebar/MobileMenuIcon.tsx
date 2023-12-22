import React, { ReactElement, useContext } from 'react';
import classNames from 'classnames';
import AnalyticsContext from '../../contexts/AnalyticsContext';
import ArrowIcon from '../icons/Arrow';
import { SimpleTooltip } from '../tooltips/SimpleTooltip';
import { Button, ButtonSize, ButtonVariant } from '../buttons/ButtonV2';

interface MobileMenuIconProps {
  sidebarExpanded: boolean;
  toggleSidebarExpanded: () => void;
}

export function MobileMenuIcon({
  sidebarExpanded,
  toggleSidebarExpanded,
}: MobileMenuIconProps): ReactElement {
  const { trackEvent } = useContext(AnalyticsContext);
  const trackAndToggleSidebarExpanded = () => {
    trackEvent({
      event_name: `${sidebarExpanded ? 'open' : 'close'} sidebar`,
    });
    toggleSidebarExpanded();
  };

  return (
    <SimpleTooltip
      placement="right"
      content={`${sidebarExpanded ? 'Close' : 'Open'} sidebar`}
    >
      <Button
        onClick={trackAndToggleSidebarExpanded}
        variant={ButtonVariant.Primary}
        className={classNames(
          'absolute h-6 w-6 top-3 -right-3 z-3',
          sidebarExpanded &&
            'transition-opacity invisible group-hover:visible opacity-0 group-hover:opacity-100',
        )}
        size={ButtonSize.XSmall}
      >
        <ArrowIcon
          className={classNames(
            'typo-title3',
            sidebarExpanded ? '-rotate-90' : 'rotate-90',
          )}
        />
      </Button>
    </SimpleTooltip>
  );
}
