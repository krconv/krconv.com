import React, { useState, useCallback } from "react";

import copy from "clipboard-copy";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from '@material-ui/core/Fade';
import IconButton from "@material-ui/core/IconButton";

export default function CopyToClipboardIconButton({value, tooltip, ...iconButtonProps}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = useCallback(() => {
    copy(value);
    setShowTooltip(true);
  }, [value, setShowTooltip]);

  return (
    <Tooltip
      open={showTooltip}
      title={tooltip}
      leaveDelay={1500}
      onClose={() => setShowTooltip(false)}
      TransitionComponent={Fade}
    >
      <IconButton onClick={handleClick} {...iconButtonProps} />
    </Tooltip>
  );
}
