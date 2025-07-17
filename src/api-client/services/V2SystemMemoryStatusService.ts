/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2SystemMemoryStatusService {
    /**
     * Gets system memory status. Returns Virtual, total physical, available physical, currently in use, total swap space, available swap space and in use swap space.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2SystemMemoryStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/system-memory-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
