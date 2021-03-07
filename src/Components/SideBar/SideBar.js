import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {VscThreeBars} from 'react-icons/vsc'
import {ImBooks} from 'react-icons/im'
import {AiOutlineSchedule} from 'react-icons/ai'
import {MdOndemandVideo} from 'react-icons/md'
import './SideBar.css'


function SideBar(props) {
    return (
        <div className="navbar">
            <h2>WISDOM SCHOOL</h2>
            <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                elemBefore: () => <VscThreeBars />,
                subNav: [
                    {
                      title: 'Performance',
                      itemId: '/dashboard/Performance',
                    },
                    {
                        title: 'Profile',
                        itemId: '/dashboard/Profile',
                      },
                      {
                        title: 'Progress',
                        itemId: '/dashboard/Progress',
                      },
                      {
                        title: 'Scores',
                        itemId: '/dashboard/Scores',
                      }
                  ],
              },
              {
                title: 'Courses',
                itemId: '/Courses',
                elemBefore: () => <ImBooks/>,
                subNav: [
                  {
                    title: 'Modules',
                    itemId: '/Courses/Modules',
                  }
                ],
              },
              {
                title: 'Batches',
                itemId: '/Batches',
                elemBefore: () => <AiOutlineSchedule/>,
                subNav: [
                  {
                    title: 'Schedule',
                    itemId: '/Batches/Schedule',
                  },
                ],
              },
              {
                title: 'Sessions',
                itemId: '/Sessions',
                elemBefore: () => <MdOndemandVideo/>,
                subNav: [
                  {
                    title: 'Recorded',
                    itemId: '/Sessions/Recorded',
                  },
                  {
                    title: 'Upcoming',
                    itemId: '/Sessions/Upcoming',
                  },
                ],
              },
            ]}
          />
        </div>
    );
}

export default SideBar;