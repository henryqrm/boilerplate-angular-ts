export class AuthInterception {
  /** @ngInject */
  constructor($rootScope, $q, $injector, $window) {
    return {
      request(config) {
        config.headers = config.headers || {};

        if ($window.localStorage.getItem('token')) {
          config.headers.Authorization = `Bearer ${$window.localStorage.getItem('token')}`;
        }
        return config;
      },

      responseError(response) {
        if (response.status === 401) {
            $rootScope.$emit('modalLogin');

        //   (state || (state = $injector.get('$state')))
        //   .go('login');
          $window.localStorage.removeItem('token');
        }
        return $q.reject(response);
      }
    };
  }
}