/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2LastLicenceStatusService {
    /**
     * Returns the last checked license status. Includes license ID, owner, start date, end date, type and license count.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2LastLicenceStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/last-licence-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
