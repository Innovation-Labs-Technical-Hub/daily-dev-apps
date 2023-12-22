import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { WidgetContainer } from '../widgets/common';
import FeedbackIcon from '../icons/Feedback';
import { ListCardDivider } from '../cards/Card';
import { searchDocs, searchFeedback } from '../../lib/constants';
import DocsIcon from '../icons/Docs';
import { WithClassNameProps } from '../utilities';
import { Button, ButtonSize, ButtonVariant } from '../buttons/ButtonV2';

export const SearchFeedback = ({
  className,
}: WithClassNameProps): ReactElement => (
  <WidgetContainer
    className={classNames('flex flex-col justify-around', className)}
  >
    <div className="flex p-4">
      <Button
        tag="a"
        target="_blank"
        rel="noopener"
        href={searchFeedback}
        icon={<FeedbackIcon />}
        variant={ButtonVariant.Tertiary}
        size={ButtonSize.Small}
      >
        Feedback
      </Button>
      <ListCardDivider className="mx-3" />
      <Button
        tag="a"
        target="_blank"
        rel="noopener"
        href={searchDocs}
        icon={<DocsIcon />}
        variant={ButtonVariant.Tertiary}
        size={ButtonSize.Small}
      >
        User guide
      </Button>
    </div>
    <p className="py-3 px-4 border-t typo-subhead text-theme-label-quaternary border-theme-divider-tertiary">
      daily.dev Search is in beta and can make mistakes. Verify important
      information.
    </p>
  </WidgetContainer>
);
