/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2AuthenticationStatusService {
    /**
     * Returns true if user is authenticated to call rest api operations.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2AuthenticationStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/authentication-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
