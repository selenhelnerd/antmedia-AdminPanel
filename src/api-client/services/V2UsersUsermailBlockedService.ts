/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2UsersUsermailBlockedService {
    /**
     * Returns if user is blocked. User is blocked for a specific time if there are login attempts
     * @returns any OK
     * @throws ApiError
     */
    public static getV2UsersBlocked({
        usermail,
        accept,
    }: {
        usermail: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/users/{usermail}/blocked',
            path: {
                'usermail': usermail,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
