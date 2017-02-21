import * as angular from 'angular';
import PreBootstrap from './pre-bootstrap';

export const ComponentsModule = 'components';

angular
    .module(ComponentsModule, [])
    .directive('preBootstrap', PreBootstrap);
