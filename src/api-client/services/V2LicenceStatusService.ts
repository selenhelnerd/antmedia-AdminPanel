/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2LicenceStatusService {
    /**
     * Returns license status. Includes license ID, status, owner, start date, end date, type and license count.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2LicenceStatus({
        accept,
        key,
    }: {
        accept?: string,
        /**
         * (Required) License key
         */
        key?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/licence-status',
            headers: {
                'Accept': accept,
            },
            query: {
                'key': key,
            },
        });
    }
}
