/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2UserListService {
    /**
     * Returns user list in the server management panel
     * @returns any OK
     * @throws ApiError
     */
    public static getV2UserList({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/user-list',
            headers: {
                'Accept': accept,
            },
        });
    }
}
