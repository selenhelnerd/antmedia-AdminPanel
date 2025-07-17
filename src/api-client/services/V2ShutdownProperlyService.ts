/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ShutdownProperlyService {
    /**
     * Set application or applications shutdown property to true
     * @returns any OK
     * @throws ApiError
     */
    public static getV2ShutdownProperly({
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
            url: '/v2/shutdown-properly',
            headers: {
                'Accept': accept,
            },
            query: {
                'appNames': appNames,
            },
        });
    }
}
