/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsTotalBroadcastStatisticsService {
    /**
     * Get the total broadcast live statistics total HLS watcher count, total WebRTC watcher count
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsTotalBroadcastStatistics({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/total-broadcast-statistics',
            headers: {
                'Accept': accept,
            },
        });
    }
}
