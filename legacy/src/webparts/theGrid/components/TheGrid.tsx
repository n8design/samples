import * as React from 'react';
import styles from './TheGrid.module.scss';
import { ITheGridProps } from './ITheGridProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TheGrid extends React.Component<ITheGridProps, {}> {
  public render(): React.ReactElement<ITheGridProps> {
    return (
      <div className={ styles.theGrid }>
        <div>Lorem, ipsum.</div>
        <div>Cupiditate, quidem.</div>
        <div>Expedita, a?</div>
        <div>Nulla, quas?</div>
        <div>Pariatur, cum!</div>
        <div>Placeat, corporis?</div>
        <div>Nulla, ducimus.</div>
        <div>Dicta, amet?</div>
        <div>Nulla, voluptate.</div>
        <div>Dolore, doloremque?</div>
        <div>Dicta, ad?</div>
        <div>Itaque, tempore.</div>
        <div>Enim, sapiente.</div>
        <div>Quisquam, vero.</div>
        <div>Ullam, iusto.</div>
        <div>Officiis, quo?</div>
        <div>Cum, fuga?</div>
        <div>Suscipit, impedit?</div>
        <div>Earum, voluptate.</div>
        <div>Totam, dolorum!</div>
        <div>Esse, assumenda?</div>
        <div>Veniam, delectus.</div>
        <div>Aperiam, ratione!</div>
        <div>Beatae, nostrum.</div>
      </div>
    );
  }
}
