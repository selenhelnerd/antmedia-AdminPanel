/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2FirstLoginStatusService {
    /**
     * Checks first login status. If server being logged in first time, it returns true, otherwise false.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2FirstLoginStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/first-login-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
