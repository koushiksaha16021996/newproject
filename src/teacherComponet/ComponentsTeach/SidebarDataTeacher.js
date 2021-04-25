import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Teacher Portal',
    path: '/',
    icon: <GiIcons.GiTeacher />,
    cName: 'nav-text'
  },
  {
    title: 'Student Info',
    path: '/studentinfo',
    icon: <FaIcons.FaUserGraduate />,
    cName: 'nav-text'
  },
  {
    title: 'Add Student',
    path: '/addStudent',
    icon: <MdIcons.MdGroupAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Faculty Details',
    path: '/facultyDetails',
    icon: <FaIcons.FaChalkboardTeacher />,
    cName: 'nav-text'
  },
  {
    title: 'Take Attendance',
    path: '/takeAttendance',
    icon: <SiIcons.SiGooglesheets />,
    cName: 'nav-text'
  },
];
