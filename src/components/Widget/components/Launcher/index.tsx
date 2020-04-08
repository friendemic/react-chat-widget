import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import Badge from './components/Badge';
import { GlobalState } from '../../../../store/types';
import { setBadgeCount } from '../../../../store/actions';

import './style.scss';

const openLauncher = require('../../../../../assets/launcher_button.svg') as string;
const close = require('../../../../../assets/clear-button.svg') as string;

type Props = {
  toggle: () => void
}

function Launcher({ toggle }: Props) {
  const dispatch = useDispatch();
  const { showChat, badgeCount } = useSelector((state: GlobalState) => ({
    showChat: state.behavior.showChat,
    badgeCount: state.messages.badgeCount
  }));
  const toggleChat = () => {
    toggle();
    if (!showChat) dispatch(setBadgeCount(0));
  }

  return (
    <button type="button" className={cn('rcw-launcher', { 'rcw-hide-sm': showChat })} onClick={toggleChat}>
      {!showChat && <Badge badge={badgeCount} />}
      {showChat ?
        <img src={close} className="rcw-close-launcher" alt="" /> :
        <img src={openLauncher} className="rcw-open-launcher" alt="" />
      }
    </button>
  );
}

export default Launcher;
