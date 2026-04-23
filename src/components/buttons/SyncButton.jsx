import React from "react";
import classnames from "classnames";
import { UncontrolledTooltip, Spinner } from "reactstrap";
import { MdSync } from "react-icons/md";

export default function SyncButton({ onClick, className = null, title = "Sync with server", ...restProps }) {

  // state
  const [wasClicked, setClicked] = React.useState(false);
  const timeoutRef = React.useRef(null);

  React.useEffect(
    () => () => {
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current);
    },
    []
  );

  // debounced
  const onClickCb = React.useCallback(
    async (e) => {
      setClicked(true);
      try {
        await onClick(e);
      } finally {
        if (timeoutRef.current)
          clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setClicked(false), 500);
      }
    },
    [onClick]
  );

  return (
    <div id="syncBtn" className={classnames("h4", className)} {...restProps}>
      {!wasClicked ? (
        <MdSync className="pointer" onClick={onClickCb} />
      ) : (
        <Spinner type="ripple" className="m-1 spinner-border-sm" />
      )}
      <UncontrolledTooltip placement="top" target="syncBtn">
        {title}
      </UncontrolledTooltip>
    </div>
  );
}

