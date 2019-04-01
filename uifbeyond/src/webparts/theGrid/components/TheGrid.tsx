import * as React from 'react';
import styles from './TheGrid.module.scss';
import { ITheGridProps } from './ITheGridProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TheGrid extends React.Component<ITheGridProps, {}> {
  public render(): React.ReactElement<ITheGridProps> {
    return (
      <div className={ styles.theGrid }>
        <div>1</div>
        <div>2</div>
        <div>
          <div className="header">
            ancdefg
          </div>
        </div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
      </div>
    );
  }
}
