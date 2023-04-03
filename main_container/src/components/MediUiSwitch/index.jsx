import React, { useState } from "react";

const MediUiSwitch = (props) => {

  const [switchState,setSwitchState] =  useState(props.isCheckedr);

  const handleCallback = () => props.getSwitchClick(!switchState)
  return (
    // <!-- Default switch -->
    
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                  checked={props.isCheckedr ? "checked" : ""}   onClick={handleCallback}/>
</div>
  );
};

export default MediUiSwitch;
