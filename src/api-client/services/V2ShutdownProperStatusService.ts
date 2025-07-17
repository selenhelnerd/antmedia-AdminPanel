/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ShutdownProperStatusService {
    /**
     * Checks whether application or applications have shutdown properly or not.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2ShutdownProperStatus({
        accept,
        appNames,
    }: {
        accept?: string,
        /**
         * (Required) Application name
         */
        appNames?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/shutdown-proper-status',
            headers: {
                'Accept': accept,
            },
            query: {
                'appNames': appNames,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
