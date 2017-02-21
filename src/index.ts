import * as angular from 'angular';
import 'angular-ui-router';

import { techsModule } from './app/techs/index';
import { ComponentsModule } from './app/components';
import routesConfig from './routes';

import { main } from './app/main';
import { header } from './app/header';
import { title } from './app/title';
import { footer } from './app/footer';

import './index.scss';

angular
  .module('app', [
    techsModule,
    ComponentsModule,
    'ui.router'
  ])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
