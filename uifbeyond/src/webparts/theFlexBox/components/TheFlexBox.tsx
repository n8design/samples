import * as React from 'react';
import styles from './TheFlexBox.module.scss';
import { ITheFlexBoxProps } from './ITheFlexBoxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TheFlexBox extends React.Component<ITheFlexBoxProps, {}> {
  public render(): React.ReactElement<ITheFlexBoxProps> {
    return (
      <div className={ styles.theFlexBox }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
