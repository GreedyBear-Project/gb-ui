import React from "react";
import { MdInfoOutline } from "react-icons/md";
import { nanoid } from "nanoid";

import { UncontrolledTooltip } from "reactstrap";

export default function TableHintIcon(props) {
  const tooltipId = React.useMemo(() => `table-hint-icon-${nanoid(4)}`, []);

  return (
    <div {...props}>
      <MdInfoOutline id={tooltipId} />
      <UncontrolledTooltip
        target={tooltipId}
        trigger="hover"
        placement="right-start"
        flip
      >
        Hint: Hold <kbd>shift</kbd> to filter and order multiple columns
        together.
      </UncontrolledTooltip>
    </div>
  );
}
