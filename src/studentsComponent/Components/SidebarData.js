import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Student Portal',
    path: '/',
    icon: <FaIcons.FaUserGraduate />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback Form',
    path: '/feedback',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Apply for Leave',
    path: '/leave',
    icon: <AiIcons.AiOutlineMail />,
    cName: 'nav-text'
  },
  {
    title: 'Ask Doubts',
    path: '/doubt',
    icon: <GiIcons.GiDiscussion />,
    cName: 'nav-text'
  },
];
