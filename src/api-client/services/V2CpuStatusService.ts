/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2CpuStatusService {
    /**
     * Returns system cpu load, process cpu load and process cpu time.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2CpuStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cpu-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
