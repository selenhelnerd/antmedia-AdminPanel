/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ClusterModeStatusService {
    /**
     * Returns the server mode. If it is in the cluster mode, result will be true.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2ClusterModeStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/cluster-mode-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
