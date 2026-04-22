/*
Based on: https://codesandbox.io/embed/6brgz
*/

import React from "react";
import { NavItem } from "reactstrap";
import { NavLink as RRNavLink, Route, Navigate, Routes, useLocation, useResolvedPath } from "react-router-dom";

import FallbackLoading from "../misc/FallbackLoading";

// hook
export default function useRouterTabs({ routes, redirect, }) {
  const hLocation = useLocation();
  const resolvedPath = useResolvedPath("");
  const localRoutes = routes || [];

  const activeKey = React.useMemo(() => {
    const a = localRoutes.find(r => {
      const loc1 = hLocation.pathname;
      const loc2 = `${resolvedPath.pathname}/${r.location}`.replaceAll("//", "");
      return loc1.includes(loc2);
    });
    return a?.key;
  }, [localRoutes, hLocation.pathname, resolvedPath.pathname]);

  /**
   * Renders the reactstrap `NavItem`s. Note that reactstrap's `NavLink`
   * component actually renders react-router-dom's `NavLink` component in order
   * to use the props that exist on react-router-dom's version, such as `to`
   * and `exact`.
   *
   * See <https://github.com/reactstrap/reactstrap/issues/1285#issuecomment-446592497>.
   */
  const renderNavItems = React.useCallback(
    () =>
      localRoutes.map(({ key, Title, location, }) => (
        <NavItem key={`routertabs-${key}-navitem`}>
          <RRNavLink
            className={({ isActive, }) => `nav-link${isActive ? " active" : ""}`}
            to={location}
            end
          >
            <Title />
          </RRNavLink>
        </NavItem>
      )),
    [localRoutes]
  );

  /**
   * Renders `Route` components.
   */
  const renderRoutes = React.useCallback(
    () =>
      <Routes>
        {localRoutes.map(({ key, Component, location, }) => 
          <Route
            key={`routertabs-${key}-route`}
            path={`${location}/*`}
            element={
              <React.Suspense fallback={<FallbackLoading />}>
                <Component />
              </React.Suspense>
            }
          />
        )}
      {redirect && localRoutes.length &&
        <Route
          key="routertabs-redirect"
          path="*"
          element={<Navigate to={localRoutes[0].location} />}
        />}
      </Routes>,

    [localRoutes, redirect]
  );

  return { activeKey, renderNavItems, renderRoutes, };
}
