import * as React from 'react';
import styles from './TheFlexBox.module.scss';
import { ITheFlexBoxProps } from './ITheFlexBoxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TheFlexBox extends React.Component<ITheFlexBoxProps, {}> {
  public render(): React.ReactElement<ITheFlexBoxProps> {
    return (
      <div className={ styles.theFlexBox }>
        <div className="item-card">
          <div className="item-text">A</div>
        </div>
        <div className="item-card">
          <div className="item-text">B</div>
        </div>
        <div className="item-card">
          <div className="item-text">C</div>
        </div>
        <div className="item-card">
          <div className="item-text">D</div>
        </div>
        <div className="item-card">
          <div className="item-text">E</div>
        </div>
        <div className="item-card">
          <div className="item-text">F</div>
        </div>
        <div className="item-card">
          <div className="item-text">G</div>
        </div>
        <div className="item-card">
          <div className="item-text">H</div>
        </div>
        <div className="item-card">
          <div className="item-text">I</div>
        </div>
        <div className="item-card">
          <div className="item-text">J</div>
        </div>
      </div>
    );
  }
}
