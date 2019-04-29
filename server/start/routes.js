'use strict';

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
    Route.post('auth/register', 'UserController.register')
})
    .prefix('api/v0');

