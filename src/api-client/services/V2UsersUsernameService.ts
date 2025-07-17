/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2UsersUsernameService {
    /**
     * Delete the user from the server management panel's user list
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2Users({
        username,
        accept,
    }: {
        username: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/users/{username}',
            path: {
                'username': username,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
