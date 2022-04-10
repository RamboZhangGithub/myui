import React, { ComponentPropsWithoutRef } from 'react';
import cx from 'classnames'

import './style.module.scss';

export type BtnType =
  | 'transparent' // 默认按钮，透明按钮,无任何反馈,不传type则默认为此样式
  | 'transparent-fb' // 透明，但有悬浮和点击反馈
  | 'primary' // 主要按钮，背景色号为0
  | 'danger' // 固定红色
  | 'secondary'; // 次要按钮，背景色较浅

export type BtnSize = 'lg' | 'md' | 'sm' | 'esm' | 'custom';

export interface ButtonProps extends ComponentPropsWithoutRef<'div'> {
  type?: BtnType;
  size?: BtnSize;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  dataReport?: string;
  tooltip?: string;
  width?: string | number;
  height?: string | number;
  isSelected?: boolean;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  disable?: boolean;
  bgColor?: string;
  id?: string;
  wrapClassName?: string;
}

type EventType = 'click' | 'enter' | 'leave' | 'context';

export class Button extends React.Component<ButtonProps, {}> {
  static defaultProps: Partial<ButtonProps> = {
    type: 'transparent',
    size: 'md',
  };

  private setClass = () => {
    const { type = 'transparent', size = 'md' } = this.props;
    return `${type} size-${size}`;
  };

  private preventMouseEventWhenDisable = (type: EventType) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.disable) {
      return;
    }
    const { onClick, onContextMenu, onMouseEnter, onMouseLeave } = this.props;
    if (type === 'click' && onClick) {
      onClick(e);
      return;
    }
    if (type === 'context' && onContextMenu) {
      onContextMenu(e);
      return;
    }
    if (type === 'enter' && onMouseEnter) {
      onMouseEnter(e);
      return;
    }
    if (type === 'leave' && onMouseLeave) {
      onMouseLeave(e);
      return;
    }
  };

  private inserSpaceIfTwoText = () => {
    const { children } = this.props;
    if (
      typeof children === 'string' &&
      children.length === 2 &&
      /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/.test(
        children,
      )
    ) {
      return children.split('').join(' ');
    }
    return children;
  };

  render() {
    const {
      bgColor,
      tooltip,
      width,
      height,
      dataReport,
      margin,
      isSelected,
      borderRadius,
      disable,
      className,
      padding,
      wrapClassName,
    } = this.props;
    return (
      <div
        className={cx('btn-wrap', wrapClassName)}
        // className="btn-wrap"
        style={{ width, height, margin, borderRadius: borderRadius }}>
        <div
          id={this.props.id}
          style={{
            borderRadius: borderRadius ? borderRadius : '',
            backgroundColor: bgColor || undefined,
            padding,
          }}
          // styleName={`btn ${disable ? 'disabled' : ''} ${this.setClass()}`}
          className={cx('btn', this.setClass(), className, { 'disabled': disable, 'selected': isSelected, })}
          // className={`${isSelected ? 'selected' : ''} ${className ?? ''}`}
          onClick={this.preventMouseEventWhenDisable('click')}
          onMouseEnter={this.preventMouseEventWhenDisable('enter')}
          onMouseLeave={this.preventMouseEventWhenDisable('leave')}
          onContextMenu={this.preventMouseEventWhenDisable('context')}
          data-report-click={dataReport}
        >
          {this.inserSpaceIfTwoText()}
        </div>
        {tooltip != null && <span className="btn-tooltip">{tooltip}</span>}
      </div>
    );
  }
}
