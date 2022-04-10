
## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'myui';

export default () => <Button
      type="primary"
      width={60}
      height={28}>按钮
  </Button>;
```


```tsx
import React from 'react';
import { Button } from 'myui';

export default () => (
  <div>
    <div>
      <p>基本类型</p>
      <Button
          margin="5px 5px"
          type="primary"
          disable={true}>
        primary
      </Button>
      <Button
          margin="5px 5px"
          type="secondary">
        secondary
      </Button>
      <Button
          margin="5px 5px"
          type="danger">
        danger
      </Button>
      <div style={{ backgroundColor: '#000' }}>
        <Button
            tooltip="黑色背景的 transparent"
            margin="5px 5px"
            type="transparent">
          transparent
        </Button>
      </div>
    </div>
    <div>
      <p>disabled</p>
      <Button
          disable
          margin="5px 5px"
          type="primary">
        primary disabled
      </Button>
      <Button
          disable
          margin="5px 5px"
          type="secondary">
        secondary disabled
      </Button>
      <Button
          disable
          margin="5px 5px"
          type="danger">
        danger disabled
      </Button>
    </div>
    <div>
      <p>尺寸</p>
      <Button
          size="lg"
          margin="5px 5px"
          type="primary">
        大
      </Button>
      <Button
          size="md"
          margin="5px 5px"
          type="primary">
        中
      </Button>
      <Button
          size="sm"
          margin="5px 5px"
          type="primary">
        小
      </Button>
      <Button
          size="esm"
          margin="5px 5px"
          type="primary">
        超小
      </Button>
    </div>
  </div>
);
```


## API

| 属性 | 说明     | 类型                                         | 默认值 | 是否必填 |
| ---- | -------- | -------------------------------------------- | ------ | ----- |
| type | 按钮类型，如果没有引入主题色，<br/>则样式颜色规则不生效 | transparent \| none \| light \| light-header \| dark \| <br/>dark3 \| dark4 \| primary \| primary-light-dis \| danger \| <br/>warning \| warning-outline \| secondary \| primary-outline | transparent | 否 |
| onClick | 点击事件 | (e:React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void | undefined | 否 |
| onContextMenu | 菜单事件 | (e:React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void | undefined | 否 |
| onMouseEnter | 鼠标进入事件 | (e:React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void | undefined | 否 |
| onMouseLeave | 鼠标离开事件 | (e:React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void | undefined | 否 |
| dataReport | 事件上报内容 | string | undefined | 否 |
| tooltip | 悬浮提示 | string | undefined | 否 |
| width | 按钮宽度 | string  \|  number | undefined | 否 |
| height | 按钮高度 | string | undefined | 否 |
| isSelected | 是否被选中 | boolean | undefined | 否 |
| margin | 按钮边距 | string | undefined | 否 |
| padding | 按钮填充 | string | undefined | 否 |
| borderRadius | 按钮圆角 | string | undefined | 否 |
| disable | 是否禁用 | boolean | undefined | 否 |
| className | 按钮类名，应用到按钮内容上 | string | undefined | 否 |
| wrapClassName | 按钮类名，应用到按钮包裹层 | string | undefined | 否 |
| bgColor | 按钮背景色 | string | undefined | 否 |
| id | 按钮id | string | undefined | 否 |