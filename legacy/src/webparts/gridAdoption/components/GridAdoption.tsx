import * as React from 'react';
import styles from './GridAdoption.module.scss';
import { IGridAdoptionProps } from './IGridAdoptionProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class GridAdoption extends React.Component<IGridAdoptionProps, {}> {
  public render(): React.ReactElement<IGridAdoptionProps> {
    return (
      <div className={ styles.gridAdoption }>
        Hello I am a real responsive web part;
      </div>
    );
  }
}
