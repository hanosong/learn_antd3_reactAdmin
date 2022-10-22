import React from "react";
import { Tooltip } from "antd";

// 宽度可控的表格
export  function defaultColumnsConfig (width='200px') {
    return {
        width:width,
        align: 'center',
        onCell:() => (
            {
                style:{
                    overflow:'hidden',
                    textOverflow: 'ellipsis',
                    wordBreak: 'break-all',
                    cursor:'pointer',
                    fontWeight:'bold',
                }
            }
        ),
        render:(text) => <Tooltip 
            overlayClassName = 'guip-tooltip-default' 
            placement='topLeft' 
            title={text}>{text}
        </Tooltip>
    }
}