'use client';

import { Loader } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { UserInfoContext } from '~/infrastructure/context/userInfoContext';
import { navItems } from '~/shared/routes';

export default function NavBar() {
  const pathname = usePathname() || '/';
  const { loggedUser } = useContext(UserInfoContext);
  const [loadingOut, setLoadingOut] = useState<boolean>(false);

  const [hoveredPath, setHoveredPath] = useState(pathname);

  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  return (
    <div className="navBar">
      <div>
        <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            const query = item.path === '/history' ? { query: loggedUser?.username } : {};
            return (
              <Link
                key={item.path}
                className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                  isActive ? 'text-zinc-100' : 'text-zinc-400'
                }`}
                data-active={isActive}
                href={{ pathname: item.path, query }}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full subColor rounded-md -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: '100%',
                    }}
                    transition={{
                      type: 'spring',
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      {loggedUser && (
        <div className="flex items-center">
          {loadingOut && <Loader />}
          <button
            className="loginBtn"
            onClick={() => {
              setLoadingOut(true);
              Auth.signOut();
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
