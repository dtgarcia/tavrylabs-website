import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Get the current URL path from React Router.
  const { pathname } = useLocation();

  /*
   * Whenever the pathname changes, move the browser back
   * to the top of the page.
   *
   * Example:
   * "/" -> "/projects/arc-bench"
   *
   * The pathname changes, this effect runs, and the new
   * project page starts at the top instead of keeping the
   * scroll position from the previous page.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component does not display anything.
  return null;
}

export default ScrollToTop;