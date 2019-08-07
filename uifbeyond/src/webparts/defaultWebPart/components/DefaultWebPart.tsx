import * as React from 'react';
import styles from './DefaultWebPart.module.scss';
import { IDefaultWebPartProps } from './IDefaultWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class DefaultWebPart extends React.Component<IDefaultWebPartProps, {}> {
  public render(): React.ReactElement<IDefaultWebPartProps> {
    return (
      <div className={ styles.defaultWebPart }>
        <div className="ms-Grid">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!--</span>
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
