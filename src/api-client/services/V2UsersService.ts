/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2UsersService {
    /**
     * Creates a new user. If user object is null or if user is not authenticated, new user won't be created.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2Users({
        contentType,
        accept,
        requestBody,
    }: {
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/users',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Edit the user in the server management panel's user list. It can change password or user type(admin, read only)
     * @returns any OK
     * @throws ApiError
     */
    public static putV2Users({
        contentType,
        accept,
        requestBody,
    }: {
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/users',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
