/** ngInject */
export default ($animate, $timeout) => {
    return ({
        link: (scope, element, attributes) => {
            element.addClass('-leave');
            $timeout(() => {
                element.remove();
                scope = element = attributes = null;
            }, 300);
        },
        restrict: 'C'
    });
};
